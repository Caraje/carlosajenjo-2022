import Link from 'next/link'
import React from 'react'
import { sections } from '../../utils/sections'
import ButtonSwitchMode from '../ui/ButtonSwitchMode'

const SectionsMenu = ({ menuMobile, closeMenu, modal, change, theme }) => {
  const openModal = () => {
    modal()
    // closeMenu()
  }

  return (
    <div
      className={menuMobile ? 'navbar-mobile__sections' : 'navbar__sections'}
    >
      {sections.map((secc) => (
        <Link key={secc.title} href={secc.url} passHref>
          <a onClick={closeMenu} className={'navbar__btn'}>
            {secc.title}
          </a>
        </Link>
      ))}
      <button onClick={openModal} className={'navbar__button'}>
        Contacto
      </button>
      <ButtonSwitchMode change={change} theme={theme} />
    </div>
  )
}

export default SectionsMenu
