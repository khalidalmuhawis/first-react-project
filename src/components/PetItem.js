import React from 'react';
import styles from './styles';


const PetsItem = (props) => {
    const { item } = props;

    return (
        <div>
        <img style={styles.shopImage} alt={item.name} src={item.image}/>
        <p style={styles.text}>{item.name}</p>
        <p style={styles.text}>{item.price} SR</p>
        </div>
    )
}

export default PetsItem;
