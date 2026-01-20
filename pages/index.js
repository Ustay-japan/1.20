
import Head from 'next/head'
export default function Home(){
  return (
    <>
      <Head>
        <title>U-Stay Japan | Private Car & Charter Service</title>
        <meta name="description" content="U-Stay provides premium private car and charter services across Japan for international travelers." />
      </Head>
      <main className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center px-6">
          <h1 className="text-4xl font-bold mb-4">U-Stay Japan</h1>
          <p className="text-lg mb-6">Premium Japan Private Car & Charter Service for Global Travelers</p>
          <a className="bg-black text-white px-6 py-3 rounded-xl" href="#">Contact Us</a>
        </div>
      </main>
    </>
  )
}
