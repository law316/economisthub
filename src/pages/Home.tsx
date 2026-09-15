import { useState } from 'react'
import {
  BarChart3, BookOpen, Bookmark, BriefcaseBusiness, CalendarDays, ChevronRight,
  FileText, Heart, Image, MessageCircle, MoreHorizontal, Play, Radio, Send,
  UserPlus, Users, Video
} from 'lucide-react'
import { Avatar } from '../components/Avatar'
import { economists, feedPosts, liveSessions } from '../data/mock'

type FeedTab = 'For you' | 'Following' | 'Professors' | 'Students' | 'Research' | 'Jobs'

export function Home() {
  const [tab, setTab] = useState<FeedTab>('For you')
  const [liked, setLiked] = useState<string[]>([])
  const [bookmarked, setBookmarked] = useState<string[]>([])
  const [following, setFollowing] = useState<string[]>(['1'])
  const [draft, setDraft] = useState('')
  const [localPosts, setLocalPosts] = useState<{id:string;text:string}[]>([])

  const visiblePosts = feedPosts.filter(post => {
    if (tab === 'For you' || tab === 'Following') return true
    if (tab === 'Professors') return post.author.role.toLowerCase().includes('professor')
    if (tab === 'Students') return false
    if (tab === 'Research') return post.kind === 'research' || post.kind === 'data'
    return false
  })

  const publish = () => {
    const text = draft.trim()
    if (!text) return
    setLocalPosts(v => [{id:`local-${Date.now()}`, text}, ...v])
    setDraft('')
  }

  const toggleFollow = (id: string) => {
    setFollowing(v => v.includes(id) ? v.filter(x => x !== id) : [...v, id])
  }

  return (
    <div className="social-home">
      <section className="social-main">

        <div className="social-feed-header">
          <div>
            <h1>EconomistHub</h1>
            <p>Professional conversations shaping Nigeria's economy.</p>
          </div>
          <button className="secondary-btn"><Users size={16}/> Find economists</button>
        </div>

        <section className="economist-strip card">
          <div className="strip-title">
            <strong>People to follow</strong>
            <span>Economists active today</span>
          </div>
          <div className="economist-strip-scroll">
            {economists.slice(0,6).map(person => (
              <div className="mini-person-card" key={person.id}>
                <Avatar initials={person.initials} accent={person.accent} verified size="sm"/>
                <div>
                  <strong>{person.name}</strong>
                  <span>{person.role}</span>
                </div>
                <button
                  onClick={() => toggleFollow(person.id)}
                  className={following.includes(person.id) ? 'mini-follow following' : 'mini-follow'}
                >
                  {following.includes(person.id) ? 'Following' : 'Follow'}
                </button>
              </div>
            ))}
          </div>
        </section>

        <div className="composer card social-composer">
          <Avatar initials="JU" accent="teal" />
          <div className="composer-pro-main">
            <textarea
              value={draft}
              onChange={e=>setDraft(e.target.value)}
              placeholder="Share an economic insight, question, paper, opportunity or professional update…"
              rows={draft ? 3 : 1}
            />
            <div className="composer-pro-footer">
              <div>
                <button><FileText size={16}/> Paper</button>
                <button><BarChart3 size={16}/> Data</button>
                <button><Image size={16}/> Media</button>
                <button><Video size={16}/> Lecture</button>
              </div>
              <button className="primary-btn compact-btn" onClick={publish}>Post</button>
            </div>
          </div>
        </div>

        <div className="feed-tabs social-tabs">
          {(['For you','Following','Professors','Students','Research','Jobs'] as FeedTab[]).map(item =>
            <button key={item} onClick={() => setTab(item)} className={tab === item ? 'active' : ''}>{item}</button>
          )}
        </div>

        <div className="post-list">
          {tab === 'Jobs' && (
            <article className="career-feed-card card">
              <div className="career-icon"><BriefcaseBusiness size={22}/></div>
              <div>
                <p className="eyebrow">OPPORTUNITIES</p>
                <h2>Jobs, fellowships, research roles and consulting opportunities</h2>
                <p>Economics, policy, data, banking, health economics, academia and technology roles.</p>
                <button className="secondary-btn">View opportunities <ChevronRight size={15}/></button>
              </div>
            </article>
          )}

          {tab === 'Students' && (
            <article className="card student-prompt-card">
              <div className="student-prompt-icon"><Users size={22}/></div>
              <div>
                <h2>Student and early-career economists</h2>
                <p>Student posts, dissertation questions, internship updates and early-career discussions will appear here.</p>
              </div>
            </article>
          )}

          {localPosts.map(post => (
            <article className="post-card card professional-post" key={post.id}>
              <div className="post-head">
                <Avatar initials="JU" accent="teal" verified/>
                <div className="post-author">
                  <div><strong>Joshua Umah</strong><span className="verified-label">Economist</span></div>
                  <p>Nigeria · Just now</p>
                </div>
                <button className="icon-btn"><MoreHorizontal size={20}/></button>
              </div>
              <p className="post-body local-post-text">{post.text}</p>
              <div className="post-actions">
                <button><Heart size={18}/>0</button>
                <button><MessageCircle size={18}/>0</button>
                <button><Send size={18}/>Share</button>
                <button className="bookmark-action"><Bookmark size={18}/></button>
              </div>
            </article>
          ))}

          {tab !== 'Jobs' && tab !== 'Students' && visiblePosts.map(post => (
            <article className="post-card card professional-post facebook-post" key={post.id}>
              <div className="post-head">
                <Avatar initials={post.author.initials} accent={post.author.accent} verified={post.author.verified}/>
                <div className="post-author">
                  <div>
                    <strong>{post.author.name}</strong>
                    <span className="verified-label">{post.author.role.includes('Professor') ? 'Professor' : 'Verified economist'}</span>
                  </div>
                  <p>{post.author.role} · {post.author.institution} · {post.time}</p>
                </div>

                <button
                  className={following.includes(post.author.id) ? 'post-follow following' : 'post-follow'}
                  onClick={() => toggleFollow(post.author.id)}
                >
                  {following.includes(post.author.id) ? 'Following' : <><UserPlus size={14}/> Follow</>}
                </button>
                <button className="icon-btn"><MoreHorizontal size={20}/></button>
              </div>

              <div className="post-tag">{post.tag}</div>
              <h2>{post.title}</h2>
              <p className="post-body">{post.body}</p>

              {post.stats && (
                <div className={`insight-banner insight-${post.kind}`}>
                  <span/><b>{post.stats}</b><ChevronRight size={17}/>
                </div>
              )}

              <div className="post-social-proof">
                <span>{post.likes + (liked.includes(post.id) ? 1 : 0)} reactions</span>
                <span>{post.comments} comments</span>
              </div>

              <div className="post-actions social-actions">
                <button
                  className={liked.includes(post.id) ? 'selected' : ''}
                  onClick={() => setLiked(v => v.includes(post.id) ? v.filter(x=>x!==post.id) : [...v, post.id])}
                >
                  <Heart size={18} fill={liked.includes(post.id) ? 'currentColor' : 'none'}/> Like
                </button>
                <button><MessageCircle size={18}/> Comment</button>
                <button><Send size={18}/> Share</button>
                <button
                  className={bookmarked.includes(post.id) ? 'selected bookmark-action' : 'bookmark-action'}
                  onClick={() => setBookmarked(v => v.includes(post.id) ? v.filter(x=>x!==post.id) : [...v, post.id])}
                >
                  <Bookmark size={18} fill={bookmarked.includes(post.id) ? 'currentColor' : 'none'}/>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="social-rail">
        <section className="rail-card">
          <div className="rail-title"><h3>Live now</h3><button>See all</button></div>
          <div className="live-hero">
            <div className="live-visual">
              <div className="speaker-stage"><span className="stage-avatar">DO</span><span className="wave-bars"><i/><i/><i/><i/><i/></span></div>
              <button className="play-circle"><Play size={18} fill="currentColor"/></button>
            </div>
            <p className="event-kicker">NIGERIA ECONOMY ROOM</p>
            <h4>{liveSessions[0].title}</h4>
            <p>{liveSessions[0].host} · {liveSessions[0].viewers}</p>
            <button className="primary-btn full"><Radio size={15}/> Join discussion</button>
          </div>
        </section>

        <section className="rail-card">
          <div className="rail-title"><h3>Popular communities</h3><button>Explore</button></div>
          <div className="community-suggestions">
            {[
              ['Nigeria Economy Forum','18.4k members'],
              ['Health Economics Nigeria','10.3k members'],
              ['Econometrics & Data Lab','8.9k members'],
              ['Technology & Economics','6.7k members']
            ].map(([name,count]) => (
              <button key={name}>
                <span className="community-symbol">{name.slice(0,2).toUpperCase()}</span>
                <span><strong>{name}</strong><small>{count}</small></span>
                <ChevronRight size={15}/>
              </button>
            ))}
          </div>
        </section>

        <section className="rail-card">
          <p className="eyebrow">FOR PROFESSORS</p>
          <h3 className="professor-tools-title">Teach beyond the lecture hall.</h3>
          <p className="professor-tools-copy">Host a live class, upload a lecture, publish course materials, share a YouTube lecture or open office hours.</p>
          <div className="professor-tools">
            <button><Video size={16}/> Host live session</button>
            <button><BookOpen size={16}/> Publish course</button>
            <button><CalendarDays size={16}/> Schedule office hours</button>
          </div>
        </section>
      </aside>
    </div>
  )
}
