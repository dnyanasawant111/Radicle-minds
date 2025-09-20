// app/doctors/page.tsx

import { Button } from "@/components/ui/button"




const doctors = [
  { name: "Dr. Tejas Sharma", expertise: "Gynecology", mode: "In-Person & Online", fee: 1500 },
  { name: "Dr. Priya Kapoor", expertise: "IVF Specialist", mode: "In-Person", fee: 1200 },
]

export default function Doctors() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-purple-200 p-4">
      <h1 className="">Available Doctors</h1>
      <div className="mt-4 space-y-3">
        {doctors.map((d, i) => (
          <div key={i} className="bg-white p-4 rounded-2xl shadow flex justify-between items-center">
            <div>
              <p className="font-medium">{d.name}</p>
              <p className="text-sm text-gray-500">{d.expertise}</p>
              <p className="text-sm text-gray-500">{d.mode}</p>
            </div>
            <Button>Book Now</Button>
          </div>
        ))}
      </div>
    </div>
  )
}
