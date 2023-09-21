
const SwipeButton = ({ text, position, classSwipe }) => {
    return (
        <button type="button" className={`${classSwipe} z-10 absolute bottom-0 ${position} uppercase text-[33px] font-thin`}>{text}</button>
    )
}

export default SwipeButton;