import React from 'react';

function Expand(props) {
    // console.log(`${props.data}`);
    return props.data.map(item => {
        return <h1 key={item.id}>{item.name}</h1>
    });
}

export default Expand;