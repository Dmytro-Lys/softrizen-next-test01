import BorderCorner from "./BorderCorner";
import css from "./Hero.module.css"
const Hero = () => (
    <section className={`${css.hero} pb-[56px]`}>
        <div className="w-[280px] md:w-[426px]  xl:w-[646px]">
        <h1 className="text-[40px] leading-[56px] tracking-[-2px]
           md:text-[67px] md:leading-normal md:tracking-[-3px] 
           xl:text-[98px] xl:tracking-[-4px]
           font-thin uppercase">
              <span className="font-medium">Uncoverp</span> Carpathian’s Secrets
        </h1>
        <p className="w-[157px] text-[10px] leading-[16px] 
         md:w-[262px] md:text-[14px] md:tracking-[1.3px]
         xl:w-[646px] md:text-[16px] xl:leading-[24px] xl:tracking-[1.4px]
         font-extralight">
                Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
            </p>
        </div>
        <h2 className="flex-col leading-none w-[118px] tracking-[2px] text-[37px] md:w-[230px] md:text-[67px] md:tracking-[8.7px] 
            xl:w-[305px] xl:text-[98px]  font-thin uppercase">
            <span className="font-medium">7</span>days <span className="block tracking-[9px] text-[12px] md:tracking-[26px] md:text-[14px] xl:tracking-[37px] xl:text-[16px] font-light">journey</span>
        </h2>
        
        <div className="w-[280px] md:w-[230px] xl:w-[294px]">
            <p className="text-[14px] md:text-[16px] xl:text-[18px] leading-[20px] xl:leading-[24px] text-justify font-extralight">
                We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!
            </p>
            <button type="button" className="relative  ">
                <a href="#" className="px-[64px] py-[18px] xl:py-[16px] xl:px-[64px] text-[18px] xl:text-[32px] leading-[50px] xl:leading-[72px] font-bold uppercase">join now</a>
                <BorderCorner/>
            </button>
            {/*8-42  8 -35 11 - 44 */}
        </div>
    </section>
);
export default Hero;