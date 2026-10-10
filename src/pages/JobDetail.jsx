import { useParams } from 'react-router-dom'

export default function JobDetail() {
  const { id } = useParams()

  return (
    <div>
      <h2>Job #{id} — Champ Trail</h2>

      <div className="card">
        <h3>Météo (auto-remplie)</h3>
        <p>Température : 18°C</p>
        <p>Vitesse du vent : 12 km/h</p>
        <p>Direction : SO</p>
      </div>

      <div className="card">
        <h3>Produits</h3>
        <p>Miravis Neo — 0.5 L/acre</p>
      </div>

      <button className="btn">Démarrer log</button>
    </div>
  )
}
