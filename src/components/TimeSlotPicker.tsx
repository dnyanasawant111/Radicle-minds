type Props = { slots: string[]; onSelect: (slot: string) => void }

export default function TimeSlotPicker({ slots, onSelect }: Props) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {slots.map((slot) => (
        <button
          key={slot}
          onClick={() => onSelect(slot)}
          className="p-2 border rounded-lg hover:bg-pink-100 transition"
        >
          {slot}
        </button>
      ))}
    </div>
  )
}
