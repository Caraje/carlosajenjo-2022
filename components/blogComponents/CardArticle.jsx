import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardArticle = ({ post }) => {
  const { title, img, url, date, tags, slug } = post

  return (
    <Link href={`/blog/${slug}`} passHref>
      <a className='cardEntry__link'>
        <div className='cardEntry'>
          <picture className='cardEntry__img'>
            <Image
              src={img}
              alt='Carlos Ajenjo'
              objectFit='cover'
              layout='responsive'
              width={400}
              height={250}
            />
          </picture>
          <div>
            <h2 className='cardEntry__title'>{title}</h2>
            <h3 className='cardEntry__date'>{date}</h3>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default CardArticle
