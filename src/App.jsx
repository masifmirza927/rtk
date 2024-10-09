import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useGetAllPostsQuery } from "./services/api/"
function App() {
  const { data: posts, error, isLoading } = useGetAllPostsQuery();
  return (
    <>
      {
        isLoading && <p>Is loading.....</p>
      }
      <div>
        <h1>Posts</h1>
        <ul>
          {posts && posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
