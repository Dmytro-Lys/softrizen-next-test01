import Container from "../Container";
import SectionTitle from "../SectionTitle";
import ContactsList from "../ContactsList";
import ContactForm from "../ContactForm/ContactForm";
import css from "./Contacts.module.css"

const Contacts = () => {
    return (
        <section id="contacts" className={`${css["contacts-bg"]} py-[56px] w-full
                        md:py-[64px]
                        xl:py-[104px]`}>
        <Container>
          <SectionTitle firstText='Contact' secondText='Us' />  
          <div className="flex flex-wrap justify-center 
                          md:grid md:grid-cols-1 md:grid-row-2  md:gap-[64px] 
                          xl:grid-cols-2">
            <ContactsList />
            <ContactForm />
          </div>  
        </Container>
    </section>
        
    )
}

export default Contacts;