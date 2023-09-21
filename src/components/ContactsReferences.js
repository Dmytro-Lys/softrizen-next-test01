import {nanoid} from 'nanoid';
import ContactItem from "./ContactItem"

const ContactsReferences = ({items}) =>{
    return(
      <ul className={`flex flex-col`}>
         {items.map(({ref, text}) => { return <ContactItem key={nanoid()} refItem={ref} textItem={text}/> })}
      </ul>
    )
}

export default ContactsReferences;