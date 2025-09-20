// app/patients/page.tsx
"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

type Patient = {
  id: number
  name: string
  mobile: string
  whatsapp?: string
  email: string
  address: string
}

const dummyPatients: Patient[] = [
  { id: 1, name: "Shubham Naik", mobile: "9876543210", whatsapp: "9876543210", email: "shubham@mail.com", address: "Bandra, Mumbai" },
  { id: 2, name: "Anita Sharma", mobile: "9876541234", email: "anita@mail.com", address: "Pune, India" },
]

export default function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>(dummyPatients)
  const [form, setForm] = useState<Partial<Patient>>({})

  const handleSubmit = () => {
    if (form.name && form.mobile && form.email) {
      const newPatient: Patient = {
        id: patients.length + 1,
        name: form.name,
        mobile: form.mobile,
        whatsapp: form.whatsapp,
        email: form.email,
        address: form.address || "",
      }
      setPatients([...patients, newPatient])
      setForm({})
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-purple-200 p-4 space-y-6">
      <h1 className="text-xl font-bold">Add / Select Patient</h1>

      {/* Add Patient Form */}
      <Card className="p-4 space-y-3">
        <Input placeholder="Name" value={form.name || ""} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <Input placeholder="Mobile Number" value={form.mobile || ""} onChange={(e) => setForm({ ...form, mobile: e.target.value })} />
        
        <label className="flex items-center space-x-2 text-sm">
          <input 
            type="checkbox" 
            checked={form.whatsapp === form.mobile}
            onChange={(e) => setForm({ ...form, whatsapp: e.target.checked ? form.mobile : "" })}
          />
          <span>WhatsApp same as Mobile</span>
        </label>

        <Input placeholder="WhatsApp Number" value={form.whatsapp || ""} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })} />
        <Input placeholder="Email ID" value={form.email || ""} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <Input placeholder="Address" value={form.address || ""} onChange={(e) => setForm({ ...form, address: e.target.value })} />

        <Button onClick={handleSubmit}>Save Patient</Button>
      </Card>

      {/* Select Existing Patient */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Existing Patients</h2>
        <div className="space-y-2">
          {patients.map((p) => (
            <Card key={p.id} className="p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">{p.name}</p>
                <p className="text-sm text-gray-500">{p.mobile}</p>
                <p className="text-sm text-gray-500">{p.email}</p>
              </div>
              <Button>Select</Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

