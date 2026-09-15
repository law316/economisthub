export type Economist = {
  id: string
  name: string
  initials: string
  role: string
  institution: string
  country: string
  field: string
  verified: boolean
  accent: 'blue' | 'teal' | 'gold' | 'green' | 'violet'
}

export type FeedPost = {
  id: string
  author: Economist
  time: string
  tag: string
  title: string
  body: string
  stats?: string
  likes: number
  comments: number
  bookmarks: number
  kind: 'policy' | 'research' | 'data' | 'community'
}

export const economists: Economist[] = [
  { id: '1', name: 'Prof. Ama Mensah', initials: 'AM', role: 'Professor of Development Economics', institution: 'University of Ghana', country: 'Ghana', field: 'Development & Labour', verified: true, accent: 'blue' },
  { id: '2', name: 'Dr. David Okafor', initials: 'DO', role: 'Senior Economist', institution: 'Monetary Policy Institute', country: 'Nigeria', field: 'Banking & Monetary Policy', verified: true, accent: 'teal' },
  { id: '3', name: 'Prof. Amina Diallo', initials: 'AD', role: 'Trade Policy Researcher', institution: 'West Africa Trade Lab', country: 'Senegal', field: 'Trade & Public Policy', verified: true, accent: 'gold' },
  { id: '4', name: 'Lilian Njeri', initials: 'LN', role: 'MSc Researcher', institution: 'University of Nairobi', country: 'Kenya', field: 'Food & Agricultural Economics', verified: true, accent: 'green' },
  { id: '5', name: 'Dr. Tinashe Moyo', initials: 'TM', role: 'Econometrician', institution: 'Policy Analytics Africa', country: 'Zimbabwe', field: 'Econometrics & Data Science', verified: true, accent: 'violet' },
]

export const feedPosts: FeedPost[] = [
  { id: 'p1', author: economists[1], time: '18 min ago', tag: 'Monetary policy', title: 'What should African central banks prioritise when food inflation becomes persistent?', body: 'Headline inflation is easing in some markets, but food-price pressure remains structurally different. I am opening this thread to compare transmission channels, FX effects and policy trade-offs across countries.', stats: 'Policy discussion · 12 countries represented', likes: 184, comments: 67, bookmarks: 42, kind: 'policy' },
  { id: 'p2', author: economists[0], time: '52 min ago', tag: 'Research collaboration', title: 'Looking for 3 research assistants for a cross-country youth employment project', body: 'We are building a harmonised dataset covering Ghana, Nigeria, Kenya and Senegal. Strong Stata/R skills are useful, but careful documentation and literature synthesis matter just as much.', stats: 'Research room · Applications close Friday', likes: 129, comments: 31, bookmarks: 96, kind: 'research' },
  { id: 'p3', author: economists[4], time: '2 hr ago', tag: 'Data release', title: 'New interactive notebook: visualising exchange-rate pass-through across 8 African economies', body: 'I have shared a clean teaching version of the notebook with methodology notes, robustness checks and a short video walkthrough. Feedback on model specification is welcome.', stats: 'Dataset + notebook · Open peer feedback', likes: 241, comments: 48, bookmarks: 118, kind: 'data' },
]

export const liveSessions = [
  { title: 'Inflation, FX & the next policy cycle', host: 'Dr. David Okafor', time: 'Live now', viewers: '1,248 watching', accent: 'live', country: 'Pan-African' },
  { title: 'AfCFTA: from tariff reform to industrial policy', host: 'Prof. Amina Diallo', time: 'Today · 18:30 WAT', viewers: '842 registered', accent: 'gold', country: 'Africa + Diaspora' },
  { title: 'Research clinic: making panel models defensible', host: 'Dr. Tinashe Moyo', time: 'Tomorrow · 16:00 WAT', viewers: '516 registered', accent: 'teal', country: 'Methods Lab' },
]

export const researchRooms = [
  { title: 'Food Inflation & Household Welfare', code: 'FIHW', members: 8, tasks: 12, progress: 72, countries: ['NG', 'GH', 'KE', 'SN'], field: 'Development Economics', status: 'Active' },
  { title: 'Youth Employment & Informal Work', code: 'YEIW', members: 11, tasks: 18, progress: 48, countries: ['GH', 'NG', 'ZA', 'RW'], field: 'Labour Economics', status: 'Recruiting' },
  { title: 'AfCFTA Trade Frictions Observatory', code: 'ATFO', members: 15, tasks: 23, progress: 61, countries: ['SN', 'CI', 'NG', 'KE', 'MA'], field: 'International Trade', status: 'Active' },
]

export const opportunities = [
  { title: 'Graduate Economist', org: 'Regional Monetary Institute', location: 'Abuja · Hybrid', match: 94, type: 'Full-time' },
  { title: 'Research Assistant — Trade', org: 'University Research Consortium', location: 'Remote across Africa', match: 91, type: 'Research' },
  { title: 'Policy Fellowship', org: 'African Development Policy Lab', location: 'Nairobi', match: 87, type: 'Fellowship' },
  { title: 'Data Analyst — Financial Stability', org: 'Commercial Bank', location: 'Lagos · Hybrid', match: 83, type: 'Full-time' },
]

export const messages = [
  { name: 'Prof. Ama Mensah', initials: 'AM', preview: 'I reviewed the revised identification strategy…', time: '09:42', unread: 2, accent: 'blue' },
  { name: 'Food Inflation Research Room', initials: 'FI', preview: 'Lilian uploaded household_panel_v3.csv', time: '08:15', unread: 4, accent: 'teal' },
  { name: 'Amina Diallo', initials: 'AD', preview: 'Can you join the AfCFTA live discussion?', time: 'Yesterday', unread: 0, accent: 'gold' },
  { name: 'NESA Community', initials: 'NC', preview: 'New policy roundtable announced for members.', time: 'Mon', unread: 1, accent: 'green' },
]

export const policyRooms = [
  { title: 'Monetary policy & inflation', desc: 'Central banks, inflation expectations, FX, credit and financial stability.', members: '18.4k', active: '1.2k active', icon: '₦' },
  { title: 'Trade, AfCFTA & industrialisation', desc: 'Regional trade, firm productivity, industrial policy and border frictions.', members: '12.8k', active: '704 active', icon: '↗' },
  { title: 'Jobs, labour & human capital', desc: 'Youth employment, migration, informality, skills and labour markets.', members: '15.1k', active: '886 active', icon: '◎' },
  { title: 'Development, poverty & inclusion', desc: 'Poverty measurement, social protection, agriculture and inclusive growth.', members: '20.3k', active: '1.4k active', icon: '◫' },
]
