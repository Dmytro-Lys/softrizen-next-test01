import ContactsGroup from "./ContactsGroup"
import ContactsGroupReverse from "./ContactsGroupReverse"
import dataContacts from "../../../public/data/contacts.json"

const ContactsList = () => {
     const {contactsTel, contactsMail, contactsSocial } = dataContacts;
    return (
      <div className="w-full flex flex-col gap-[24px]  
                      md:flex-row md:gap-0
                      xl:flex-col xl:gap-[124px] ">
        <div className="w-full flex flex-col gap-[24px] xl:gap-[64px] xl:max-w-[607px]">
          <ContactsGroup dataContacts={contactsTel} caption="Phone number"/>
          <ContactsGroup dataContacts={contactsMail} caption="E-mail" />
        </div>
        <div className="w-full flex md:hidden xl:flex">
          <ContactsGroup dataContacts={contactsSocial} caption="Follow us" order="first" />
        </div>  
        <div className="w-full hidden md:flex xl:hidden">
          <ContactsGroupReverse dataContacts={contactsSocial} caption="Follow us" order="last"/>
        </div>  
      </div>  
    )
}

export default ContactsList;