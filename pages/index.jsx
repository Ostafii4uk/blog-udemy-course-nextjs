import { Fragment } from 'react'
import Hero from '../components/home-page/hero'
import FeaturedPost from '../components/home-page/featured-post'
import { getFeaturedPosts } from '../lib/posts-util'

function HomePage({ posts }) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={posts} />
    </Fragment>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts
    }
  }
}

export default HomePage