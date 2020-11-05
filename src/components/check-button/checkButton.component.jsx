import React from 'react';

export const CheckButton = props => {
    return(
        <button onClick={props.onClick}>{props.children}</button>
    )
}
