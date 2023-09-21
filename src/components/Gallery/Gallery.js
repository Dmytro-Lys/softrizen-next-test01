import SectionTitle from '../SectionTitle';
import Container from "../Container"; 
import PictureList from '../PictureList';
import GallerySlider from '../GallerySlider';
import css from "./Gallery.module.css"


const Gallery = () => {

 return (<section id="gallery" className={`${css["gallery-bg"]} py-[56px] w-full
                        md:pt-[64px] md:pb-[58px]
                        xl:py-[104px]`}>
        <Container>
          <SectionTitle firstText='Our' secondText='Gallery' addMargin='md:ml-[120px] xl:ml-0'/>  
          <PictureList/>
          <GallerySlider/>
        </Container>
    </section>
 )
}

export default Gallery;