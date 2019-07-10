import React from 'react';
import Edit from '../../../img/edit-gray.svg';
import Bookmark from '../../../img/bookmark-saved.svg';

const Icons = (props) => {
    return (
        <div>                    
            <div className="content__header--right">
        <img src={Bookmark} alt="bookmark" />
        <img src={Edit} alt="edit" />
    </div>
    </div>
    )
}

export default Icons