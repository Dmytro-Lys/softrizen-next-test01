import PropTypes from "prop-types"

const FormButton = ({ caption }) => {
    return (
         <button className="block self-end w-[88px] text-[30px] uppercase font-medium
                            transition-transform duration-300 ease-in-out hover:scale-[1.1]"
                 type="submit">{caption}</button>
    )
}

export default FormButton;

FormButton.propTypes = {
    caption: PropTypes.string.isRequired
}