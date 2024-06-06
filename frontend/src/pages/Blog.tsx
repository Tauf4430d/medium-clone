import React from 'react'
import { useBlog } from '../hooks'

function Blog() {
  const {loading, blog} = useBlogs()
  if(loading) {
    return <div>
      loading ...
    </div>
  }


  return (
    <div>
      
    </div>
  )
}

export default Blog