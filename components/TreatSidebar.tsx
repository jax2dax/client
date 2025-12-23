export default function TreatSidebar({ treat }: { treat: any }) {
  if (!treat) {
    return (
      <div className="text-gray-400 italic">
        Select a treat to preview
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-pink-600">{treat.name}</h2>
      
      <p className=" font-bold text-black text-bold"><strong>Date:</strong> {treat.date}</p>
      <p className=" font-bold text-black text-bold"><strong>Ingredients:</strong> {treat.ingredients}</p>
      <p className=" font-bold text-black text-bold"><strong>Price:</strong> ${treat.salePrice ?? treat.price}</p>

      <a
        href={`/order?item=${treat.name}`}
        className="block text-center bg-pink-500 hover:bg-pink-600
                   transition text-white py-2 rounded-lg mt-4"
      >
        Order Now
      </a>
    </div>
  )
}
