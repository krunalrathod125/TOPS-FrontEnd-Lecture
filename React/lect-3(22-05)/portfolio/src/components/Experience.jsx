import React from 'react'

function Experience() {
  return (
    <div className='mt-50'>
      <h2 className='text-3xl text-blue-900 font-bold m-10'>Work Experience</h2>

      {/* =============================================Detail-1================================================== */}
      <div className='grid grid-cols-6 gap-4 m-10 '>
        <div className='col-span-4 flex flex-col gap-2'>
          <h3 className='text-2xl text-bold'>Python & Artificial Intelligence Training</h3>
          <h5 className='text-2xl text-gray-800'>Edunet Foundation</h5>
          <p className='text-1xl '>from R.N.G. Patel Institute of Technology for participating in Foundation
            Course and successfully completing the training on Python Programming, Data
            Analysis with Python, Artificial Intelligence and SAP Conversational AI Chatbot
            during 2023- 2024 under Code Unnati Program, a CSR initiative of SAP and
            implemented by Edunet Foundation.</p>
        </div>
        <div className='col-span-2  mr-5 text-right'>
          <p className='text-2xl text-bold'>july-2023</p>
        </div>

      </div>

      {/* =============================================Detail-2================================================== */}
      <div className='grid grid-cols-6 gap-4 m-10'>
        <div className='col-span-4 flex flex-col gap-2'>
        
          <h3 className='text-2xl text-bold'>Code Unnati Program Intern (AI & Emerging Technologies)</h3>
          <h5 className='text-2xl text-gray-800'>Edunet Foundation</h5>
          <p className='text-1xl '>from R.N.G. Patel Institute Of Technology for Participating in Advance Course
            and successfully completing the training on Emerging Technologies (Artificial
            Intelligence & Machine Learning, Deep Learning, Edge Computing, SAP Analytics
            Cloud and SAP Advanced Business Application Programming(ABAP) on
            Business Technology Platform (BTP)) during 2025-2026 under Code Unnati
            Program, a CSR initiative of SAP and implemented by Edunet Foundation.</p>
        </div>
        <div className='col-span-2  mr-5 text-right'>
          <p className='text-2xl text-bold'>August-2025</p>
        </div>

      </div>

      {/* =============================================Detail-3================================================== */}
      <div className='grid grid-cols-6 gap-4 m-10'>
        <div className='col-span-4 flex flex-col gap-2'>
          <h3 className='text-3xl text-bold'>Frontend Development Cource</h3>
          <h5 className='text-2xl text-gray-800'>TOPS Technologies</h5>
          <ul>
            <li className='list-disc list-inside'>Learning frontend technologies including HTML, CSS, JavaScript, and React.js</li>
            <li className='list-disc list-inside'>Developing responsive web pages and web applications</li>
            <li className='list-disc list-inside'>Working on projects to improve UI/UX, problem-solving, and coding skills</li>
          </ul>
        </div>
        <div className='col-span-2  mr-5 text-right'>
          <p className='text-2xl text-bold'>January 2026 - Now</p>
        </div>

      </div>


    </div>
  )
}

export default Experience