import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Gallery from '@/components/Gallery/Gallery'
import Contacts from '@/components/Contacts/Contacts'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Contacts />
      </main>
    </>
  )
}
