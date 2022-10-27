import React from 'react'
import IconThemeDark from '../icons/IconThemeDark'
import IconThemeLight from '../icons/IconThemeLight'

const ButtonSwitchMode = ({ change, theme }) => {
  return (
    <button className='btn_switch' onClick={change}>
      {!theme ? (
        <IconThemeDark color='#2b2d42' />
      ) : (
        <IconThemeLight color='#f6f6f6' />
      )}
    </button>
  )
}

export default ButtonSwitchMode
