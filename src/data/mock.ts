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
  { id: '1', name: 'Prof. Ifeoma Nwankwo', initials: 'IN', role: 'Professor of Development Economics', institution: 'University of Nigeria', country: 'Nigeria', field: 'Development & Labour', verified: true, accent: 'blue' },
  { id: '2', name: 'Dr. David Okafor', initials: 'DO', role: 'Senior Economist', institution: 'Monetary Policy Institute', country: 'Nigeria', field: 'Banking & Monetary Policy', verified: true, accent: 'teal' },
  { id: '3', name: 'Dr. Amina Bello', initials: 'AB', role: 'Health Economist', institution: 'Health Policy Research Centre', country: 'Nigeria', field: 'Health Economics', verified: true, accent: 'gold' },
  { id: '4', name: 'Chinedu Eze', initials: 'CE', role: 'Economic Analyst', institution: 'Lagos Policy Lab', country: 'Nigeria', field: 'Public Finance & Policy', verified: true, accent: 'green' },
  { id: '5', name: 'Dr. Tola Adeyemi', initials: 'TA', role: 'Econometrician', institution: 'Applied Economics & Data Lab', country: 'Nigeria', field: 'Econometrics & Data Science', verified: true, accent: 'violet' },
  { id: '6', name: 'Prof. Ama Mensah', initials: 'AM', role: 'Professor of Economics', institution: 'University of Ghana', country: 'Ghana', field: 'Development Economics', verified: true, accent: 'blue' },
  { id: '7', name: 'Lilian Njeri', initials: 'LN', role: 'Research Economist', institution: 'University of Nairobi', country: 'Kenya', field: 'Agricultural Economics', verified: true, accent: 'green' },
]

export const feedPosts: FeedPost[] = [
  { id: 'p1', author: economists[1], time: '18 min ago', tag: 'Nigeria economy', title: 'How should economists think about inflation when food, FX and transport costs move together?', body: 'I am opening this discussion for evidence, not slogans. Which transmission channels matter most, what indicators should we watch, and where are the best Nigerian datasets for testing the competing explanations?', stats: 'Open discussion · 67 contributions', likes: 184, comments: 67, bookmarks: 42, kind: 'policy' },
  { id: 'p2', author: economists[0], time: '46 min ago', tag: 'Research collaboration', title: 'Recruiting research assistants for a household welfare and labour-market study', body: 'The group needs people who can support literature review, survey documentation and Stata/R analysis. Early-career economists are welcome if they can show careful work and strong research ethics.', stats: 'Research group · 8 open contributor slots', likes: 129, comments: 31, bookmarks: 96, kind: 'research' },
  { id: 'p3', author: economists[2], time: '1 hr ago', tag: 'Health economics', title: 'What evidence would improve the debate on health financing and household out-of-pocket spending?', body: 'Health economics deserves a much larger place in our professional conversations. I have shared a reading list and I would like colleagues working on insurance, public finance and service delivery to add Nigerian evidence.', stats: 'Reading list · Research group forming', likes: 221, comments: 54, bookmarks: 118, kind: 'community' },
  { id: 'p4', author: economists[4], time: '2 hr ago', tag: 'Data & technology', title: 'Python, causal inference and AI tools are changing the economist’s toolkit', body: 'The important question is not whether economists should use new tools, but how to combine them with sound identification, transparent assumptions and reproducible research. Sharing a notebook and methods clinic this week.', stats: 'Notebook + methods clinic · Open to members', likes: 241, comments: 48, bookmarks: 118, kind: 'data' },
]

export const liveSessions = [
  { title: 'Nigeria inflation, FX and the policy outlook', host: 'Dr. David Okafor', time: 'Live now', viewers: '1,248 watching', accent: 'live', country: 'Nigeria' },
  { title: 'Health financing: what should Nigeria measure better?', host: 'Dr. Amina Bello', time: 'Today · 18:30 WAT', viewers: '842 registered', accent: 'gold', country: 'Nigeria + Diaspora' },
  { title: 'Research clinic: making panel models defensible', host: 'Dr. Tola Adeyemi', time: 'Tomorrow · 16:00 WAT', viewers: '516 registered', accent: 'teal', country: 'Methods Lab' },
]

export const researchRooms = [
  { title: 'Food Inflation & Household Welfare in Nigeria', code: 'FIHW', members: 18, tasks: 12, progress: 72, countries: ['NG'], field: 'Development Economics', status: 'Active' },
  { title: 'Youth Employment, Skills & Informal Work', code: 'YESI', members: 24, tasks: 18, progress: 48, countries: ['NG'], field: 'Labour Economics', status: 'Recruiting' },
  { title: 'Health Financing & Household Protection', code: 'HFHP', members: 14, tasks: 9, progress: 36, countries: ['NG'], field: 'Health Economics', status: 'Recruiting' },
  { title: 'AfCFTA, Nigerian Firms & Export Competitiveness', code: 'ANEC', members: 21, tasks: 23, progress: 61, countries: ['NG','GH','KE'], field: 'International Trade', status: 'Active' },
]

export const opportunities = [
  { title: 'Graduate Economist', org: 'Economic Research & Policy Institute', location: 'Abuja · Hybrid', match: 94, type: 'Full-time' },
  { title: 'Research Assistant — Health Economics', org: 'Health Policy Research Centre', location: 'Remote · Nigeria', match: 92, type: 'Research' },
  { title: 'Economics & Data Fellowship', org: 'Applied Policy Lab', location: 'Lagos · Hybrid', match: 90, type: 'Fellowship' },
  { title: 'Economic Analyst — Digital Markets', org: 'Technology Policy Company', location: 'Remote', match: 88, type: 'Tech & economics' },
  { title: 'Data Analyst — Financial Stability', org: 'Commercial Bank', location: 'Lagos · Hybrid', match: 83, type: 'Full-time' },
]

export const messages = [
  { name: 'Prof. Ifeoma Nwankwo', initials: 'IN', preview: 'I reviewed the revised identification strategy…', time: '09:42', unread: 2, accent: 'blue' },
  { name: 'Food Inflation Research Group', initials: 'FI', preview: 'A new dataset and codebook were uploaded.', time: '08:15', unread: 4, accent: 'teal' },
  { name: 'Dr. Amina Bello', initials: 'AB', preview: 'Can you join the health economics session?', time: 'Yesterday', unread: 0, accent: 'gold' },
  { name: 'Economists Association', initials: 'EA', preview: 'New professional roundtable announced.', time: 'Mon', unread: 1, accent: 'green' },
]

export const policyRooms = [
  { title: 'Nigeria economy: inflation, FX & growth', desc: 'Inflation, exchange rates, interest rates, growth, credit and financial stability.', members: '18.4k', active: '1.2k active', icon: '₦' },
  { title: 'Public finance, tax & government spending', desc: 'Revenue, debt, fiscal choices, budgeting and public-sector effectiveness.', members: '12.8k', active: '704 active', icon: '↗' },
  { title: 'Jobs, labour & human capital', desc: 'Youth employment, migration, informality, skills and labour markets.', members: '15.1k', active: '886 active', icon: '◎' },
  { title: 'Health economics & social protection', desc: 'Health financing, insurance, service delivery, poverty and household protection.', members: '10.3k', active: '640 active', icon: '◫' },
]
