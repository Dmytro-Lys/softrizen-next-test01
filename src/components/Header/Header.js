import Image from 'next/image'
import NavList from './NavList'
import { MobileMenu } from './MobileMenu';
import { useState, useRef, useEffect } from 'react';

const Header = () => {
    const [isShowMobMenu, setIsShowMobMenu] = useState(false);
    
    const refMobMenu = useRef();

    const handleClick = () => setIsShowMobMenu(true)
  

    const closeMobMenu = () => setIsShowMobMenu(false)
    
    const mobMenuClick = (e) => {
    if (!e.target.src)  closeMobMenu()
  }

    const handleKeyDown = e => {
        if (e.key === "Escape") closeMobMenu()
    }
        
     useEffect(() => {
    if (isShowMobMenu) refMobMenu.current.focus()
  }, [isShowMobMenu]);    
  
return(
    <header className={`absolute left-0 top-0 px-[20px] py-[36px] md:px-[32px] xl:px-[104px] xl:py-[24px] w-full z-10 `}>
        <div className='flex items-center justify-between'>
            <a className="block" href="#">
                <Image
                    src="../images/Logo.svg"
                    alt="Logo"
                    width={61}
                    height={36}
                />
            </a>
            <nav className='hidden md:block'>
                <NavList />
            </nav>
            <button type="button" className='block md:hidden' onClick={handleClick}>Menu</button>
        </div>
         {isShowMobMenu && <MobileMenu refMobMenu={refMobMenu} onClick={mobMenuClick} onKeyDown={handleKeyDown} />}
    </header>)
};

export default Header;