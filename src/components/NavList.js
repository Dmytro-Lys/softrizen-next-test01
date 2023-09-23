import PropTypes from "prop-types"
import NavItem from "./NavItem"
// const navItems = ["about", "services", "career", "gallery", "contacts"]
const navItems = ["gallery", "contacts"]
const textHeader = "text-[14px] tracking-[1.4px]"
const textMenu = "text-[18px] tracking-[1.8px]"


const NavList = ({flexProp = "", onClick = null}) => (
    <ul className={`flex ${flexProp} gap-[48px] md:gap-[24px] xl:gap-[56px]`}>
        {navItems.map((item, index) => {
            return <NavItem
                key={index}
                dataItem={item}
                textProps={flexProp ? textMenu : textHeader}
                onClick={onClick}
            />
        })}
    </ul>
)

NavList.propTypes = {
    flexProp: PropTypes.string,
    onClick: PropTypes.func
}

export default NavList