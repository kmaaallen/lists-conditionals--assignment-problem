import React from 'react';
import './CharComponent.css';

const CharComponent = (props) => {
    return (
        <div>
            <div className='char-component-box' onClick={props.click}>{props.letter}</div>
        </div>
    )
}

export default CharComponent;