import React, { useState } from 'react'

function Fruit() {
    const [fruits,setFruits] = useState(['apple','banana'])
    const [fname,setFname]=useState("")

    const handleChange = (e)=>{
        setFname(e.target.value)
    }

    const handleClick = (e)=>{
        e.preventDefault()
        setFruits([...fruits,fname])
        setFname("")
    }
  return (
    <div>
        <div className=''>
        <h1>Crud Operation</h1>
        <form>
            <label>Enter The Fruit Name : </label>
            <input type="text" name="" id="" onChange={handleChange} value={fname}/>
            <input type="submit" value="Add" onClick={handleClick}/>
        </form>
        </div>

        <div className="Output">
            <h2>Fruit List</h2>
            <ul>
            {fruits.map((fruit,index)=>(
                <li key={index}>{fruit}</li>
            ))}
            </ul>
        </div>

    </div>
  )
}

export default Fruit