import { Button } from "./ui/button"
import { Card } from "./ui/card"

type Props = {
  name: string
  expertise: string
  mode: string
  fee: number
}

export default function DoctorCard({ name, expertise, mode, fee }: Props) {
  return (
    <Card className="p-4 flex justify-between items-center">
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500">{expertise}</p>
        <p className="text-sm text-gray-500">{mode}</p>
        <p className="text-sm text-gray-500">₹{fee}</p>
      </div>
      <Button>Book Now</Button>
    </Card>
  )
}
