import Link from 'next/link'
import React from 'react'
import { socialNetworks } from '../../utils/socialNetworks'

const SocialNetworks = () => {
  return (
    <>
      {socialNetworks.map((socialNetwork) => (
        <Link href={socialNetwork.url} key={socialNetwork.name} passHref>
          <a className='social__icon' target='blank_' rel='noreferrer'>
            {socialNetwork.icon}
          </a>
        </Link>
      ))}
    </>
  )
}

export default SocialNetworks
