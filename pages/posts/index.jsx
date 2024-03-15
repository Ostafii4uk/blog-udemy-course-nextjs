import AllPosts from '../../components/posts/all-posts'

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

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />
}

export default AllPostsPage
