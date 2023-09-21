import PropTypes from "prop-types"

const ContactsGroupCaption = ({text, order=""}) =>{
    return(
        <p className={`${order ? `order-${order}` : ""} text-[12px] font-extralight leading-[20px] xl:leading-[24px] xl:order-last`}>{text}</p>
    )
}
export default ContactsGroupCaption;

ContactsGroupCaption.propTypes = {
    text: PropTypes.string.isRequired
}