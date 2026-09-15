import { useState } from 'react'
import { BadgeCheck, MessageCircle, Search, SlidersHorizontal, UserPlus } from 'lucide-react'
import { economists } from '../data/mock'

const specialties = ['All economists','Development','Monetary & banking','Health economics','Public finance','Econometrics & data','Technology & economics']

export function Network() {
  const [connected,setConnected] = useState<string[]>([])
  const [active,setActive] = useState('All economists')
  const people = economists.concat([
    {id:'8',name:'Dr. Kemi Falade',initials:'KF',role:'Economic Policy Adviser',institution:'Public Policy Centre',country:'Nigeria',field:'Fiscal Policy & Public Finance',verified:true,accent:'teal' as const},
    {id:'9',name:'Emeka Obi',initials:'EO',role:'Economics & Technology Analyst',institution:'Digital Markets Lab',country:'Nigeria',field:'Technology & Economics',verified:true,accent:'violet' as const},
    {id:'10',name:'Dr. Sofia Martins',initials:'SM',role:'Macroeconomist',institution:'Global Development Institute',country:'Portugal',field:'Macroeconomics & Africa',verified:true,accent:'blue' as const},
  ])

  return <div className="page-wrap">
    <div className="page-hero network-hero"><p className="eyebrow">PROFESSIONAL ECONOMIST NETWORK</p><h1>Find the economist, mentor or collaborator your work needs.</h1><p>Build a professional network around research interests, methods, sectors and real contribution — starting in Nigeria and connecting outward to Africa and the world.</p></div>
    <div className="network-toolbar card"><div className="searchbox static"><Search size={18}/><input placeholder="Search by name, institution, field or research interest…"/></div><button className="secondary-btn"><SlidersHorizontal size={16}/> Advanced filters</button></div>
    <div className="specialty-scroll">{specialties.map(x=><button onClick={()=>setActive(x)} className={active===x?'active':''} key={x}>{x}</button>)}</div>
    <div className="economist-grid pro-economist-grid">{people.map(p=><article className="economist-card card pro-economist-card" key={p.id}>
      <div className={`profile-cover cover-${p.accent}`}><span>{p.field}</span></div>
      <div className={`network-avatar avatar-${p.accent}`}>{p.initials}</div>
      <h3>{p.name} <BadgeCheck size={17} fill="currentColor"/></h3><p className="role">{p.role}</p><p>{p.institution}</p>
      <div className="network-tags"><span>{p.field}</span><span>{p.country}</span></div>
      <div className="profile-interest-preview"><strong>Research interests</strong><p>{p.field}, applied policy, evidence-based decision making</p></div>
      <div className="network-card-actions"><button className={connected.includes(p.id)?'secondary-btn connected-btn':'primary-btn'} onClick={()=>setConnected(v=>v.includes(p.id)?v.filter(x=>x!==p.id):[...v,p.id])}><UserPlus size={16}/>{connected.includes(p.id)?'Connected':'Connect'}</button><button className="secondary-btn square-btn"><MessageCircle size={16}/></button></div>
    </article>)}</div>
  </div>
}
