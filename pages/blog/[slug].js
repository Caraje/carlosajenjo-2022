import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'
import { useState } from 'react'
import MDXComponents from '../../components/componentsArticles/MDXComponents'
import MainLayout from '../../components/layout/MainLayout'
import ContactModal from '../../components/sections/ContactModal'
import { getAllFilesMetadata, getFileBySlug, getFiles } from '../../lib/mdx'

const Post = ({ source, frontmatter, posts }) => {
  const { title, url, article, img, twitter, tags } = frontmatter
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => {
    setIsModalOpen(!isModalOpen)
  }
  return (
    <MainLayout
      title={title}
      url={`http://localhost:3000/series/${url}`}
      img={`https://res.cloudinary.com/www-dados-pixeles-com/image/upload/${img}`}
      description={article}
      author={twitter}
      tags={tags}
      modal={openModal}
    >
      {isModalOpen && <ContactModal modal={openModal} />}
      <div className='article container'>
        <header className='article__header'>
          <picture className='article__img'>
            <Image
              src={img}
              alt='Carlos Ajenjo'
              objectFit='cover'
              layout='fill'
            />
          </picture>
          <div className='article__void'></div>
          <h1 className='article__title'>{title}</h1>
        </header>
        <div className='article__text'>
          <MDXRemote {...source} components={MDXComponents} />
        </div>
      </div>
    </MainLayout>
  )
}

export const getStaticPaths = async () => {
  const posts = await getFiles()
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ''),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params
  const posts = await getAllFilesMetadata()
  const { source, content, frontmatter } = await getFileBySlug(slug)

  return {
    props: {
      source,
      frontmatter,
      content,
      posts,
    },
  }
}

export default Post
