import { Element } from 'react-scroll'
import { useRef } from 'react'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Gallery from '@/components/Gallery/Gallery'
import Contacts from '@/components/Contacts/Contacts'


export default function Home() {
  const refMain = useRef()
  return (
    <>
      <Header refMain={refMain} />
      <main ref={refMain}>
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
