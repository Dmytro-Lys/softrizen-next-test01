import { Navigation,  EffectCoverflow} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { nanoid } from 'nanoid';
import { useRef } from 'react';
import SwipeButton from './SwipeButton';
import Container from "../Container"; 8
import Picture from "./Picture";
import css from "./Gallery.module.css"


const Gallery = () => {
    const photoSwiper = ["second", "third", "first", "second", "third", "first"]   
    const photo = ["first", "second", "third"]   
    // console.log({ Screen })
 return (<section id="gallery" className={`${css["gallery-bg"]} py-[56px] w-full
                        md:pt-[64px] md:pb-[58px]
                        xl:py-[104px]`}>
        <Container>
            <h2 className="text-[40px] leading-[56px] tracking-[-1.6px] font-thin uppercase
                           md:text-[67px] md:tracking-[-2.68px] md:ml-[120px] md:leading-normal
                           xl:text-[98px] xl:tracking-[-3.92px] xl:ml-0">Our <span className="font-medium">Gallery</span></h2>
         <div className="flex gap-[24px] flex-col items-center mt-[24px] md:hidden">
             {photo.map((item, index) => {return <Picture key={index} fileNumber={item}/>})}
         </div>
         <div className='hidden md:block md:mt-[66px]  md:mb-[57px] xl:mt-[15px] xl:mb-[103px]'>
        
             <Swiper 
                 effect={'coverflow'}
                 loop={true}
                 centeredSlides={true}
                 //  spaceBetween={2}
                 slidesPerView={2}
                 coverflowEffect={{
                     rotate: 0,
                     stretch: 0,
                     depth: 400,
                     modifier: 1,
                     scale: 0.6,
                     slideShadows: true,
                 }}
                 modules={[Navigation, EffectCoverflow]}
                 navigation={{
                     enabled: true,
                     nextEl: '.swiper-next',
                     prevEl: '.swiper-back',
                 }}
             >
                 {photoSwiper.map((item, index) => {
                     return (
                         <SwiperSlide key={nanoid()} className='w-[280px]'>
                             <Picture key={nanoid()} fileNumber={item} />
                               
                         </SwiperSlide>
                     
                     )
                 })}
             
                 <SwipeButton text={"back"} position={"left-[75px] xl:left-[170px]"} classSwipe={"swiper-back"} />
                 <SwipeButton text={"next"} position={"right-[85px] xl:right-[170px]"} classSwipe={"swiper-next"} />
             </Swiper>
             </div>
        </Container>
    </section>
 )
}

export default Gallery;