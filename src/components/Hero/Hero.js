import data from "../../../public/data/hero.json"
import Container from "../Container";
import HeroSideLeft from "../HeroSideLeft";
import HeroSectionTitle from "../HeroSectionTitle";
import HeroSideRight from "../HeroSideRight";
import css from "./Hero.module.css"

const Hero = () => {
    const {locations, weOffer } = data;
    return (        
        <section className={`${css["hero-bg"]} w-full pb-[56px] pt-[105px] flex justify-center
                             md:pt-[133px] md:block
                            xl:pt-[130px]`}>
            <Container>
            <div className="w-full grid grid-cols-1 grid-rows-1 gap-[24px] justify-items-center
                            md:justify-items-start md:grid-cols-2 md:grid-rows-3 md:gap-0">
                <HeroSideLeft textContent={locations}/>    
                <HeroSectionTitle textMedium="7" textThin="days" textThird="journey"/>    
                <HeroSideRight textContent={weOffer}/>    
            </div>  
            </Container>
        </section>
)};
export default Hero;