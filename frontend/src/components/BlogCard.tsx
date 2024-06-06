import { Link } from "react-router-dom";

interface BlogCardProps {
    id: string;
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}
function BlogCard({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) {
    return (
        <Link to={`/blog/${id}`}>
        <div className="p-4 border-b border-slate-100 pb-4 w-screen max-w-screen-md">
            <div className="flex">
                <Avatar name={authorName} />
                <div className="flex flex-col justify-center font-extralight pl-2 text-sm">
                    {authorName}
                </div>
                <div className="flex flex-col justify-center pl-2">
                    <Circle />
                </div>
                <div className="flex flex-col justify-center pl-2 font-thin text-slate-700 text-sm">
                    {publishedDate}
                </div>
            </div>
            <div className="font-semibold text-xl pt-2">
                {title}
            </div>
            <div className="text-md font-extralight ">
                {content.slice(0, 100) + "..."}
            </div>
            <div className="text-slate-500 text-sm font-thin pt-2">
                {`${Math.ceil(content.length / 100)} minutes read`}
            </div>
        </div>
        </Link>
    )
}

function Circle() {
    return <div className="w-0.5 h-0.5 bg-slate-700 rounded-full">
    </div>
}

export function Avatar({ name, size = 'small' }: { name: string, size?: 'small' | 'big' }) {
    return <div className={`relative inline-flex items-center justify-center ${size === 'small' ? 'w-6 h-6' : 'w-10 h-10'} overflow-hidden rounded-full bg-gray-600`}>
        <span className={`${size === 'small' ? 'text-xs' : 'text-xl'} text-gray-600 dark:text-gray-300`}>{name[0]}</span>
    </div>

}

export default BlogCard