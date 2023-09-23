import { nanoid } from 'nanoid';
import PropTypes from "prop-types"
import ContactItem from "./ContactItem"

const ContactsReferences = ({items, order=""}) =>{
    return(
      <ul className={`flex flex-col ${!order ? "justify-self-end": ""} xl:justify-self-end`}>
         {items.map(({ref, text}) => { return <ContactItem key={nanoid()} refItem={ref} textItem={text}/> })}
      </ul>
    )
}

export default ContactsReferences;

ContactsReferences.propTypes = {
  items: PropTypes.array.isRequired,
  order: PropTypes.string
}