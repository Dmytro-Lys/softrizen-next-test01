import data from "../../../public/data/hero.json"
import Container from "../Container";
import BorderCorner from "./BorderCorner";
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
                <div className="w-full order-1 row-span-2 md:row-span-3">
                    <h1 className=" mb-[24px] font-thin uppercase
                           text-[40px] leading-[56px] tracking-[-2px]
                           md:mb-[68px] md:leading-[1.33] md:text-[67px] md:tracking-[-3px]
                           xl:mb-[148px] xl:text-[98px] xl:tracking-[-3.9px] ">
                        <span className="block leading-none font-medium">Uncover</span> Carpathian’s Secrets
                    </h1>
                    <p className=" w-[157px] px-{123px] text-[10px] leading-[16px] font-extralight
                                   md:w-[314px] md:text-[14px] md:tracking-[1.2px]
                                   xl:w-[646px] md:text-[16px] xl:leading-[24px] xl:tracking-[1.4px] ">
                        {locations}
                    </p>
                </div>  
                <h2 className="block order-first justify-self-end uppercase font-thin 
                               leading-none w-[118px] tracking-[1px] text-[37px] 
                               md:order-2 md:w-[230px] md:text-[67px] md:tracking-[6px] 
                               xl:w-[294px] xl:text-[98px] xl:tracking-[1px] ">
                    <span className="font-medium">7</span>days<span className="block tracking-[9.5px] text-[12px] 
                                     md:tracking-[25.9px] md:text-[14px]
                                     xl:tracking-[36.5px] xl:text-[16px]">journey</span>
                </h2>      
                <div className="order-3   
                                md:justify-self-end md:max-w-[230px] md:row-span-2 md:self-end
                                xl:max-w-[294px]">
                    <p className="text-[14px] mb-[24px] leading-[20px] text-justify font-extralight 
                                  md:text-[16px] md:mb-[28px]
                                  xl:text-[18px]  xl:leading-[24px] ">
                        {weOffer}
                    </p>
                    <a href="#" className="relative bg-white/[.1]  transition duration-300 ease-in-out hover:bg-white/[.2] flex justify-center text-[18px] xl:text-[32px] leading-[50px] xl:leading-[72px] font-bold uppercase">
                       join now
                       <BorderCorner />
                    </a>
                </div>
            </div>  
            </Container>
        </section>
)};
export default Hero;