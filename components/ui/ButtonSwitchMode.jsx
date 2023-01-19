import React from 'react'
import IconThemeDark from '../icons/IconThemeDark'
import IconThemeLight from '../icons/IconThemeLight'

const ButtonSwitchMode = ({ change, theme }) => {
  return (
    <button className='btn_switch' onClick={change}>
      {!theme ? (
        <IconThemeDark color='#f75762' />
      ) : (
        <IconThemeLight color='#f75762' />
      )}
    </button>
  )
}

export default ButtonSwitchMode
