import React from 'react'
import { client } from '@/lib/client'
import { urlFor } from '@/lib/client'

import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Product } from '@/components'

const ProductDetails = async ({ params: { slug }}) => {
  const { product, products } = await getData(slug)
  const { name, details, image, price } = product
  return (
    <div>
      <div className='product-detail-container'>
        <div>
            <div className='image-container'>
                <img src={urlFor(image && image[0]).url()} alt={name} />
            </div>
            {/* <div className='small-images-container'>
                {image?.map((item, index) => (
                    <img 
                        src={urlFor(item).url()}
                        alt='product'
                        className=''
                        onMouseEnter=""
                    />
                ))}
            </div> */}
        </div>
        <div className='product-detail-desc'>
            <h1>{name}</h1>
            <div className='reviews'>
                <div>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                </div>
                <p>(20)</p>
            </div>
            <h4>Details:</h4>
            <p>{details}</p>
            <p className='price'>${price}</p>
            <div className='quantity'>
                <h3>Quantity:</h3>
                <p className='quantity-desc'>
                    <span className='minus' onClick="">
                        <AiOutlineMinus />
                    </span>
                    <span className='num'>0</span>
                    <span className='plus' onClick="">
                        <AiOutlinePlus />
                    </span>
                </p>
            </div>
            <div className='buttons'>
                <button 
                    type='button'
                    className='add-to-cart'
                    onClick=''
                >
                    Add to Cart
                </button>
                <button 
                    type='button'
                    className='buy-now'
                    onClick=''
                >
                    Buy Now
                </button>
            </div>
        </div>
      </div>
      <div className='maylike-products-wrapper'>
        <h2>You may also like</h2>
        <div className='marquee'>
            <div className='maylike-products-container track'>
                {products?.map((item) => (
                    <Product key={item._id} product={item} />
                ))}
            </div>
        </div>
      </div>

    </div>
  )
}

const getData = async (slug) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`
    const product = await client.fetch(query)
  
    const productsQuery = '*[_type == "product"]'
    const products = await client.fetch(productsQuery)
  
    return { products,product }
  } 

export default ProductDetails
