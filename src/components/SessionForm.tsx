"use client"
import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card } from "./ui/card"

export default function SessionForm() {
  const [mode, setMode] = useState("In-Person")

  return (
    <Card className="p-4 space-y-4">
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
    </Card>
  )
}
