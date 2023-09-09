import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav
        className="flex justify-around py-4 bg-[#1C1C1C]
        backdrop-blur-md shadow-md w-full
        fixed top-0 left-0 right-0 z-10"
      >
        {/* Logo Container */}
        <div className="flex items-center">
          {/* Logo */}
          <a className="cursor-pointer">
            <h3 className="text-2xl font-medium text-blue-500">
              <img
                className="h-10 object-cover"
                src="https://i.imgur.com/I4dsioZ.png"
                alt="Store Logo"
              />
            </h3>
          </a>
        </div>
        {/* Links Section */}
        <div className="items-center hidden space-x-8 lg:flex">
          <a
            className="flex text-[#000000] hover:text-blue-500
                cursor-pointer transition-colors duration-300 bg-[#E5CF5F] py-[6px] font-medium px-[10px]"
          >
            Partner With Us
          </a>
          <a
            className="flex text-[#fff] 
                cursor-pointer transition-colors duration-300
                 text-blue-600 tracking-wide"
          >
            Home
          </a>
          <a
            className="flex text-[#fff] hover:text-blue-500
                cursor-pointer transition-colors duration-300 tracking-wide"
          >
            Profile
          </a>
          <a
            className="flex text-[#fff] hover:text-blue-500
                cursor-pointer transition-colors duration-300 tracking-wide"
          >
            Events
          </a>
          <a
            className="flex text-[#fff] hover:text-blue-500
                cursor-pointer transition-colors duration-300 tracking-wide"
          >
            Services
          </a>
          <a
            className="flex text-[#fff] hover:text-blue-500
                cursor-pointer transition-colors duration-300 tracking-wide"
          >
            Clients
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar