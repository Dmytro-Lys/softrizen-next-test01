import PropTypes from "prop-types"

const NavItem = ({ dataItem, textProps }) => (
    <li className={`${textProps} capitalize font-normal `}>
        <a className ="transition duration-300 ease-in-out border-b-[1px] border-transparent hover:border-current" href={`#${dataItem}`}>{dataItem}</a>
    </li>
)

NavItem.propTypes = {
    dataItem: PropTypes.string.isRequired,
    textProps: PropTypes.string.isRequired
}

export default NavItem;