import React from 'react';

function List(props) {
    return (<div>{props.tasks.map(element => (<h2>{element}</h2>))}</div>)
}

export default List;