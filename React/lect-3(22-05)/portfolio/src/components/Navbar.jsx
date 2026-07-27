import React from 'react'

function Navbar() {
    return (
        <div className='flex justify-between gap-4  p-4 '>
            <div className="logo p-4 text-2xl ">Krunal Rathod</div>

                <div className="rounded-xl bg-white flex justify-center w-120  items-center shadow-lg shadow-gray-400">
                    <ul className='flex gap-15 p-3'>
                            <li className=''><a href="">Home</a></li>
                            <li className=''><a href="">About</a></li>
                            <li className=''><a href="">Work</a></li>
                            <li className=''><a href="">Contact</a></li>
                    </ul>
                </div>    
                    <div className="py-5 px-5 rounded-full bg-white shadow-lg shadow-gray-400"><i class="fa-solid fa-moon "></i></div>
                
        </div>
    )
}

export default Navbar