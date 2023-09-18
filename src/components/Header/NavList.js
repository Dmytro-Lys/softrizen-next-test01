import PropTypes from "prop-types"
import NavItem from "./NavItem"
const navItems = ["about", "services", "career", "gallery", "contacts"]
const textHeader = "text-[14px] tracking-[1.4px]"
const textMenu = "text-[18px] tracking-[1.8px]"


const NavList = ({flexProp = ""}) => (
    <ul className={`flex ${flexProp} gap-[48px] md:gap-[24px] xl:gap-[56px]`}>
        {navItems.map((item, index) => { return <NavItem key={index} dataItem={item} textProps={flexProp ? textMenu : textHeader} /> })}
    </ul>
)

NavList.propTypes = {
    flexProp: PropTypes.string
}

export default NavList