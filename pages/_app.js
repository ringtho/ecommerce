import React from 'react'
import { Layout } from '../components'
import { StateContext } from '@/context/stateContext';
import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast';
 
export default function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
