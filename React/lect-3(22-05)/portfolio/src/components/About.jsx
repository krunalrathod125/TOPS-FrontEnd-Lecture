import React from 'react'

function About() {
    const skill = ['HTML', 'CSS', 'JS','Node.js','Express.js','Tailwind CSS']

    return (


        <div className='mt-30 ml-10 mr-15 flex flex-col gap-5' >


            <h2 className='text-3xl text-blue-900 font-bold '>About</h2>
            <div className='flex flex-col gap-5'>
                <p className='text-1xl text-justify'>I am a Computer Science and Engineering graduate from Gujarat Technological University and currently pursuing Frontend Development training at TOPS Technologies. I have developed a strong foundation in web technologies such as HTML, CSS, JavaScript, and React.js, along with a good understanding of frontend development concepts and problem-solving techniques.</p>
                <p className='text-1xl text-justify'>I am passionate about creating responsive, user-friendly, and visually appealing web applications. During my learning journey, I have worked on projects that helped me strengthen my technical knowledge, improve logical thinking, and gain practical experience in building modern web interfaces. I enjoy learning new technologies and continuously improving my skills to stay updated with industry trends.</p>
                <p className='text-1xl text-justify'>As a quick learner and a team-oriented individual, I possess good communication and collaboration skills that help me work effectively in group environments. I am eager to begin my professional career in the IT industry, contribute to innovative projects, and grow as a frontend developer while continuously expanding my technical expertise.</p>
            </div>

            <div>
                {
                    skill.map((index, i) => (
                        <button key={i} className='border-1 rounded-full px-5 py-2 border-gray-600 m-2 hover:bg-purple-500 hover:text-white'>{index}</button>
                    ))
                }

            </div>

        </div>
    )
}

export default About