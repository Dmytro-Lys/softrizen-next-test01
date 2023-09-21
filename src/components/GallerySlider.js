import { Navigation,  EffectCoverflow} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { nanoid } from 'nanoid';
import SwipeButton from './SwipeButton';
import Picture from "./Picture";

const GallerySlider = () => {
    const photoSwiper = ["second", "third", "first", "second", "third", "first"] 
    return (
         <div className='hidden md:block md:mt-[66px]  md:mb-[57px] xl:mt-[15px] xl:mb-[103px]'>
        
             <Swiper 
                 effect={'coverflow'}
                 loop={true}
                 centeredSlides={true}
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
    )
}

export default GallerySlider;