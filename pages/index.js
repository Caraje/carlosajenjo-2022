import MainLayout from '../components/layout/MainLayout'
import MainHome from '../components/sections/MainHome'
import Quote from '../components/sections/Quote'
import Portfolio from '../components/sections/Portfolio'
import AboutMe from '../components/sections/AboutMe'
import ContactModal from '../components/sections/ContactModal'
import { useState } from 'react'
import { SEO } from '../utils/seo'


export default function Home({ toggleTheme, theme }) {
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
      {/* Seccion principal */}
      <section>
        <MainHome modal={openModal} />
      </section>
      {/* Seccion de cita */}
      <section>
        <Quote />
      </section>
      {/* Seccion Portfolio */}
      <section id='portfolio'>
        <Portfolio />
      </section>
      {/* Seccion About Me */}
      <section id='aboutme'>
        <AboutMe />
      </section>
    </MainLayout>
  )
}
