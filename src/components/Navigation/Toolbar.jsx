import React from 'react';



import NavigationItems from './NavigationItems/NavigationItems';

import logo from '../../assets/icons/logo.png';

const Toolbar = () => (
    <header className='header'>
        <div className='left-wrapper'>
            <img className='logo' src={logo} alt='Heroes' />
            <nav className='navigation'>
                <NavigationItems />

            </nav>
        </div>
    </header>
)
export default Toolbar;