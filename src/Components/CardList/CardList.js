import React from 'react'
import Card from '../Card/Card'
import './CardList.css'

const CardList=props=>{
    return(
        <div className='card-list'>
        {props.monsters.map((monster) => {
          return (
              <Card id={monster.id} key={monster.id} name={monster.name} />
              );
        })}
        </div>
    )
}

export default CardList