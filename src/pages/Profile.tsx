import { useState } from 'react'
import {
  BadgeCheck, BookOpen, CalendarDays, Edit3, FileText, MapPin, MessageCircle,
  Share2, Users, Video, BriefcaseBusiness, FlaskConical, Link as LinkIcon
} from 'lucide-react'
import { Avatar } from '../components/Avatar'

const tabs = ['Overview','Posts','Research','Publications','Courses & sessions'] as const

export function Profile() {
  const [tab, setTab] = useState<(typeof tabs)[number]>('Overview')
  return <div className="profile-page">
    <section className="profile-hero card">
      <div className="profile-cover-pro"><div className="profile-cover-grid"/></div>
      <div className="profile-main-row">
        <div className="profile-avatar-large"><Avatar initials="JU" accent="teal" size="lg" verified/></div>
        <div className="profile-identity">
          <div className="profile-name-line"><h1>Joshua Umah</h1><BadgeCheck size={20}/><span className="professional-badge">Verified member</span></div>
          <p>Economist · Researcher · Applied data & policy interests</p>
          <div className="profile-meta"><span><MapPin size={14}/> Nigeria</span><span><BriefcaseBusiness size={14}/> Independent researcher</span><span><LinkIcon size={14}/> economist profile</span></div>
        </div>
        <div className="profile-actions"><button className="secondary-btn"><Share2 size={15}/> Share</button><button className="primary-btn"><Edit3 size={15}/> Edit profile</button></div>
      </div>
      <div className="profile-stat-row">
        <div><strong>428</strong><span>Connections</span></div><div><strong>1.7k</strong><span>Followers</span></div><div><strong>4</strong><span>Research groups</span></div><div><strong>12</strong><span>Contributions</span></div>
      </div>
      <div className="profile-tabs">{tabs.map(x=><button key={x} className={tab===x?'active':''} onClick={()=>setTab(x)}>{x}</button>)}</div>
    </section>

    <div className="profile-layout">
      <section className="profile-content-col">
        <article className="card profile-section">
          <div className="section-head compact-head"><div><p className="eyebrow">PROFESSIONAL PROFILE</p><h2>About</h2></div><button className="icon-btn"><Edit3 size={16}/></button></div>
          <p className="profile-about">I am interested in how project delivery, finance, data and public policy can improve economic outcomes in Nigeria. I use this profile to share economic analysis, join research collaborations, learn from other economists and build a visible record of professional contributions.</p>
          <div className="interest-tags"><span>Development economics</span><span>Monetary economics</span><span>Health economics</span><span>Applied econometrics</span><span>Technology & productivity</span><span>Project economics</span></div>
        </article>

        <article className="card profile-section">
          <div className="section-head compact-head"><div><p className="eyebrow">RECENT ACTIVITY</p><h2>Professional posts</h2></div><button className="text-button">See all</button></div>
          <div className="profile-post">
            <Avatar initials="JU" accent="teal" size="sm" verified/><div><strong>Joshua Umah</strong><span>2 hours ago · Nigeria Economy Forum</span><p>What indicators would you use to separate temporary food-price shocks from persistent inflation pressure in Nigeria? I am collecting strong empirical papers and datasets for a reading group.</p><div><button><MessageCircle size={15}/> 21 comments</button><button><Share2 size={15}/> Share</button></div></div>
          </div>
        </article>

        <article className="card profile-section">
          <div className="section-head compact-head"><div><p className="eyebrow">RESEARCH & CONTRIBUTION RECORD</p><h2>Current work</h2></div></div>
          <div className="profile-project-list">
            <div><span className="profile-project-icon"><FlaskConical size={18}/></span><p><strong>Food Inflation & Household Welfare</strong><small>Contributor · Data review and literature synthesis</small></p><em>Active</em></div>
            <div><span className="profile-project-icon blue"><FileText size={18}/></span><p><strong>Productivity and Project Management in Nigerian Agriculture</strong><small>Researcher · Study design and analysis</small></p><em>Drafting</em></div>
          </div>
        </article>
      </section>

      <aside className="profile-side-col">
        <section className="card profile-section profile-completion"><div className="completion-ring"><strong>82%</strong><span>complete</span></div><div><h3>Strengthen your economist profile</h3><p>Add publications, methods skills and one verified institutional link.</p><button className="text-button">Complete profile</button></div></section>
        <section className="card profile-section"><p className="eyebrow">MEMBER CAPABILITIES</p><div className="capability-list"><span><Users size={17}/> Join professional communities</span><span><FlaskConical size={17}/> Create or join research groups</span><span><BookOpen size={17}/> Take expert-led courses</span><span><CalendarDays size={17}/> Register for economics events</span><span><Video size={17}/> Host sessions when eligible</span></div></section>
        <section className="card profile-section"><p className="eyebrow">EXPERTISE</p><div className="skill-row"><span>Stata</span><span>Research design</span><span>Policy analysis</span><span>Data interpretation</span></div></section>
      </aside>
    </div>
  </div>
}
