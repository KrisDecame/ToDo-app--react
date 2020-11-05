import React from 'react';

export const SubmitButton = props => {
    return(
        <button onClick={props.onClick}>{props.children}</button>
    )
}