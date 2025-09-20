// app/page.tsx
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-purple-200 p-4">
      <h1 className="text-xl font-bold">Good morning, Manjunath Naik</h1>
      
      <div className="mt-4 bg-white rounded-2xl p-4 shadow">
        <h2 className="font-semibold">Upcoming Session</h2>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <p className="text-lg font-medium">11:00 AM - Dr. Kiran Rathi</p>
            <p className="text-sm text-gray-500">Session Mode: Online</p>
          </div>
          <Button>Mark as Completed</Button>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="font-semibold">Past Sessions</h2>
        <div className="space-y-2 mt-2">
          <div className="p-3 rounded-xl bg-white shadow">Dr. Ramesh Naik - Mar 25</div>
          <div className="p-3 rounded-xl bg-white shadow">Dr. Suresh Sawant - Mar 15</div>
        </div>
      </div>

      <Button className="w-full mt-6">Schedule Now</Button>
    </div>
  )
}
