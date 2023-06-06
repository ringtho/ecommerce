import styles from '../styles/globals.css'
import { Product, FooterBanner, HeroBanner } from '../components'
import { client } from '@/lib/client'


const getData = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  return {
    products,
    bannerData
  }

}

const Home = async () => {
  const { products, bannerData } = await getData()
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0] } />
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {products?.map((product) => product.name)}
      </div>

      <FooterBanner />
    </>
  )
}

export default Home