import React from 'react';
import { ItemName } from "../item-name/itemName.component";
import { DeleteButton } from "../delete-button/deleteButton.component.jsx";
import { CheckButton } from "../check-button/checkButton.component.jsx";
import './itemCard.style.scss';

export const ItemCard = props => {

    return(
        <div className="item-card">
            <p>{props.id + 1}</p>
            <ItemName name={props.name} isChecked={props.item.checked ? 'checked' : null} />
            <div>
                <CheckButton onClick={() => props.onCheck(!props.item.checked)}>Done</CheckButton>
                <DeleteButton id={props.id} onClick={props.deleteButton}>x</DeleteButton>
            </div>
        </div>
    )
}
