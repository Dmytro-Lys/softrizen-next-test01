// import { Inter } from 'next/font/google'
import Image from 'next/image'
// const inter = Inter({ subsets: ['latin'] })

const Header = () => (
    <header className={`absolute left-0 top-0 px-[20px] py-[36px] md:px-[32px] xl:px-[104px] xl:py-[24px] w-full z-10 `}>
        <div className='flex items-center justify-between'>
            {/* Logo */}
            <a className="block" href="">
             <Image
              src="./images/logo.svg"
              alt="Logo"
              width={61}
              height={33}
              priority
            />
            </a>
            <nav className='hidden md:block'>
                <ul className='flex gap-5'>
                    <li>
                        <a href="#about">About</a>
                    </li>
                     <li>
                        <a href="#">Services</a>
                    </li>
                     <li>
                        <a href="#">Career</a>
                    </li>
                     <li>
                        <a href="#">Gallery</a>
                    </li>
                     <li>
                        <a href="#">Contacts</a>
                    </li>
                </ul>
            </nav>
            <button type="button" className='block md:hidden'>Menu</button>
      </div>
    </header>
);

export default Header;