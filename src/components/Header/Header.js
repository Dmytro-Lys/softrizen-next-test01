import { useState, useRef, useEffect } from 'react';
import Image from 'next/image'
import NavList from './NavList'
import MobileMenu from './MobileMenu';
import Container from '../Container';


const Header = () => {
    const [isShowMobMenu, setIsShowMobMenu] = useState(false);
    
    const refMobMenu = useRef();

    const handleClick = () => setIsShowMobMenu(true)
  
    const closeMobMenu = () => setIsShowMobMenu(false)

    const handleKeyDown = e => {
        if (e.key === "Escape") closeMobMenu()
    }
        
     useEffect(() => {
    if (isShowMobMenu) refMobMenu.current.focus()
  }, [isShowMobMenu]);    
  
return(
    <header className={`absolute left-0 top-0 py-[36px]  w-full z-10 xl:py-[24px]`}>
        <Container>
        <div className='flex items-center justify-between'>
            <a className="block" href="#">
                <Image
                    src="../images/Logo.svg"
                    alt="Logo"
                    width={61}
                    height={36}
                    priority
                />
            </a>
            <nav className='hidden md:block'>
                <NavList />
            </nav>
            <button type="button" className='block md:hidden' onClick={handleClick}>Menu</button>
        </div>
            {isShowMobMenu && <MobileMenu refMobMenu={refMobMenu} onClick={closeMobMenu} onKeyDown={handleKeyDown} />}
        </Container>    
    </header>
)
};

export default Header;