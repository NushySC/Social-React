import React from 'react';
import Empty from '../../img/empty-img.svg';

const Main = (props) => {
    return (
        <div className="content__main">
        <img src={Empty} alt="empty"/>
        <p> Caroline Recerveur does not have any mentions</p>
    </div>
    )
}

export default Main