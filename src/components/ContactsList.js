import ContactsGroup from "./ContactsGroup"
import dataContacts from "../../public/data/contacts.json"

const ContactsList = () => {
     const {contactsTel, contactsMail, contactsSocial } = dataContacts;
    return (
      <div className="flex flex-col gap-[24px]">
        <ContactsGroup dataContacts={contactsTel} caption="Phone number"/>
        <ContactsGroup dataContacts={contactsMail} caption="E-mail"/>
        <ContactsGroup dataContacts={contactsSocial} caption="Follow us" order="first"/>
      </div>  
    )
}

export default ContactsList;