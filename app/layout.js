import '../styles/globals.css'
import { Navbar, Footer } from '@/components'

export const metadata = {
  title: 'Audiophile',
  description: 'An audiomatic ecommerce platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='layout'>
        <header>
          <Navbar />
        </header>
        <main className='main-container'>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
 