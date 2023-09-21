import Container from "../Container";
import SectionTitle from "../SectionTitle";
import ContactsList from "../ContactsList";
import css from "./Contacts.module.css"

const Contacts = () => {
    return (
        <section id="contacts" className={`${css["contacts-bg"]} py-[56px] w-full
                        md:py-[64px]
                        xl:py-[104px]`}>
        <Container>
          <SectionTitle firstText='Contact' secondText='Us' />  
          <ContactsList/>
        </Container>
    </section>
        
    )
}

export default Contacts;