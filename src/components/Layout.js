import React from 'react';
import Navbar from './Navbar';

const Layout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            <div>{children}</div>
        </div>
    );
};

export default Layout;