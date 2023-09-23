import PropTypes from "prop-types"
import ContactsReferences from "./ContactsReferences"
import ContactsGroupCaption from "./ContactsGroupCaption"


const ContactsGroupRevers = ({dataContacts, caption, order=""}) => {

    return(
       <div className={`w-full grid grid-cols-[1fr_2fr] gap-[20px] xl:max-w-[607px]`}>   
            <ContactsGroupCaption text={caption} order={order} />
            <ContactsReferences items={dataContacts} order={order} />
       </div>
    )
}

export default ContactsGroupRevers;

ContactsGroupRevers.propTypes = {
   dataContacts: PropTypes.array.isRequired,
   caption: PropTypes.string.isRequired,
   order: PropTypes.string
}