import React from 'react'
import SectionsMenu from '../utils/SectionsMenu'

const HiddenMenu = ({ closeMenu, modal }) => {
  return (
    <div className='hiddenMenu'>
      <SectionsMenu menuMobile={true} closeMenu={closeMenu} modal={modal} />
    </div>
  )
}

export default HiddenMenu
