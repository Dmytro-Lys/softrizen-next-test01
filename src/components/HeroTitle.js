import PropTypes from "prop-types"

const HeroTitle = ({textMedium, textThin}) => {
    return (
        <h1 className=" mb-[24px] font-thin uppercase
                           text-[40px] leading-[56px] tracking-[-2px]
                           md:mb-[68px] md:leading-[1.33] md:text-[67px] md:tracking-[-3px]
                           xl:mb-[148px] xl:text-[98px] xl:tracking-[-3.9px] ">
            <span className="block leading-none font-medium">{textMedium}</span>{textThin}
        </h1>
    )
}

export default HeroTitle;

HeroTitle.propTypes = {
    textMedium: PropTypes.string.isRequired,
    textThin: PropTypes.string.isRequired
}