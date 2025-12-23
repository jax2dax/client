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
      <p><strong>Date:</strong> {treat.date}</p>
      <p><strong>Ingredients:</strong> {treat.ingredients}</p>
      <p><strong>Price:</strong> ${treat.salePrice ?? treat.price}</p>

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
