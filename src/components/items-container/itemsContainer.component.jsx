import React from 'react';
import { ItemCard } from '../item-card/itemCard.component';

export const ItemsContainer = props => {
    return (
        <div className={props.className}>
            {
                props.items.map(item => (
                    <ItemCard
                        item={item}
                        onCheck={(isChecked) => props.itemChecked(item, isChecked)}
                        key={props.items.indexOf(item)}
                        id={props.items.indexOf(item)}
                        name={item.name}
                        deleteButton={props.deleteItem}>
                    </ItemCard>
                ))
            }
        </div>
    )
}
