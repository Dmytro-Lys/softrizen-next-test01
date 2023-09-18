import Container from "../Container";
import css from "./Gallery.module.css"

const Gallery = () => {
 return (<section id="gallery" className={`${css["gallery-bg"]} py-[56px] w-full
                        md:pt-[64px] md:pb-[58px]
                        xl:py-[104px]`}>
        <Container>
            <h2 className="text-[40px] leading-[56px] tracking-[-1.6px] font-thin uppercase
                           md:text-[67px] md:tracking-[-2.68px] md:ml-[120px]
                           xl:text-[98px] xl:tracking-[-3.92px] xl:ml-0">Our <span className="font-medium">Gallery</span></h2>
        </Container>
    </section>
 )
}

export default Gallery;