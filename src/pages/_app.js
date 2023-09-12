import '@/styles/globals.css'
import Layout from '@/components/Layout';
import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })


const App = ({ Component, pageProps }) => (
  // <Layout>
  <>
   <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
    <Component {...pageProps} />
  </>
)

export default App;
