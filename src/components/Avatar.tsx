import { BadgeCheck } from 'lucide-react'

export function Avatar({ initials, accent = 'blue', size = 'md', verified = false }: { initials: string; accent?: string; size?: 'sm'|'md'|'lg'; verified?: boolean }) {
  return (
    <span className={`avatar avatar-${accent} avatar-${size}`}>
      {initials}
      {verified && <BadgeCheck className="avatar-check" size={15} fill="currentColor" />}
    </span>
  )
}
