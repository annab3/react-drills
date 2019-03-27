import React from 'react';

function Todo(props) {
    // return (<div>{props.tasks.map(element => (<h2>{element}</h2>))}</div>)
    return <h2>{props.task}</h2>
}

export default Todo;