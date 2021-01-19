import React from 'react';
import './ValidationComponent.css';

const ValidationComponent = (props) => {
    // receive text length as prop and return text too short or too long. 
    //For example let's say 5 chars is min length
    return (
        <div>
            <p>Text {props.length >= 5 ? 'long enough' : 'too short'}</p>
        </div>
    )
}

export default ValidationComponent;