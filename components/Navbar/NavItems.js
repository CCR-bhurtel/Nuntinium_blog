import React from 'react';
import Logo from '../Logo';
import NavLink from './NavLink';

function NavItems() {
    return (
        <div>
            <div className="flex items-center justify-between w-[9rem]">
                <Logo />
                <nav>
                    <NavLink link="/" text="Home" />
                    <NavLink link="/tags" text="Tags" />
                    <NavLink link="/about" text="About" />
                </nav>
            </div>
        </div>
    );
}

export default NavItems;
