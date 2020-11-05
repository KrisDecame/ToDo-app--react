import React from 'react';

export const ItemName = props => {
    const classes = `red ${props.isChecked}`;

    return(
        <h3 className={classes}>{props.name}</h3>
    )
}
