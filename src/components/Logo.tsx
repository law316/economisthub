export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="logo-wrap" aria-label="AfriEcon Nexus">
      <div className="logo-mark"><span>A</span><i /></div>
      {!compact && <div className="logo-copy"><strong>AfriEcon</strong><span>NEXUS</span></div>}
    </div>
  )
}
