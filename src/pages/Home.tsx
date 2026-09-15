import { useState } from 'react'
import {
  BarChart3, BookOpen, Bookmark, BriefcaseBusiness, CalendarDays, ChevronRight,
  FileText, Heart, Image, MessageCircle, MoreHorizontal, Play, Plus, Radio, Send,
  Sparkles, TrendingUp, Users, Video
} from 'lucide-react'
import { Avatar } from '../components/Avatar'
import { economists, feedPosts, liveSessions } from '../data/mock'

type FeedTab = 'For you' | 'Following' | 'Nigeria economy' | 'Research' | 'Careers'

const topics = [
  ['Inflation & cost of living','1.4k discussing'],
  ['FX & monetary policy','982 discussing'],
  ['Health financing','610 discussing'],
  ['Jobs & productivity','755 discussing'],
  ['Technology & AI','438 discussing'],
]

export function Home() {
  const [tab, setTab] = useState<FeedTab>('For you')
  const [liked, setLiked] = useState<string[]>([])
  const [bookmarked, setBookmarked] = useState<string[]>([])
  const [draft, setDraft] = useState('')
  const [localPosts, setLocalPosts] = useState<{id:string;text:string}[]>([])

  const filtered = feedPosts.filter(post => {
    if (tab === 'For you' || tab === 'Following') return true
    if (tab === 'Nigeria economy') return post.kind === 'policy' || post.kind === 'community'
    if (tab === 'Research') return post.kind === 'research' || post.kind === 'data'
    return false
  })

  const publish = () => {
    const text = draft.trim()
    if (!text) return
    setLocalPosts(v => [{id:`local-${Date.now()}`, text}, ...v])
    setDraft('')
  }

  return (
    <div className="page-grid home-grid professional-home">
      <section className="feed-column">
        <div className="network-intro">
          <div>
            <p className="eyebrow">NIGERIA'S PROFESSIONAL ECONOMICS NETWORK</p>
            <h1>Where economists meet, think and build.</h1>
            <p>Follow economic conversations, share evidence, join research groups, learn from professors and connect with economists across Nigeria and the wider world.</p>
          </div>
          <div className="intro-actions"><button className="primary-btn"><Plus size={17}/> Create post</button><button className="secondary-btn"><Users size={17}/> Find economists</button></div>
        </div>

        <section className="topic-ribbon card">
          <div className="topic-ribbon-head"><span><TrendingUp size={17}/></span><div><strong>What economists are discussing</strong><small>Professional conversations across the network</small></div></div>
          <div className="topic-scroll">{topics.map(([name,count],i)=><button key={name}><i>{i+1}</i><span><strong>{name}</strong><small>{count}</small></span></button>)}</div>
        </section>

        <div className="composer card composer-pro">
          <Avatar initials="JU" accent="teal" />
          <div className="composer-pro-main">
            <textarea value={draft} onChange={e=>setDraft(e.target.value)} placeholder="Share an economic insight, question, paper, dataset or professional update…" rows={draft ? 3 : 1}/>
            <div className="composer-pro-footer">
              <div><button><FileText size={16}/> Paper</button><button><BarChart3 size={16}/> Data</button><button><Image size={16}/> Media</button><button><Video size={16}/> Session</button></div>
              <button className="primary-btn compact-btn" onClick={publish}>Post</button>
            </div>
          </div>
        </div>

        <div className="feed-tabs pro-tabs">
          {(['For you','Following','Nigeria economy','Research','Careers'] as FeedTab[]).map(item => <button key={item} onClick={() => setTab(item)} className={tab === item ? 'active' : ''}>{item}</button>)}
        </div>

        <div className="post-list">
          {tab === 'Careers' ? <article className="career-feed-card card"><div className="career-icon"><BriefcaseBusiness size={22}/></div><div><p className="eyebrow">CAREER OPPORTUNITIES</p><h2>Economics jobs, fellowships and research roles in one place</h2><p>See openings in banking, policy, data, health economics, development, technology, academia and consulting.</p><button className="secondary-btn">Explore opportunities <ChevronRight size={15}/></button></div></article> : null}

          {localPosts.map(post => <article className="post-card card user-created-post" key={post.id}>
            <div className="post-head"><Avatar initials="JU" accent="teal" verified/><div className="post-author"><div><strong>Joshua Umah</strong><span className="verified-label">Member</span></div><p>Economist · Nigeria · Just now</p></div><button className="icon-btn"><MoreHorizontal size={20}/></button></div>
            <div className="post-tag">Professional update</div><p className="post-body local-post-text">{post.text}</p>
            <div className="post-actions"><button><Heart size={18}/>0</button><button><MessageCircle size={18}/>0</button><button><Send size={18}/>Share</button><button className="bookmark-action"><Bookmark size={18}/></button></div>
          </article>)}

          {tab !== 'Careers' && filtered.map(post => (
            <article className="post-card card professional-post" key={post.id}>
              <div className="post-head">
                <Avatar initials={post.author.initials} accent={post.author.accent} verified={post.author.verified}/>
                <div className="post-author"><div><strong>{post.author.name}</strong><span className="verified-label">Verified economist</span></div><p>{post.author.role} · {post.author.country} · {post.time}</p></div>
                <button className="icon-btn"><MoreHorizontal size={20}/></button>
              </div>
              <div className="post-tag">{post.tag}</div>
              <h2>{post.title}</h2>
              <p className="post-body">{post.body}</p>
              {post.stats && <div className={`insight-banner insight-${post.kind}`}><span/><b>{post.stats}</b><ChevronRight size={17}/></div>}
              <div className="post-actions">
                <button className={liked.includes(post.id) ? 'selected' : ''} onClick={() => setLiked(v => v.includes(post.id) ? v.filter(x=>x!==post.id) : [...v, post.id])}><Heart size={18} fill={liked.includes(post.id) ? 'currentColor' : 'none'}/>{post.likes + (liked.includes(post.id) ? 1 : 0)}</button>
                <button><MessageCircle size={18}/>{post.comments}</button>
                <button><Send size={18}/>Share</button>
                <button className={bookmarked.includes(post.id) ? 'selected bookmark-action' : 'bookmark-action'} onClick={() => setBookmarked(v => v.includes(post.id) ? v.filter(x=>x!==post.id) : [...v, post.id])}><Bookmark size={18} fill={bookmarked.includes(post.id) ? 'currentColor' : 'none'}/>{post.bookmarks}</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="right-rail professional-rail">
        <section className="rail-card live-card premium-live-card">
          <div className="rail-title"><div><span className="live-badge"><Radio size={13}/> LIVE</span><h3>Economics live room</h3></div><button>See all</button></div>
          <div className="live-hero">
            <div className="live-visual"><div className="speaker-stage"><span className="stage-avatar">DO</span><span className="wave-bars"><i/><i/><i/><i/><i/></span></div><button className="play-circle"><Play size={18} fill="currentColor"/></button></div>
            <p className="event-kicker">NIGERIA ECONOMY ROOM</p><h4>{liveSessions[0].title}</h4><p>{liveSessions[0].host} · {liveSessions[0].viewers}</p>
            <button className="primary-btn full">Join live discussion</button>
          </div>
        </section>

        <section className="rail-card">
          <div className="rail-title"><h3>People worth knowing</h3><button>View network</button></div>
          <div className="people-list">
            {economists.slice(0,4).map(person => <div className="person-row" key={person.id}><Avatar initials={person.initials} accent={person.accent} size="sm" verified/><div><strong>{person.name}</strong><span>{person.field} · {person.country}</span></div><button className="follow-btn">Connect</button></div>)}
          </div>
        </section>

        <section className="rail-card association-spotlight">
          <div className="association-badge"><span>EA</span></div><div><p className="eyebrow light">PROFESSIONAL COMMUNITY</p><h3>Economists Association</h3><p>A professional home for economists to meet peers, join discussions, attend sessions and discover research and career opportunities.</p></div>
          <div className="mini-metrics"><span><Users size={15}/> Member community</span><span><MessageCircle size={15}/> Active forum</span></div><button className="secondary-btn full">Visit association hub</button>
        </section>

        <section className="rail-card quick-access-card">
          <p className="eyebrow">QUICK ACCESS</p><h3>Build your economics career</h3>
          <div className="quick-access-list"><button><BookOpen size={17}/><span><strong>Learn</strong><small>Courses & books</small></span><ChevronRight size={15}/></button><button><Users size={17}/><span><strong>Collaborate</strong><small>Research groups</small></span><ChevronRight size={15}/></button><button><Sparkles size={17}/><span><strong>Grow</strong><small>Jobs & fellowships</small></span><ChevronRight size={15}/></button></div>
        </section>
      </aside>
    </div>
  )
}
