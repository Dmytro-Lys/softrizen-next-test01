import PropTypes from "prop-types"

const SwipeButton = ({ text, position, classSwipe }) => {
    return (
        <button type="button" className={`${classSwipe} z-10 absolute bottom-0 ${position} uppercase text-[33px] font-thin
                      transition-transform duration-300 ease-in-out hover:scale-[1.1]`}>{text}</button>
    )
}

export default SwipeButton;

SwipeButton.propTypes = {
    text: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    classSwipe: PropTypes.string.isRequired
}