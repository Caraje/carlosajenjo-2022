import Image from 'next/image'
import { useState } from 'react'
import CardArticle from '../../components/blogComponents/CardArticle'
import MainLayout from '../../components/layout/MainLayout'
import ContactModal from '../../components/sections/ContactModal'
import { getAllFilesMetadata } from '../../lib/mdx'
import { SEO } from '../../utils/seo'

const BlogIndex = ({ posts, toggleTheme, theme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => {
    setIsModalOpen(!isModalOpen)
  }
  return (
    <MainLayout
      title={SEO.title}
      url={SEO.url}
      img={SEO.img}
      description={SEO.description}
      author={SEO.author}
      tags={SEO.tags}
      modal={openModal}
      toggleTheme={toggleTheme}
      theme={theme}
    >
      {/* MODAL CONTACTO*/}
      {isModalOpen && <ContactModal modal={openModal} />}
      <div className='blog container'>
        <h1 className='blog__title'>Blog</h1>
        <div className='blog__line'></div>
        <div className='blog__entries__group'>
          {posts.map((post) => (
            <CardArticle key={post.id} post={post} />
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata()
  return {
    props: { posts },
  }
}

export default BlogIndex
