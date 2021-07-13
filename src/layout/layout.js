import React from 'react';
import './Layout.scss';

import Toolbar from '../components/Navigation/Toolbar';

const Layout = (props) => (
    <div>
        <Toolbar />
        <main className="main-content">
            {props.children}
        </main>
    </div>
)

export default Layout;