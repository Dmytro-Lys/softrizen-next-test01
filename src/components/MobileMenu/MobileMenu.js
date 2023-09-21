import PropTypes from "prop-types"
import NavList from "../NavList"
import css from "./MobileMenu.module.css"



const MobileMenu = ({ refMobMenu, onClick, onKeyDown }) => {
    return (
        <div tabIndex={"-1"} ref={refMobMenu} className={`fixed left-0 top-0 w-screen h-screen  z-20 ${css.MenuOverlay}`} onClick={onClick} onKeyDown={onKeyDown} >
            <button type="button" onClick={onClick} className="absolute right-[20px] top-[43px]">Close</button> 
            <div className="flex justify-center items-center w-full h-full">
                <NavList flexProp={"flex-col items-center"} />
            </div>    
        </div>
    )
}

MobileMenu.propTypes = {
    refMobMenu: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func.isRequired
}

export default MobileMenu;