import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })


const App = ({ Component, pageProps }) => (
  
  <>
   <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
    <Head>
      <title>CarpTravel</title>
      <meta name="description" content="Uncover Carpathian’s secrets with us" key="desc" />
       <meta property="og:title" content="Carpathian’s travel" />
        <meta
          property="og:description"
          content="Unforgettable trips to the most beautiful parts of the Carpathians"
        />
        <meta
          property="og:image"
          content="../images/og_image.jpg"
        />
    </Head>
    <Component {...pageProps} />
  </>
)

export default App;
