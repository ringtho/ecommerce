import React from 'react'
import Head from 'next/head'
import { Navbar, Footer } from '.'

const Layout = () => {
  return (
    <div className='layout'>
      <Head>
        <title>Audiophile</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main.container'>
        Empty
      </main>
      <footer>
        <Footer />
      </footer>
      
    </div>
  )
}

export default Layout
