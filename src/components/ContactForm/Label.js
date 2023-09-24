import PropTypes from "prop-types"

const Label = ({label}) => {
    return (
        <label className="text-[12px] font-extralight leading-[24px] tracking-[2.4px]">{label}</label>
    )
}

export default Label;

Label.propTypes = {
    label: PropTypes.string.isRequired
}