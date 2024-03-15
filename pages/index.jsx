import { Fragment } from 'react'
import Hero from '../components/home-page/hero'
import FeaturedPost from '../components/home-page/featured-post'

const DUMMY_POSTS = [
  {
    title: 'Getting Started with Next.js',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS if React framework for production - it makes building fullstack application',
    date: '2024-03-15',
    slug: 'getting-started-nextjs'
  }
]

function HomePage () {
  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={DUMMY_POSTS} />
    </Fragment>
  )
}

export default HomePage