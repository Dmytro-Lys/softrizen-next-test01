import { Link } from "react-scroll";
import PropTypes from "prop-types"
import BorderCorner from "./BorderCorner";

const HeroSideRight = ({ textContent }) => {
    return (
       <div className="order-3   
                       md:justify-self-end md:max-w-[230px] md:row-span-2 md:self-end
                       xl:max-w-[294px]">
            <p className="text-[14px] mb-[24px] leading-[20px] text-justify font-extralight 
                          md:text-[16px] md:mb-[28px]
                          xl:text-[18px]  xl:leading-[24px] ">
                {textContent}
            </p>
            <Link className="cursor-pointer relative bg-white/[.1]  transition duration-300 ease-in-out hover:bg-white/[.2] flex justify-center text-[18px] 
                             xl:text-[32px] leading-[50px] xl:leading-[72px] font-bold uppercase"
                             to="contacts" spy={true} smooth={true} duration={500}>
                join now
                <BorderCorner />
            </Link>    
        </div>
    )
}

export default HeroSideRight;

HeroSideRight.propTypes = {
    textContent: PropTypes.string.isRequired
}

