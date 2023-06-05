import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client =  createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion:  '2023-06-05',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_APP_TOKEN
})