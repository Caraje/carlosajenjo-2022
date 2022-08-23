import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionsMenu from '../utils/SectionsMenu'
import HiddenMenu from './HiddenMenu'

const Navbar = ({ modal }) => {
  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='navbar'>
      <div className='navbar__content'>
        <div className='navbar__img'>
          <Link href='/' passHref>
            <a>
              <Image
                src='/img_static/logos/Original_Horizontal.webp'
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
          <SectionsMenu modal={modal} />
          <button onClick={openMenu} className='btn__mobile'>
            <i className='fa-solid fa-bars'></i>
          </button>
        </nav>
      </div>

      {isOpen && <HiddenMenu closeMenu={openMenu} modal={modal} />}
    </div>
  )
}

export default Navbar
