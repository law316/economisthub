export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="logo-wrap" aria-label="EconomistHub">
      <div className="logo-mark"><span>E</span><i /></div>
      {!compact && <div className="logo-copy"><strong>EconomistHub</strong><span>NIGERIA · GLOBAL</span></div>}
    </div>
  )
}
