import React from 'react';
import './Thumbnail.css';

const Thumbnail = (props) => {
    return <img src={props.src} alt={props.alt} title={props.alt} />;
};

export default Thumbnail;