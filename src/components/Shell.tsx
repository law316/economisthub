import { ReactNode, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Bell, BookOpen, BriefcaseBusiness, CalendarDays, ChevronDown, FlaskConical,
  Home, Landmark, Menu, MessageCircle, Network, Search, UserCircle2, Users, X
} from 'lucide-react'
import { Logo } from './Logo'
import { Avatar } from './Avatar'

const nav = [
  { to: '/', label: 'Professional feed', icon: Home },
  { to: '/profile', label: 'My profile', icon: UserCircle2 },
  { to: '/network', label: 'Economist network', icon: Network },
  { to: '/research', label: 'Research groups', icon: FlaskConical },
  { to: '/policy', label: 'Economy forum', icon: Landmark },
  { to: '/live', label: 'Live sessions', icon: CalendarDays },
  { to: '/learning', label: 'Courses & library', icon: BookOpen },
  { to: '/opportunities', label: 'Jobs & opportunities', icon: BriefcaseBusiness },
  { to: '/messages', label: 'Messages', icon: MessageCircle, badge: 7 },
  { to: '/institutions', label: 'Association & chapters', icon: Users },
]

export function Shell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="app-shell">
      <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
        <div className="sidebar-head">
          <Logo />
          <button className="icon-btn mobile-only" onClick={() => setOpen(false)} aria-label="Close navigation"><X size={20}/></button>
        </div>

        <div className="network-status">
          <span className="network-status-dot" />
          <div><strong>Nigeria network</strong><span>Professional economics community</span></div>
        </div>

        <nav className="side-nav">
          {nav.map(({ to, label, icon: Icon, badge }) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>
              <Icon size={18}/><span>{label}</span>{badge ? <em>{badge}</em> : null}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-community">
          <p className="eyebrow">YOUR COMMUNITIES</p>
          <div className="community-row"><span className="mini-dot green"/>Nigeria Economy Forum</div>
          <div className="community-row"><span className="mini-dot gold"/>Health Economics Nigeria</div>
          <div className="community-row"><span className="mini-dot blue"/>Econometrics & Data Lab</div>
          <button className="text-button">+ Discover more groups</button>
        </div>

        <NavLink to="/profile" className="profile-chip profile-chip-link" onClick={() => setOpen(false)}>
          <Avatar initials="JU" accent="teal" />
          <div><strong>Joshua Umah</strong><span>Economist · Nigeria</span></div>
          <ChevronDown size={16}/>
        </NavLink>
      </aside>

      <div className="main-shell">
        <header className="topbar">
          <button className="icon-btn mobile-only" onClick={() => setOpen(true)} aria-label="Open navigation"><Menu size={22}/></button>
          <div className="searchbox"><Search size={18}/><input placeholder="Search economists, research groups, policy topics, courses or jobs…"/></div>
          <div className="top-actions">
            <button className="top-pill"><span className="status-dot"/> Nigeria <ChevronDown size={14}/></button>
            <button className="icon-btn notification" aria-label="Notifications"><Bell size={20}/><i>3</i></button>
            <NavLink to="/profile" aria-label="Open profile"><Avatar initials="JU" accent="teal" size="sm" /></NavLink>
          </div>
        </header>
        <main className="content">{children}</main>
      </div>
    </div>
  )
}
