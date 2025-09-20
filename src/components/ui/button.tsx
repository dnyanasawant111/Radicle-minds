import { ButtonHTMLAttributes } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
}

export function Button({ variant = "default", className, ...props }: Props) {
  const base = variant === "default" ? "btn" : "btn btn-outline"
  return <button className={`${base} ${className || ""}`} {...props} />
}
