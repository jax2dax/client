"use client"

import Image from "next/image"

export default function TreatCard({
  treat,
  onSelect,
}: {
  treat: any
  onSelect: () => void
}) {
  return (
    <div
      onClick={onSelect}
      className="cursor-pointer bg-white rounded-xl shadow-md
                 hover:shadow-xl hover:-translate-y-1 transition-all
                 overflow-hidden"
    >
      <Image
        src={treat.image}
        alt={treat.name}
        width={400}
        height={300}
        className="object-cover h-48 w-full"
      />

      <div className="p-4 space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-black text-lg">{treat.name}</h3>
          {treat.popular && (
            <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
              Popular
            </span>
          )}
        </div>

        <p className="text-sm text-black">{treat.ingredients}</p>

        <div className="flex gap-2 items-center">
          {treat.salePrice ? (
            <>
              <span className="line-through text-black">${treat.price}</span>
              <span className="text-pink-600 font-bold">${treat.salePrice}</span>
            </>
          ) : (
            <span className="font-bold">${treat.price}</span>
          )}
        </div>
      </div>
    </div>
  )
}
