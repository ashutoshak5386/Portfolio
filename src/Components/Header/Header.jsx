import React from 'react'
import About from '../../Pages/About'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <header class="position: sticky top-0 text-gray-600 body-font z-10 ">
            <div class="container bg-white w-full  flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav class=" flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
                    
                    <Link to={'/about'} class="mr-5 hover:text-blue-500 transition-all duration-300 ease-in-out hover:scale-125 font-semibold">About</Link>
                    <Link to={'/projects'} class="mr-5 hover:text-blue-500 transition-all duration-300 ease-in-out hover:scale-125 font-semibold">Projects</Link>
                    <Link to={'/certifications'} class="mr-5 hover:text-blue-500 transition-all duration-300 ease-in-out hover:scale-125 font-semibold">Certifications</Link>
                    <Link to={'/connect'} class="mr-5 hover:text-blue-500 transition-all duration-300 ease-in-out hover:scale-125 font-semibold">Connect</Link>
                    <Link to={'/github'} class="mr-5 hover:text-blue-500 transition-all duration-300 ease-in-out hover:scale-125 font-semibold">Github</Link>
                    <a href='https://drive.google.com/file/d/1DL1UuMlaBRLwkrqBLr6JIdqSdOhqnWE1/view?usp=sharing' target="_blank" class="mr-5 hover:text-blue-500 transition-all duration-300 ease-in-out hover:scale-125 font-semibold">Resume</a>


                </nav>
                <a href="#" className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA32CUwtf5_ffxrtR8YVhcq1XCx8JHQhnlRw&usqp=CAU" alt="Your Image" className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" />
                    <Link to={'/'}><span className="ml-3 text-xl">Ashutosh Kumar</span></Link>
                </a>
                <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
                    <div class="group relative">
                        <a href="https://github.com/ashutoshak5386" target="_blank" rel="noopener noreferrer" class="inline-flex items-center">
                            <button>
                                <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" class="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </button>
                            <span class="absolute -top-14 left-[50%] -translate-x-[50%] 
                    z-20 origin-left scale-0 px-3 rounded-lg border 
                    border-gray-300 bg-white py-2 text-sm font-bold
                    shadow-md transition-all duration-300 ease-in-out 
                    group-hover:scale-100">GitHub</span>
                        </a>
                    </div>
                </div>

            </div>
        </header>

    )
}

export default Header
