import css from "./Container.module.css"
import PropTypes from "prop-types"

const Container = ({ classBg, children }) => (
    <div className={`${css[classBg]} px-[20px] md:px-[32px] xl:px-[104px]`}>
      {children}
    </div>
);

Container.propTypes = {
  classBg: PropTypes.string.isRequired
}

export default Container;