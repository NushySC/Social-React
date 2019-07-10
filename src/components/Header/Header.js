import React from 'react';
import Badge from './Badge/Badge';
import Icons from './Icons/Icons'

const Header = (props) => {
    return (
        <div className="content__header">
            <Badge />
            <Icons />
        </div>
    )
}

export default Header