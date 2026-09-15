import type { CSSProperties } from 'react'
import { BriefcaseBusiness, Filter, MapPin, Search, Sparkles, Stethoscope, Laptop, GraduationCap } from 'lucide-react'
import { opportunities } from '../data/mock'

const tracks = [
  {icon:BriefcaseBusiness,title:'Economist roles',meta:'Policy, banking, consulting'},
  {icon:GraduationCap,title:'Research & academia',meta:'RA roles, PhDs, fellowships'},
  {icon:Stethoscope,title:'Health economics',meta:'Financing, outcomes, insurance'},
  {icon:Laptop,title:'Tech & data',meta:'Digital markets, analytics, AI'},
]

export function Opportunities(){return <div className="page-wrap">
  <div className="page-hero"><p className="eyebrow">CAREERS & PROFESSIONAL OPPORTUNITIES</p><h1>Find where economics can take you next.</h1><p>Jobs, research assistantships, fellowships, consulting work, calls for papers, scholarships and technology-facing roles for economists — with Nigeria as the starting market.</p></div>
  <div className="opportunity-track-grid">{tracks.map(({icon:Icon,title,meta})=><button className="card" key={title}><span><Icon size={20}/></span><div><strong>{title}</strong><small>{meta}</small></div></button>)}</div>
  <div className="opportunity-layout"><aside className="filters card"><h3><Filter size={17}/> Filters</h3>{['Career level','Economics field','Nigeria / remote','Institution type','Deadline','Paid / funded'].map(x=><button key={x}>{x}<span>⌄</span></button>)}</aside><section className="opportunity-results"><div className="searchbox static"><Search size={18}/><input placeholder="Search economics jobs, research roles and fellowships…"/></div><div className="result-title"><div><h2>Recommended for your profile</h2><p>Based on your economics interests, methods skills and availability.</p></div><span><Sparkles size={15}/> Smart match</span></div>{opportunities.map(o=><article className="job-card card pro-job-card" key={o.title}><div className="job-icon"><BriefcaseBusiness size={21}/></div><div className="job-copy"><p className="eyebrow">{o.type}</p><h3>{o.title}</h3><p>{o.org}</p><span><MapPin size={14}/>{o.location}</span></div><div className="match-ring" style={{'--score':`${o.match*3.6}deg`} as CSSProperties}><strong>{o.match}%</strong><span>match</span></div><button className="secondary-btn">View role</button></article>)}</section></div>
</div>}
