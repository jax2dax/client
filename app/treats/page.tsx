"use client"

import { useState } from "react"
import { treats } from "@/data/treats"
import TreatCard from "@/components/TreatCard"
import TreatSidebar from "@/components/TreatSidebar"

export default function TreatsPage() {
  const [selected, setSelected] = useState<any>(null)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {treats.map((treat) => (
          <TreatCard
            key={treat.id}
            treat={treat}
            onSelect={() => setSelected(treat)}
          />
        ))}
      </div>

      <aside className="bg-white rounded-xl shadow-md p-6 sticky top-24 h-fit">
        <TreatSidebar treat={selected} />
      </aside>
    </div>
  )
}
