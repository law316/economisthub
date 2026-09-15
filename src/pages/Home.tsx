import { useState } from 'react'
import { BarChart3, Bookmark, CalendarDays, ChevronRight, FileText, Heart, MessageCircle, MoreHorizontal, Play, Plus, Radio, Send, Users } from 'lucide-react'
import { Avatar } from '../components/Avatar'
import { economists, feedPosts, liveSessions } from '../data/mock'

export function Home() {
  const [tab, setTab] = useState<'For you'|'Following'|'Policy'|'Research'>('For you')
  const [liked, setLiked] = useState<string[]>([])
  const [bookmarked, setBookmarked] = useState<string[]>([])

  const filtered = feedPosts.filter(post => tab === 'For you' || tab === 'Following' || (tab === 'Policy' ? post.kind === 'policy' : post.kind === 'research' || post.kind === 'data'))

  return (
    <div className="page-grid home-grid">
      <section className="feed-column">
        <div className="welcome-line">
          <div><p className="eyebrow">MONDAY · AFRICA ECONOMICS NETWORK</p><h1>Good morning, Joshua.</h1><p>See what economists across Africa and the world are analysing, debating and building today.</p></div>
          <button className="primary-btn"><Plus size={17}/> Start a discussion</button>
        </div>

        <div className="signal-strip">
          <div><span className="signal-icon"><BarChart3 size={18}/></span><p><b>Market pulse</b><small>Policy & data signals</small></p></div>
          <div className="signal-stat"><strong>38</strong><span>new policy threads</span></div>
          <div className="signal-stat"><strong>14</strong><span>research calls</span></div>
          <div className="signal-stat"><strong>9</strong><span>live sessions today</span></div>
          <button className="text-button">View Africa pulse <ChevronRight size={15}/></button>
        </div>

        <div className="composer card">
          <Avatar initials="JU" accent="teal" />
          <button className="composer-input">Share a finding, ask a policy question, or start a research discussion…</button>
          <div className="composer-actions"><button><FileText size={17}/> Paper</button><button><BarChart3 size={17}/> Data</button><button><CalendarDays size={17}/> Event</button></div>
        </div>

        <div className="feed-tabs">
          {(['For you','Following','Policy','Research'] as const).map(item => <button key={item} onClick={() => setTab(item)} className={tab === item ? 'active' : ''}>{item}</button>)}
        </div>

        <div className="post-list">
          {filtered.map(post => (
            <article className="post-card card" key={post.id}>
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

      <aside className="right-rail">
        <section className="rail-card live-card">
          <div className="rail-title"><div><span className="live-badge"><Radio size={13}/> LIVE</span><h3>Happening now</h3></div><button>See all</button></div>
          <div className="live-hero">
            <div className="live-visual"><div className="speaker-stage"><span className="stage-avatar">DO</span><span className="wave-bars"><i/><i/><i/><i/><i/></span></div><button className="play-circle"><Play size={18} fill="currentColor"/></button></div>
            <p className="event-kicker">PAN-AFRICAN POLICY ROOM</p><h4>{liveSessions[0].title}</h4><p>{liveSessions[0].host} · {liveSessions[0].viewers}</p>
            <button className="primary-btn full">Join live discussion</button>
          </div>
        </section>

        <section className="rail-card">
          <div className="rail-title"><h3>Economists to connect with</h3><button>View all</button></div>
          <div className="people-list">
            {economists.slice(0,4).map(person => <div className="person-row" key={person.id}><Avatar initials={person.initials} accent={person.accent} size="sm" verified/><div><strong>{person.name}</strong><span>{person.field} · {person.country}</span></div><button className="follow-btn">Connect</button></div>)}
          </div>
        </section>

        <section className="rail-card institution-spotlight">
          <p className="eyebrow light">INSTITUTION SPOTLIGHT</p><div className="institution-mark">N</div><h3>NESA Community Hub</h3><p>A sample institutional community showing how national economics societies can connect members to continental research, events and policy conversations.</p><div className="mini-metrics"><span><Users size={15}/> 4.8k members</span><span><MessageCircle size={15}/> 36 discussions</span></div><button className="secondary-btn full">Explore community</button>
        </section>
      </aside>
    </div>
  )
}
