import PropTypes from "prop-types"

const HeroSectionTitle = ({ textMedium, textThin, textThird }) => {
    return (
        <h2 className="block order-first justify-self-end uppercase font-thin 
                               leading-none w-[118px] tracking-[1px] text-[37px] 
                               md:order-2 md:w-[230px] md:text-[67px] md:tracking-[6px] 
                               xl:w-[294px] xl:text-[98px] xl:tracking-[1px] ">
            <span className="font-medium">{textMedium}</span>{textThin}<span className="block tracking-[9.5px] text-[12px] 
                             md:tracking-[25.9px] md:text-[14px]
                             xl:tracking-[36.5px] xl:text-[16px]">{textThird}</span>
        </h2>   
    )
}

export default HeroSectionTitle;

HeroSectionTitle.propTypes = {
    textMedium: PropTypes.string.isRequired,
    textThin: PropTypes.string.isRequired,
    textThird: PropTypes.string.isRequired
}