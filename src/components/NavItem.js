import { Link } from "react-scroll";
import PropTypes from "prop-types"


const NavItem = ({ dataItem, textProps, onClick = null }) => (
    <li className={`${textProps} capitalize font-normal `}>
        <Link className="cursor-pointer transition duration-300 ease-in-out border-b-[1px] border-transparent hover:border-current"
            to={dataItem} spy={true} smooth={true} duration={500} onClick={onClick}>{dataItem}</Link>
        
        {/* <a className="transition duration-300 ease-in-out border-b-[1px] border-transparent hover:border-current" href={`#${dataItem}`}>{dataItem}</a> */}
    </li>
)

NavItem.propTypes = {
    dataItem: PropTypes.string.isRequired,
    textProps: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default NavItem;