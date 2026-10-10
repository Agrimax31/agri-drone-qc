export default function MixCalculator() {
  return (
    <div>
      <h2>Calculateur de mélange</h2>

      <div className="card">
        <label>Gallons par acre</label><br />
        <input type="number" defaultValue="2.0" style={{ padding: '0.4rem', marginTop: '0.3rem' }} />
      </div>

      <div className="card">
        <h3>Recettes enregistrées</h3>
        <p>Fongicide Blé — 2.0 gal/acre</p>
        <p>Fongicide Maïs — 2.5 gal/acre</p>
      </div>

      <button className="btn">Calculer pour lots</button>
    </div>
  )
}
