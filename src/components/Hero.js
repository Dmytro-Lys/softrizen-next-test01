import BorderCorner from "./BorderCorner";
import css from "./Hero.module.css"
import Container from "./Container";

const Hero = () => (
    <Container classBg={"hero-container"}>
        <section className={`${css.hero} pb-[56px] pt-[105px] flex justify-center
                             md:pt-[133px] md:block
                            xl:pt-[130px]`}>
            <div className="max-w-[280px] grid grid-cols-1 grid-rows-1 gap-[24px] justify-items-center
                            md:max-w-full md:justify-items-start md:grid-cols-2 md:grid-rows-2 md:gap-0
                            xl:gap-[130px]">
                <div className="order-1 row-span-2 flex flex-col gap-[24px]
                                md:gap-[92px]
                                xl:gap-[148px]">
                    <h1 className="max-w-[280px] 
                           text-[40px] leading-[56px] tracking-[-2px]
                           md:leading-snug md:text-[67px] md:tracking-[-3px]
                           xl:text-[98px] xl:tracking-[-4px] 
                           font-thin uppercase">
                        <span className="font-medium">Uncoverp</span> Carpathian’s Secrets
                    </h1>
                    <p className=" w-[157px] text-[10px] leading-[16px] font-extralight
                                   md:w-[314px] md:text-[14px] md:tracking-[1.2px]
                                   xl:w-[646px] md:text-[16px] xl:leading-[24px] xl:tracking-[1.4px] ">
                        Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
                    </p>
                </div>  
                <h2 className="order-first justify-self-end uppercase font-thin
                               flex-col leading-none w-[118px] tracking-[2px] text-[37px] 
                               md:justify-self-end md:order-2 md:w-[230px] md:text-[67px] md:tracking-[8.7px] 
                               xl:w-[305px] xl:text-[98px]  ">
                    <span className="font-medium">7</span>days
                    <span className="block tracking-[9px] text-[12px] 
                                     md:tracking-[26px] md:text-[14px]
                                     xl:tracking-[37px] xl:text-[16px]">
                                    journey
                    </span>
                </h2>      
                <div className="order-3  max-w-[280px] 
                                md:justify-self-end md:max-w-[230px]
                                xl:max-w-[294px]">
                    <p className="text-[14px] mb-[24px] leading-[20px] text-justify font-extralight 
                                  md:text-[16px] md:mb-[28px]
                                  xl:text-[18px]  xl:leading-[24px] ">
                        We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!
                    </p>
                    <button type="button" className="relative">
                        <a href="#" className="px-[92px] py-[18px] md:px-[68px] xl:py-[16px] xl:px-[64px] text-[18px] xl:text-[32px] leading-[50px] xl:leading-[72px] font-bold uppercase">join now</a>
                        <BorderCorner/>
                    </button>
                </div>
            </div>    
        </section>
    </Container>
);
export default Hero;