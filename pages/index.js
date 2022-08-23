import MainLayout from '../components/layout/MainLayout'
import MainHome from '../components/sections/MainHome'
import Quote from '../components/sections/Quote'
import Portfolio from '../components/sections/Portfolio'
import AboutMe from '../components/sections/AboutMe'
import ContactModal from '../components/sections/ContactModal'
import { useState } from 'react'

const SEO = {
  title: 'Carlos Ajenjo: Front-end developer',
  description:
    'Pagina web de Carlos Ajenjo, desarrollador Front-end, portfolio para mostrar algunos de los proyectos en los que he tenido la ocasion de trabajar.',
  img: '/img_static/logos/Original_Horizontal.webp',
  url: 'https://www.carlosajenjo.es',
  author: '@caraje_',
  tags: 'front-end, front-end developer, react, next.js, javascript, node, css, junior, portfolio',
}
export default function Home() {
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
