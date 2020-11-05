import React from 'react';

export const ItemInput = props => {
    return(
        <div>
            <label>
                <input onChange={props.onChange} type={props.type} placeholder={props.placeholder} />
            </label>
        </div>
    )
}