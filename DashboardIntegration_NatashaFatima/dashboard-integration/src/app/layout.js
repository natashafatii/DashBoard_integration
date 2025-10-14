export const metadata = {
  title: "Dashboard Integration",
  description: "Power BI Dashboard - Data Science Assignment",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial' }}>
        {children}
      </body>
    </html>
  )
}
