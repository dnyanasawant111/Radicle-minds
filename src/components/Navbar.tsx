import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-around bg-white shadow p-4">
      <Link href="/" className="font-medium text-pink-600">Dashboard</Link>
      <Link href="/patients" className="font-medium text-pink-600">Patients</Link>
      <Link href="/doctors" className="font-medium text-pink-600">Doctors</Link>
      <Link href="/schedule" className="font-medium text-pink-600">Schedule</Link>
    </nav>
  )
}
