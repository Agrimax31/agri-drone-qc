export default function Fields() {
  return (
    <div>
      <h2>Parcelles & Clients</h2>

      <div className="card">
        <strong>La Grande Pièce</strong> — Maïs<br />
        <span style={{ color: '#555' }}>18,7 ha</span>
      </div>

      <div className="card">
        <strong>Champ du Moulin</strong> — Soya<br />
        <span style={{ color: '#555' }}>14,2 ha</span>
      </div>

      <button className="btn">+ Ajouter une parcelle</button>
    </div>
  )
}
