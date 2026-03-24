import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import PostList from './components/post-list/PostList'
import Profile from './components/profile/Profile'

const POSTS_STORAGE_KEY = 'blog_posts_v1'

function App() {
  const [posts, setPosts] = useState(() => {
    try {
      const savedPosts = localStorage.getItem(POSTS_STORAGE_KEY)

      if (savedPosts) {
        return JSON.parse(savedPosts)
      }
    } catch (error) {
      console.error('Failed to read posts from localStorage:', error)
    }

    return [
      {
        id: crypto.randomUUID(),
        text: 'Welcome to your blog. Click this post to edit or delete it.',
        createdAt: new Date().toISOString(),
      },
    ]
  })

  useEffect(() => {
    localStorage.setItem(POSTS_STORAGE_KEY, JSON.stringify(posts))
  }, [posts])

  const handleAddPost = (text) => {
    const nextPost = {
      id: crypto.randomUUID(),
      text,
      createdAt: new Date().toISOString(),
    }

    setPosts((prevPosts) => [nextPost, ...prevPosts])
  }

  const handleUpdatePost = (id, text) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === id ? { ...post, text } : post)),
    )
  }

  const handleDeletePost = (id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id))
  }

  const latestPost = posts[0] ?? null

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home posts={posts} latestPost={latestPost} />} />
          <Route
            path='/posts'
            element={
              <PostList
                posts={posts}
                onAddPost={handleAddPost}
                onUpdatePost={handleUpdatePost}
                onDeletePost={handleDeletePost}
              />
            }
          />
          <Route path='/profile' element={<Profile posts={posts} latestPost={latestPost} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
