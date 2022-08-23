import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { tecnologies } from '../../utils/tecnologies'

const PortfolioCard = ({
  title,
  img,
  description,
  techList,
  urlGit,
  urlDemo,
}) => {
  return (
    <div className='portfolio__card'>
      <div className='portfolio__card__img'>
        <Image
          src={`https://res.cloudinary.com/caraje/image/upload/v1661251659${img}`}
          alt={`${title}`}
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className='portfolio__card__info'>
        <h3>{title}</h3>
        <div className='portfolio__card__info__paragraph'>
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className='portfolio__card__tec'>
          <h4>Tecnologias usadas</h4>

          <div className='portfolio__card__tec__group'>
            {techList.map((tec, id) => (
              <div className='portfolio__tec' key={tec}>
                <Image
                  src={`https://res.cloudinary.com/caraje/image/upload/v1661258060/${tec}.png`}
                  alt={tec}
                  width={351}
                  height={351}
                  layout='responsive'
                  objectFit='cover'
                />
              </div>
            ))}
          </div>

          <div className='portfolio__card__btn__group'>
            <Link href={urlGit} passHref>
              <a className='btn__card' target='blank_'>
                <i className='fa-brands fa-github-alt'></i> Github
              </a>
            </Link>
            <Link href={urlDemo} passHref>
              <a className='btn__card' target='blank_'>
                <i className='fa-solid fa-desktop'></i> Demo
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard
