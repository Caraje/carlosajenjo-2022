import React, { useState } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import ContactModal from '../../components/sections/ContactModal'
import PortfolioCard from '../../components/ui/PortfolioCard'
import { db } from '../../database/infoBase'

const SEO = {
  title: 'Carlos Ajenjo: Front-end developer',
  description:
    'Pagina web de Carlos Ajenjo, desarrollador Front-end, portfolio para mostrar algunos de los proyectos en los que he tenido la ocasion de trabajar.',
  img: 'https://res.cloudinary.com/caraje/image/upload/v1661263182/cibt2p9bztdn4odwwk5j.webp',
  url: 'https://www.carlosajenjo.es',
  author: '@caraje_',
  tags: 'front-end, front-end developer, react, next.js, javascript, node, css, junior, portfolio',
}

const index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => {
    setIsModalOpen(!isModalOpen)
  }
  return (
    <MainLayout
      title={SEO.title}
      description={SEO.description}
      url={SEO.url}
      img={SEO.img}
      author={SEO.author}
      tags={SEO.tags}
      modal={openModal}
    >
      {/* MODAL CONTACTO*/}
      {isModalOpen && <ContactModal modal={openModal} />}
      <div className='voidContent'></div>

      <div className='portfolio__content'>
        <div className='title__title'>
          <h2>Portfolio</h2>
          <div className='title__void'></div>
        </div>
        {db.portfolio.map((work) => (
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
      </div>
    </MainLayout>
  )
}

export default index
