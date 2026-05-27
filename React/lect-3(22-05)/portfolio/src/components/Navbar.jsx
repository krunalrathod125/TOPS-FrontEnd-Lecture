import React from 'react'

function Navbar() {
    return (
        <div className='flex justify-between gap-4 bg-gray-200 p-4'>
            <div className="logo p-4 text-2xl">Krunal Rathod</div>

                <div className="rounded-xl bg-white flex justify-center w-120  items-center shadow-lg shadow-gray-400">
                    <ul className='flex gap-15 p-3'>
                        <li className=''>Home</li>
                        <li className=''>About</li>
                        <li className=''>Work</li>
                        <li className=''>Contact</li>
                    </ul>
                </div>    
                    <div className="py-5 px-5 rounded-full bg-white shadow-lg shadow-gray-400"><i class="fa-solid fa-moon "></i></div>
                
        </div>
    )
}

export default Navbar