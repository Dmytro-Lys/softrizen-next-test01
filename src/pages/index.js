import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  )
}
