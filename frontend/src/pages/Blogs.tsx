import React from 'react'
import BlogCard from '../components/BlogCard'
import AppBar from '../components/AppBar'
import useBlogs from '../hooks'



function Blogs() {
    const { loading, blogs } = useBlogs()

    if (loading) {
        return <div>
            loading ...
        </div>
    }
    //add skeleton, instead of the above 

    return (
        <div>
            <AppBar />
            <div className="flex justify-center">
                <div className=''>
                    {blogs.map((blog) => {
                        return <BlogCard title={blog.title}
                            id = {blog.id}
                            content={blog.content}
                            publishedDate='Dec 3, 2023'
                            authorName={blog.author.name || 'NO name'}/>
                    })}
                </div>
            </div>
        </div>
    )
}


export default Blogs