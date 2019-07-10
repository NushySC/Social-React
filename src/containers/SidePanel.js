import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

const SidePanel = (props) => {
    return (
        <div className="side-panel">
            <NavBar />
            <div className="content">
                <Header />
                <Main />
            </div>
        </div>
    )
}

export default SidePanel