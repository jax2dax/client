"use client"

import { useState } from "react"
import { treats } from "@/data/treats"
import TreatCard from "@/components/TreatCard"
import TreatSidebar from "@/components/TreatSidebar"

export default function TreatsPage() {
  const [selected, setSelected] = useState<any>(null)

  return (
    <div className="space-y-6">
      {/* MOBILE ONLY: show selected info at top */}
      {selected && (
        <div className="lg:hidden bg-white rounded-xl shadow-md p-4 relative">
          <button
            onClick={() => setSelected(null)}
            className="absolute top-2 right-3 text-gray-400 hover:text-pink-500"
          >
            ✕
          </button>

          <h2 className="text-lg font-bold text-pink-600">{selected.name}</h2>
          <p className="text-sm text-gray-600 mt-1">
            <strong>Ingredients:</strong> {selected.ingredients}
          </p>
          <p className="text-sm mt-1">
            <strong>Price:</strong> ${selected.salePrice ?? selected.price}
          </p>
        </div>
      )}

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Cards */}
        <div className="lg:col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {treats.map((treat: any) => (
            <TreatCard
              key={treat.id}
              treat={treat}
              onSelect={() => {
                setSelected(treat)
                if (window.innerWidth < 1024) {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              }}
            />
          ))}
        </div>

        {/* DESKTOP ONLY sidebar */}
        <aside className="hidden lg:block bg-white rounded-xl shadow-md p-6 sticky top-24 h-fit">
          <TreatSidebar treat={selected} />
        </aside>
      </div>
    </div>
  )
}
