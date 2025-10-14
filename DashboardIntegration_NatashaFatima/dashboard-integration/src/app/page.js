export default function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>📊 Dashboard Integration App</h1>
      <p>Data Science Assignment - Bahria University</p>
      <p><strong>Author:</strong> Natasha Fatima</p>
      
      <a 
        href="/dashboard"
        style={{
          display: 'inline-block',
          marginTop: '2rem',
          padding: '12px 24px',
          backgroundColor: '#0070f3',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 'bold'
        }}
      >
        View Power BI Dashboard
      </a>
    </div>
  )
}
