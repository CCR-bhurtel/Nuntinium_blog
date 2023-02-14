import React, { useEffect, useState } from 'react';

function NavSearch() {
    const [showSearch, setShowSearch] = useState(false);
    

    const searchHandler = () => {
        setTimeout(() => {
            setShowSearch(true);
        }, 100);
    };
    useEffect(() => {
        window.addEventListener('click', (e) => {

        });
    });
    return (
        <div className="navSearch flex items-center justify-center ">
            <input
                type="text"
                name="search"
                id="search'"
                className={`searchBox ${
                    showSearch ? 'block' : 'hidden'
                }  border-black border-[1px] w-[12rem] px-3 py-1 rounded-xl`}
            />
            <i
                onClick={searchHandler}
                className="searchIcon absolute right-[7rem] fa fa-search cursor-pointer md:right-[6.5rem] hover:rotate-12"
            ></i>
        </div>
    );
}

export default NavSearch;
