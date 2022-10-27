import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionsMenu from '../utils/SectionsMenu'
import HiddenMenu from './HiddenMenu'
import ButtonSwitchMode from './ButtonSwitchMode'

const Navbar = ({ modal, toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () => {
    setIsOpen(!isOpen)
  }
  const logo = theme
    ? 'https://res.cloudinary.com/caraje/image/upload/v1666802943/lpf9gbrc0jajyvgrawms.webp'
    : 'https://res.cloudinary.com/caraje/image/upload/v1666802990/mg9tzjfdecqnrgl0plgk.webp'

  return (
    <div className='navbar'>
      <div className='navbar__content'>
        <div className='navbar__img'>
          <Link href='/' passHref>
            <a>
              <Image
                src={logo}
                alt='Logo de Carlos Ajenjo'
                width={750}
                height={215}
                layout='responsive'
                objectFit='cover'
              />
            </a>
          </Link>
        </div>
        <nav>
          <SectionsMenu modal={modal} change={toggleTheme} theme={theme} />

          <button onClick={openMenu} className='btn__mobile'>
            <i className='fa-solid fa-bars'></i>
          </button>
        </nav>
      </div>

      {isOpen && (
        <HiddenMenu
          closeMenu={openMenu}
          modal={modal}
          change={toggleTheme}
          theme={theme}
        />
      )}
    </div>
  )
}

export default Navbar
