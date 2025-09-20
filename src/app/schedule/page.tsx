// app/schedule/page.tsx
"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ScheduleSession() {
  const [mode, setMode] = useState("In-Person")

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-purple-200 p-4">
      <h1 className="text-xl font-bold">Schedule Session</h1>
      
      <div className="mt-4 bg-white p-4 rounded-2xl shadow space-y-4">
        <Input placeholder="Patient Name" />
        <Input placeholder="Mobile Number" />
        <Input placeholder="Email ID" />
        <Input placeholder="Address" />

        <div className="flex space-x-4">
          <Button variant={mode === "In-Person" ? "default" : "outline"} onClick={() => setMode("In-Person")}>In-Person</Button>
          <Button variant={mode === "Online" ? "default" : "outline"} onClick={() => setMode("Online")}>Online</Button>
        </div>

        <Input type="date" />
        <Input type="time" />

        {mode === "Online" && <Input placeholder="Session Link or WhatsApp Number" />}
        
        <Button className="w-full">Confirm</Button>
      </div>
    </div>
  )
}
