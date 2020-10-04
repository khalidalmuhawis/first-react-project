import React from 'react'
import PetsItem from './PetItem'



const petsList = (props) => {
    const { items } = props
    const cards = items.map( item => <PetsItem item={item} key={item.id}/>)
  return <div>
      {cards}
      </div>
      }
    export default petsList;