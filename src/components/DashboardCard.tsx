import { ReactNode } from "react"
import { Card } from "./ui/card"

export default function DashboardCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Card className="p-4">
      <h2 className="font-semibold mb-2">{title}</h2>
      {children}
    </Card>
  )
}
