import './App.css'
import { Dashboard } from './Pages/Dashboard/Dashboard'

import { AnimeHeader } from './components/AnimeHeader/AnimeHeader'

function App() {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <AnimeHeader />
      <Dashboard />
    </div>
  )
}

export default App
