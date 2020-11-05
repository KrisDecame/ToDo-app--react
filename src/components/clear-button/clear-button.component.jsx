import React from 'react';

export const ClearButtonElement = props => {
    return(
        <button onClick={props.click}>{props.children}</button>
    )
}
