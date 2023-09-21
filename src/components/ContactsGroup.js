import ContactsReferences from "./ContactsReferences"
import ContactsGroupCaption from "./ContactsGroupCaption"


const ContactsGroup = ({dataContacts, caption, order=""}) => {
   
    return(
       <div className={`flex gap-[20px] items-baseline`}>
          <ContactsReferences  items={dataContacts} />
          <ContactsGroupCaption  text={caption} order={order}/>
       </div>
    )
}

export default ContactsGroup;