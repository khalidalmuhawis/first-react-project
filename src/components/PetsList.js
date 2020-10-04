import React from 'react'
import PetsItem from './PetItem'
import { ListWrapper } from "./styles";



const petsList = (props) => {
    const { items } = props
    const cards = items.map( item => <PetsItem item={item} key={item.id}/>)
  return <div>
      {cards}
      </div>
      }
    export default petsList;