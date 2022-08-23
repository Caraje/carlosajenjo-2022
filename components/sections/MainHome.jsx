import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { socialNetworks } from '../../utils/socialNetworks'
import SocialNetworks from '../utils/SocialNetworks'

const MainHome = ({ modal }) => {
  return (
    <div className='home'>
      <div className='home__img'>
        <Image
          src='/img_static/imgs/carlos.webp'
          alt='Carlos Ajenjo'
          // width={805}
          // height={900}
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='home__content'>
        <div className='home__info'>
          <h1>
            Carlos Ajenjo <br />
            <span>Front-end Developer</span>
          </h1>
          <div className='home__info__desc'>
            <p>
              Busco mi primera experiencia laboral en el campo de la
              programación. Con poco menos de 40 años tome la decisión de
              convertirme en desarrollador y he dedicado mis esfuerzos para
              lograrlo.
            </p>
            <p>
              Soy mas de buscar soluciones a problemas complicados que rendirme
              ante un reto cuando parece imposible o creo no estar preparado
              para ello, eso me ha permitido alcanzar con relativa facilidad
              puestos de responsabilidad en anteriores trabajos, y es una de las
              cosas que mas me atraen de la programación.
            </p>
          </div>
          <button onClick={modal} className='btn__home'>
            Contacto
          </button>
          <div className='home__socialNetwork'>
            <SocialNetworks />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHome
