import React from 'react'
import './Card.css'

const Card=props=>{
    return(
        <div className='card-container'>
            <img alt='monster_pic' src={`https://robohash.org/${props.id}?set=set2&size=180x180`} />
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    )
}
export default Card