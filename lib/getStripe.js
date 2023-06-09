import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  const api = `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
  if(!stripePromise) {
    stripePromise = loadStripe(api)
  }

  return stripePromise;
}

export default getStripe;