import { Routes, Route, NavLink } from 'react-router-dom'
import Jobs from './pages/Jobs'
import JobDetail from './pages/JobDetail'
import MixCalculator from './pages/MixCalculator'
import Reports from './pages/Reports'
import Fields from './pages/Fields'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>AgriDrone QC</h1>
        <nav>
          <NavLink to="/">Jobs</NavLink>
          <NavLink to="/melange">Mélange</NavLink>
          <NavLink to="/rapports">Rapports</NavLink>
          <NavLink to="/parcelles">Parcelles</NavLink>
        </nav>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route path="/melange" element={<MixCalculator />} />
          <Route path="/rapports" element={<Reports />} />
          <Route path="/parcelles" element={<Fields />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
