import React, { useState } from 'react'
import MainLayout from '../../components/layout/MainLayout'
import ContactModal from '../../components/sections/ContactModal'
import PortfolioCard from '../../components/ui/PortfolioCard'
import { db } from '../../database/infoBase'
import { SEO } from '../../utils/seo'

const index = ({ toggleTheme, theme }) => {
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
      toggleTheme={toggleTheme}
      theme={theme}
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
