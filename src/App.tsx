import { Navigate, Route, Routes } from 'react-router-dom'
import { Shell } from './components/Shell'
import { Home } from './pages/Home'
import { Network } from './pages/Network'
import { Research } from './pages/Research'
import { Policy } from './pages/Policy'
import { Live } from './pages/Live'
import { Messages } from './pages/Messages'
import { Learning } from './pages/Learning'
import { Opportunities } from './pages/Opportunities'
import { Institutions } from './pages/Institutions'

export default function App() {
  return <Shell><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/network" element={<Network/>}/>
    <Route path="/research" element={<Research/>}/>
    <Route path="/policy" element={<Policy/>}/>
    <Route path="/live" element={<Live/>}/>
    <Route path="/messages" element={<Messages/>}/>
    <Route path="/learning" element={<Learning/>}/>
    <Route path="/opportunities" element={<Opportunities/>}/>
    <Route path="/institutions" element={<Institutions/>}/>
    <Route path="*" element={<Navigate to="/" replace/>}/>
  </Routes></Shell>
}
