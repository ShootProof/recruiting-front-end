import React from 'react';
// import Expand from './expand.js';

function Expander(props) {
    // console.log('props: ', props.data);
    const styles = {
        'backgroundColor': '#f2f2f2',
        'marginLeft': props.level * 40,
        'marginBottom': '5px',
        'height': '25px',
        'borderRadius': '3px',
        'padding': '0 10px',
        'display': 'flex',
        'alignItems': 'center'
    };

    return props.data.map(item => {
        if(item.children.length > 0){
            return (
                <React.Fragment key={item.id + 'fragment'}>
                    <div key={`${item.id}_parent`} style={styles}>{item.name}</div>
                    <Expander key={item.id + item.parent} data={item.children} level={props.level + 1}/>
                </React.Fragment>
            );
        } else {
            return <div key={`${item.id}_leaf`} style={styles}>{item.name}</div>
        }
    });
}

export default Expander;