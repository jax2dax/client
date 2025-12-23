import Link from 'next/link'
export default function OrderPage() {
  return (
    <section className="max-w-md mx-auto text-center space-y-6">
      <h1 className="text-3xl font-bold text-pink-600">Place an Order</h1>

      <p className="text-gray-600">
        To place an order, please DM:
      </p>

      <p className="text-lg font-semibold">
        <Link href="https://www.instagram.com/sweetlillysbakery?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
          Order-Instagram
        </Link>
      </p>

      <p className="text-sm text-gray-500">
        Include the treat name, quantity, and preferred date.
      </p>
    </section>
  )
}
