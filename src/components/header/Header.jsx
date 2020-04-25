import React from 'react'
import { Logo } from './logo/Logo'
import Search from './search/Search'
import { Auth } from './auth/Auth copy'

const Header = (props) => {
    return (
        <header>
            <div className="container">
                <div className="header-wrapper">
                    <Logo />
                    <Search />
                    <Auth />
                </div>
            </div>
        </header>
    )
};

export default Header;