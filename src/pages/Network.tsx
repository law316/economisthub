import { BadgeCheck, Search, SlidersHorizontal, UserPlus } from 'lucide-react'
import { economists } from '../data/mock'

export function Network() {
  return <div className="page-wrap"><div className="page-hero"><p className="eyebrow">GLOBAL ECONOMIST GRAPH</p><h1>Find people by what they actually study and build.</h1><p>Search economists by field, methods, country, institution, career stage, language and research interests — not simply follower count.</p></div><div className="search-filter-bar"><div className="searchbox static"><Search size={18}/><input placeholder="Try ‘development economics Nigeria RCT’…"/></div><button className="secondary-btn"><SlidersHorizontal size={16}/> Filters</button></div><div className="economist-grid">{economists.concat([
    {id:'6',name:'Dr. Sofia Martins',initials:'SM',role:'Macroeconomist',institution:'Global Development Institute',country:'Portugal',field:'Macroeconomics & Africa',verified:true,accent:'blue' as const},
    {id:'7',name:'Kwame Boateng',initials:'KB',role:'PhD Candidate',institution:'University of Cape Town',country:'South Africa',field:'Climate & Energy Economics',verified:true,accent:'green' as const}
  ]).map(p=><article className="economist-card card" key={p.id}><div className={`profile-cover cover-${p.accent}`}/><div className={`network-avatar avatar-${p.accent}`}>{p.initials}</div><h3>{p.name} <BadgeCheck size={17} fill="currentColor"/></h3><p className="role">{p.role}</p><p>{p.institution}</p><div className="network-tags"><span>{p.field}</span><span>{p.country}</span></div><button className="secondary-btn full"><UserPlus size={16}/> Connect</button></article>)}</div></div>
}
