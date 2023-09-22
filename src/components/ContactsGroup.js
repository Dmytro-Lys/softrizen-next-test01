import ContactsReferences from "./ContactsReferences"
import ContactsGroupCaption from "./ContactsGroupCaption"


const ContactsGroup = ({dataContacts, caption, order=""}) => {

    return(
       <div className={`w-full grid grid-cols-[2fr_1fr] gap-[20px] `}>   
          <ContactsReferences items={dataContacts} order={order} />
          <ContactsGroupCaption text={caption} order={order} />
          
       </div>
    )
}

export default ContactsGroup;