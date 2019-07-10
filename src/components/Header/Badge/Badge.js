import React from 'react';
import Avatar from '../../../img/emoji.png';

const Badge = (props) => {
    return (
        <div className="content__header--left">

        <div className="bio">
            <div className="item item--avatar"><img src={Avatar} alt="avatar" />></div>
            <div className="item item--name">Anakin Hammond</div>
            <div className="item item--business">Student</div>
            <div className="item item--gender">Male</div>
            <div className="item item--age">13 years old</div>

        </div>

    </div>
    )
}

export default Badge