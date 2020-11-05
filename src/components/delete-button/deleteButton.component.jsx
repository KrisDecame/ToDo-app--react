import React from 'react';

export const DeleteButton = props => {
    return(
        <button id={props.id} onClick={props.onClick}>{props.children}</button>
    )
}