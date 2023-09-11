import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const Header = () => (
    <header className={`${inter} absolute z-10`}>
        <div className='flex justify-between'>
            {/* Logo */}
            <a className="block" href="">
             Logo
            </a>
            <nav>
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
            <button type="button">Menu</button>
      </div>
    </header>
);

export default Header;