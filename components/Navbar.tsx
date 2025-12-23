import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-pink-500 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Lily’s Sweet Treats
        </Link>

        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/treats" className="hover:underline">Treats</Link>
          <Link href="/about" className="hover:underline">About</Link>
        </div>
      </div>
    </nav>
  )
}
