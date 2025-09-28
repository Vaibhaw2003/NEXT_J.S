import React from 'react'

const Navbar = () => {
  return (
    
    <div className='navbar flex gap-4 item-center justify-between items-center p-4 bg-blue-800'>
        <img className='h-9 w-6'  src=" h:\PHOTO\PicsArt\PicsArt_02-01-01.13.40.jpg" alt="/logo" />
        <div className='links flex gap-4 text-white' >
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/blog">Blog</a>
            <a href="/services">Services</a>
        </div>
    </div>
  )
}

export default Navbar