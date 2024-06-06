import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../config";

export interface blog {
    content: string,
    title: string,
    id: string,
    author: {
        name: string,
        email: string
    }
}

export function useBlog({ id }: { id: string }) {
    const [loading, setLoading] = useState(true)
    const [blog, setBlog] = useState<blog>()

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/:id`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setBlog(response.data.blog)
                console.log(response.data);

                setLoading(false)
            })
    }, [])
    return {
        loading,
        blog
    }
}

function useBlogs() {
    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState<blog>()

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then(response => {
                setBlogs(response.data.blogs)
                console.log(response.data);

                setLoading(false)
            })
    }, [])

    return {
        loading,
        blogs
    }
}

export default useBlogs