import { ReactNode, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Bell, BookOpen, BriefcaseBusiness, CalendarDays, ChevronDown, FlaskConical, Home, Landmark, Menu, MessageCircle, Network, Search, Users, X } from 'lucide-react'
import { Logo } from './Logo'
import { Avatar } from './Avatar'

const nav = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/network', label: 'Discover people', icon: Network },
  { to: '/research', label: 'Research rooms', icon: FlaskConical },
  { to: '/policy', label: 'Policy forums', icon: Landmark },
  { to: '/live', label: 'Live & events', icon: CalendarDays },
  { to: '/messages', label: 'Messages', icon: MessageCircle, badge: 7 },
  { to: '/learning', label: 'Learning library', icon: BookOpen },
  { to: '/opportunities', label: 'Opportunities', icon: BriefcaseBusiness },
  { to: '/institutions', label: 'Institutions', icon: Users },
]

export function Shell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="app-shell">
      <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
        <div className="sidebar-head"><Logo /><button className="icon-btn mobile-only" onClick={() => setOpen(false)}><X size={20}/></button></div>
        <nav className="side-nav">
          {nav.map(({ to, label, icon: Icon, badge }) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
              <Icon size={19}/><span>{label}</span>{badge ? <em>{badge}</em> : null}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-community">
          <p className="eyebrow">YOUR COMMUNITY</p>
          <div className="community-row"><span className="mini-dot green"/>Nigeria Economics Network</div>
          <div className="community-row"><span className="mini-dot gold"/>Development Economics</div>
          <div className="community-row"><span className="mini-dot blue"/>Data & Econometrics Lab</div>
          <button className="text-button">+ Explore communities</button>
        </div>
        <div className="profile-chip">
          <Avatar initials="JU" accent="teal" />
          <div><strong>Joshua Umah</strong><span>Economics researcher</span></div>
          <ChevronDown size={16}/>
        </div>
      </aside>

      <div className="main-shell">
        <header className="topbar">
          <button className="icon-btn mobile-only" onClick={() => setOpen(true)}><Menu size={22}/></button>
          <div className="searchbox"><Search size={18}/><input placeholder="Search economists, research, policy topics, institutions…"/></div>
          <div className="top-actions">
            <button className="top-pill"><span className="status-dot"/> Africa <ChevronDown size={14}/></button>
            <button className="icon-btn notification"><Bell size={20}/><i>3</i></button>
            <Avatar initials="JU" accent="teal" size="sm" />
          </div>
        </header>
        <main className="content">{children}</main>
      </div>
    </div>
  )
}
