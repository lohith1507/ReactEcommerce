import React, { useEffect, useState } from 'react'

export default function Index() {

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() =>{

  },[searchTerm])


  const handleSearch = (e) =>{
    setSearchTerm(e.target.value.toLowerCase());
  }

  console.log(searchTerm)
  return (
    <div className='d-flex justify-content-between align-items-center mt-1'>
      <div className="fs-3 fst-italic">Lohith</div>
      <div>
        <input 
          type='text' 
          className='form-control'
          placeholder='Search here'
          onChange={handleSearch}
        />
      </div>
      <div>
        <span className='bi bi-geo-alt'></span>Nellore
      </div>
    </div>
  )
}
