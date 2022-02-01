import React from 'react'
import './SearchBox.css'
const SearchBox=props=>{
    return(
        <div className='container'>
           <input 
           className='search'
           type="search" 
           placeholder={props.placeholder} 
           onChange={props.change}
           /> 
        </div>
    )
}

export default SearchBox