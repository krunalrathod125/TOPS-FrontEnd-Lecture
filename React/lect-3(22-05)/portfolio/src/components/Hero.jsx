import React from 'react'

function Hero() {
    return (
        <div className='flex justify-between'>
            <div className="left mt-35 ml-10 flex flex-col gap-5 ">
                <h1 className='text-5xl text-blue-900 '>Hey there, I'm Krunal!</h1>
                <h2 className='text-3xl text-gray-600'>A Front-End Developer and Designer </h2>
                <p className='text-1xl w-200'>Computer Science and Engineering graduate from Gujarat Technological University, currently training in Frontend Development at TOPS Technologies, skilled in HTML, CSS, JavaScript, and React.js.</p>
                <div><a href="../public/My_Resume.pdf" download><button className='border-1 rounded-full p-3 text-xl hover:bg-purple-500 hover:text-white'>Download CV <i class="fa-solid fa-download"></i></button></a></div>
            </div>
            <div className="right mt-18 mr-10 ">
                <img src="../src/assets/MyProfile.png" alt="Profile img " className='w-94 rounded-full mr-5  ' />
            </div>
        </div>
    )
}

export default Hero