import React from 'react'
import Head from 'next/head'
import { Navbar } from '.'

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

      </main>
      
    </div>
  )
}

export default Layout
