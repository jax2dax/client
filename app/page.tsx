import Link from "next/link"

export default function HomePage() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-extrabold text-pink-600 mb-6">
        Freshly Baked With Love 💗
      </h1>

      <p className="max-w-xl mx-auto text-lg text-gray-600 mb-10">
        Homemade cakes, cookies, cinnamon rolls, chocolate strawberries,
        and custom sweet treats made to order.
      </p>

      <Link
        href="/treats"
        className="inline-block bg-pink-500 hover:bg-pink-600
                   transition text-white px-8 py-4 rounded-full text-lg shadow-lg"
      >
        Browse Treats
      </Link>
    </section>
  )
}
