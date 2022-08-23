import Link from 'next/link'
import React from 'react'
import { db } from '../../database/infoBase'
import PortfolioCard from '../ui/PortfolioCard'

const Portfolio = () => {
  return (
    <div className='portfolio__content'>
      <div className='title__title'>
        <h2>Portfolio</h2>
        <div className='title__void'></div>
      </div>

      {db.portfolio
        .filter((work) => work.spotlight === true)
        .map((work) => (
          <PortfolioCard
            key={work.id}
            title={work.title}
            img={work.img}
            description={work.description}
            techList={work.techList}
            urlGit={work.urlGit}
            urlDemo={work.urlDemo}
          />
        ))}
      <Link href='/portfolio' passHref>
        <a className='portfolio__btn'>Ver más</a>
      </Link>
    </div>
  )
}

export default Portfolio
