import PropTypes from "prop-types"
import HeroTitle from "./HeroTitle"

const HeroSideLeft = ({ textContent }) => {
    return (
        <div className="w-full order-1 row-span-2 md:row-span-3">
            <HeroTitle textMedium="Uncover" textThin=" Carpathian’s Secrets"/>
            <p className=" w-[157px] px-{123px] text-[10px] leading-[16px] font-extralight
                           md:w-[314px] md:text-[14px] md:tracking-[1.2px]
                           xl:w-[646px] md:text-[16px] xl:leading-[24px] xl:tracking-[1.4px] ">
                {textContent}
            </p>
        </div>  
    )
}

export default HeroSideLeft;

HeroSideLeft.propTypes = {
    textContent: PropTypes.string.isRequired
}
