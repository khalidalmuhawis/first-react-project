import React from 'react'
import PetsItem from './PetItem'



const petsList = (props) => {
    const { items } = props
    return items.map( item => <PetsItem item={item} key={item.id}/>)
    }
  
    export default petsList;