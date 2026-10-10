import { Link } from 'react-router-dom'

const jobs = [
  { id: 1, champ: 'Champ Nord - Maïs', client: 'Ferme Larivière', superficie: '120 acres', statut: 'En cours', date: '12 mai 2025' },
  { id: 2, champ: 'Champ Ouest - Blé', client: 'Ferme Larivière', superficie: '85 acres', statut: 'Terminé', date: '3 mai 2025' },
]

export default function Jobs() {
  return (
    <div>
      <h2>Mes jobs</h2>
      <button className="btn" style={{ marginBottom: '1rem' }}>+ Nouveau job</button>

      {jobs.map(job => (
        <div key={job.id} className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <strong>{job.champ}</strong>
            <span style={{ color: job.statut === 'En cours' ? '#2e7d32' : '#666' }}>{job.statut}</span>
          </div>
          <p style={{ margin: '0.4rem 0', color: '#555' }}>
            {job.client} • {job.superficie} • {job.date}
          </p>
          <Link to={`/job/${job.id}`}>Voir le détail →</Link>
        </div>
      ))}
    </div>
  )
}
