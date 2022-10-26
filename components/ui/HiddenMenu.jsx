import React from 'react'
import SectionsMenu from '../utils/SectionsMenu'

const HiddenMenu = ({ closeMenu, modal, change, theme }) => {
  return (
    <div className='hiddenMenu'>
      <SectionsMenu
        menuMobile={true}
        closeMenu={closeMenu}
        modal={modal}
        change={change}
        theme={theme}
      />
    </div>
  )
}

export default HiddenMenu
