import React from 'react'
import Head from 'next/head'
import Navbar from '../ui/Navbar'

const MainLayout = ({
  children,
  title,
  description,
  url,
  img,
  author,
  tags,
  modal,
}) => {
  return (
    <>
      <Head>
        <link rel='icon' href='/img_static/favicon.ico' />
        <meta name='keywords' content='HTML, CSS, JavaScript' />
        <title>{title}</title>
        <meta name='description' content={description} />

        {/* Facebook Meta Tags */}
        <meta property='og:url' content={url} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={img} />

        {/* Twitter Meta Tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='www.carlosajenjo.es' />
        <meta name='twitter:site' content='@caraje_' />
        <meta name='twitter:creator' content={author} />
        <meta property='twitter:url' content={url} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={img} />
      </Head>

      <header>
        <Navbar modal={modal} />
      </header>

      <main>{children}</main>
    </>
  )
}

export default MainLayout
