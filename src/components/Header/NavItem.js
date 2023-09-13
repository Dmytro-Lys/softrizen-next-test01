const NavItem = ({dataItem, textProps}) => (
    <li className={`${textProps} capitalize font-normal`}>
        <a href={`#${dataItem}`}>{dataItem}</a>
    </li>
)
export default NavItem;