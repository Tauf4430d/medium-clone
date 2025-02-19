import { Avatar } from './BlogCard'

function AppBar() {
  return (
    <div className='border-b flex justify-between px-10 py-4'>
        <div className='flex flex-col justify-center'>
            Medium
        </div>
        <div>
            <Avatar name='Taufiq' size="big" />
        </div>
    </div>
  )
}

export default AppBar