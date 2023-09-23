import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Gallery from '@/components/Gallery/Gallery'
import Contacts from '@/components/Contacts/Contacts'
import { Element } from 'react-scroll'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Element name="gallery" className="element">
          <Gallery />
        </Element>
        <Element name="contacts" className="element">
          <Contacts />
        </Element>  
      </main>
    </>
  )
}
