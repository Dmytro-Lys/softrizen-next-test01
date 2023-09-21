import PropTypes from "prop-types"

const Picture = ({ fileNumber }) => {
    const imgPath = "../images/gallery/"
return (   
    <picture>
        <source
            media="(min-width: 1280px)"
            srcSet={`${imgPath}${fileNumber}_photo_tab@1x.webp 1x,
                     ${imgPath}${fileNumber}_photo_tab@2x.webp 2x,
                     ${imgPath}${fileNumber}_photo_tab@3x.webp 3x
            `}
            width="683"
            height="437"
            type="image/webp"
          />
          <source
            media="(min-width: 1280px)"
            srcSet={`${imgPath}${fileNumber}_photo_tab@1x.jpg 1x,
                     ${imgPath}${fileNumber}_photo_tab@2x.jpg 2x,
                     ${imgPath}${fileNumber}_photo_tab@3x.jpg 3x
            `}
            width="683"
            height="437"
            type="image/jpeg"
          />
        <source
            media="(min-width: 768px)"
            srcSet={`${imgPath}${fileNumber}_photo_tab@1x.webp 1x,
                     ${imgPath}${fileNumber}_photo_tab@2x.webp 2x,
                     ${imgPath}${fileNumber}_photo_tab@3x.webp 3x
            `}
            width="458"
            height="306"
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${imgPath}${fileNumber}_photo_tab@1x.jpg 1x,
                     ${imgPath}${fileNumber}_photo_tab@2x.jpg 2x,
                     ${imgPath}${fileNumber}_photo_tab@3x.jpg 3x
            `}
            width="458"
            height="306"
            type="image/jpeg"
          />
          <source
            media="(max-width: 767px)"
           srcSet={`${imgPath}${fileNumber}_photo_mob@1x.webp 1x,
                     ${imgPath}${fileNumber}_photo_mob@2x.webp 2x,
                     ${imgPath}${fileNumber}_photo_mob@3x.webp 3x
            `}
            width="280"
            height="187"
            type="image/webp"
          />
          <source
            media="(max-width: 767px)"
           srcSet={`${imgPath}${fileNumber}_photo_mob@1x.jpg 1x,
                     ${imgPath}${fileNumber}_photo_mob@2x.jpg 2x,
                     ${imgPath}${fileNumber}_photo_mob@3x.jpg 3x
            `}
             width="280"
            height="187"
            type="image/jpeg"
          />
          <img
           srcSet={`${imgPath}${fileNumber}_photo_mob@1x.jpg 1x,
                     ${imgPath}${fileNumber}_photo_mob@2x.jpg 2x,
                     ${imgPath}${fileNumber}_photo_mob@3x.jpg 3x
            `}
            src={`${imgPath}${fileNumber}_photo_mob@1x.jpg`}
            alt="mountains landscape"
            width="280"
            height="187"
            loading="lazy"
          />
        </picture>
)
}

Picture.propTypes = {
    fileNumber: PropTypes.string.isRequired
}

export default Picture;