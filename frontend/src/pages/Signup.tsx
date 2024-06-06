import React from 'react'
import Quote from '../components/Quote'
import Auth from '../components/Auth'

function Signup() {
  return (
    <div className='grid grid-col-1 '>
      <div>
        <Auth type='signup'/>
      </div>
      <div>
        <Quote />
      </div>
    </div>
  )
}

export default Signup