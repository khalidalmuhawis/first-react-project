import React from 'react';
import { Description, ShopImage, Title, ListWrapper, PetWrapper } from "./styles";



const PetsItem = (props) => {
    const { item } = props;

    return (
        <div>
            <PetWrapper>    
                <img alt={item.name} src={item.image}/>
                <p >{item.name}</p>
                <p className="cookie-price">{item.price} SR</p>
            </PetWrapper>    
        </div>
    )
}

export default PetsItem;
