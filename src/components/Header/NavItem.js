import PropTypes from "prop-types"

const NavItem = ({ dataItem, textProps }) => (
    <li className={`${textProps} capitalize font-normal`}>
        <a href={`#${dataItem}`}>{dataItem}</a>
    </li>
)

NavItem.propTypes = {
    dataItem: PropTypes.string.isRequired,
    textProps: PropTypes.string.isRequired
}

export default NavItem;