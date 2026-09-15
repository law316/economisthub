import { useState } from 'react'
import { ArrowRight, BookOpen, CalendarPlus, Download, ExternalLink, FileUp, Link2, PlayCircle, Search, Star, Upload, Video } from 'lucide-react'

const courses = [
  ['Applied Econometrics for Nigerian Policy Research','Prof. Ifeoma Nwankwo','12 lessons · Certificate','blue','Econometrics'],
  ['Banking, Inflation & Monetary Policy','Dr. David Okafor','8 lessons · Case-based','teal','Monetary economics'],
  ['Health Economics & Financing in Nigeria','Dr. Amina Bello','10 lessons · New','gold','Health economics'],
  ['Python for Economists','Applied Economics & Data Lab','16 lessons · Downloadable','green','Data science'],
]

const books = [
  ['Understanding the Nigerian Economy','Professional reading collection','Macroeconomics · 286 pages'],
  ['Applied Policy Evaluation','Methods reading series','Causal inference · 214 pages'],
  ['Health Financing & Household Welfare','Research monograph','Health economics · 168 pages'],
]

export function Learning(){
  const [tab,setTab] = useState<'Courses'|'Books & papers'|'Professor studio'>('Courses')
  return <div className="page-wrap">
    <div className="page-hero split-hero"><div><p className="eyebrow">LEARNING, BOOKS & PROFESSOR-LED KNOWLEDGE</p><h1>Learn economics from economists who teach, research and practise it.</h1><p>Verified professors and professionals can teach courses, upload lectures, host live classes, link trusted video content and publish books, notes and research explainers.</p></div><button className="primary-btn"><PlayCircle size={17}/> Continue learning</button></div>

    <div className="library-banner pro-library-banner"><div className="searchbox static inverse"><Search size={18}/><input placeholder="Search courses, books, lectures, papers and datasets…"/></div><div className="browse-pills">{['Econometrics','Development','Monetary economics','Health economics','Public finance','Data science','Technology & economics'].map(x=><button key={x}>{x}</button>)}</div></div>

    <div className="learning-tabs">{(['Courses','Books & papers','Professor studio'] as const).map(x=><button className={tab===x?'active':''} onClick={()=>setTab(x)} key={x}>{x}</button>)}</div>

    {tab==='Courses' && <div className="course-grid">{courses.map(([title,author,meta,color,cat])=><article className="course-card card pro-course-card" key={title}><div className={`course-cover cover-${color}`}><p>{cat}</p><PlayCircle size={36}/></div><div className="course-body"><p className="eyebrow">VERIFIED COURSE</p><h3>{title}</h3><p>{author}</p><div className="course-meta"><span><BookOpen size={15}/>{meta}</span><span><Star size={14} fill="currentColor"/>4.9</span></div><button className="secondary-btn full">View course <ArrowRight size={16}/></button></div></article>)}</div>}

    {tab==='Books & papers' && <div className="book-grid">{books.map(([title,author,meta],i)=><article className="book-card card" key={title}><div className={`book-cover book-${i+1}`}><BookOpen size={28}/><span>ECONOMISTHUB LIBRARY</span></div><div><p className="eyebrow">CURATED READING</p><h3>{title}</h3><p>{author}</p><small>{meta}</small><div className="book-actions"><button className="secondary-btn"><BookOpen size={15}/> Read details</button><button className="icon-btn"><Download size={16}/></button></div></div></article>)}</div>}

    {tab==='Professor studio' && <section className="professor-studio card">
      <div className="professor-studio-copy"><p className="eyebrow">PROFESSOR & EXPERT TOOLS</p><h2>Your expertise should travel beyond one lecture hall.</h2><p>Eligible verified experts can create structured learning, schedule live sessions, upload lecture files, link YouTube videos, publish reading lists and make their work discoverable to professional economists and students.</p><div className="studio-perks"><span><Video size={16}/> Live teaching</span><span><BookOpen size={16}/> Courses & reading</span><span><Upload size={16}/> Lecture uploads</span><span><ExternalLink size={16}/> External video links</span></div></div>
      <div className="studio-actions"><button><span><Video size={20}/></span><div><strong>Create a course</strong><small>Build modules, notes and assessments</small></div><ArrowRight size={17}/></button><button><span><CalendarPlus size={20}/></span><div><strong>Schedule live session</strong><small>Host a lecture, clinic or policy room</small></div><ArrowRight size={17}/></button><button><span><FileUp size={20}/></span><div><strong>Upload lecture</strong><small>Add video, slides or reading materials</small></div><ArrowRight size={17}/></button><button><span><Link2 size={20}/></span><div><strong>Add YouTube lecture</strong><small>Link an existing trusted lecture</small></div><ArrowRight size={17}/></button></div>
    </section>}

    <section className="download-band card"><div className="download-icon"><Download size={26}/></div><div><p className="eyebrow">LOW-BANDWIDTH ACCESS</p><h2>Professional learning that works with real Nigerian internet conditions.</h2><p>Authorised content can support compressed video, captions, downloadable notes, datasets and offline reading packs.</p></div><button className="secondary-btn">Explore downloads</button></section>
  </div>
}
