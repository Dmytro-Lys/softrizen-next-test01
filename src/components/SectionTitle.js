import PropTypes from "prop-types"

const SectionTitle = ({ firstText, secondText, addMargin = '' }) => {
    return (
        <h2 className={`text-[40px] leading-[56px] tracking-[-1.6px] font-thin uppercase
                           md:text-[67px] md:tracking-[-2.68px] md:leading-normal
                           xl:text-[98px] xl:tracking-[-3.92px] ${addMargin}`}>{`${firstText} `}
            <span className="font-medium">{secondText}</span>
        </h2>
    )
}

export default SectionTitle;

SectionTitle.propTypes = {
    firstText: PropTypes.string.isRequired,
    secondText: PropTypes.string.isRequired,
    addMargin: PropTypes.string
}