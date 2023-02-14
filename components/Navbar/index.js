import React, { useEffect, useState } from 'react';
import NavSearch from '../SearchBar/NavSearch';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const menuHandler = () => {
        setTimeout(() => {
            setShowMenu(!showMenu);
        }, 100);
    };

    useEffect(() => {
        window.addEventListener('click', (e) => {
            const targetEvent = e.target; // parent of click event
            if (showMenu) {
                const menu = document.querySelector('.menu');
                if (!menu.contains(targetEvent)) {
                    setShowMenu(false);
                }
            }
        });
    }, []);
    return (
        <section className="section-1">
            <nav className="flex flex-col h-[18vh] max-w-[100vw] px-2 my-4 justify-between mt-2 md:mt-0 md:flex-row md:h-[11vh]">
                <div className="flex items-center mb-1 justify-between basis-2">
                    <div className="blackBox relative h-[7vh] w-[40px] bg-black md:h-[50px] md:w-[50px]"></div>
                    <span className="absolute text-xl left-[1.6rem] top-[1.2rem] md:text-2xl md:left-[1.9rem] lg:top-[1.5rem lg:leading-[23px]] fk:top-[5rem]">
                        <span className="text-white">nu</span>nitum.
                    </span>
                    <ul className="flex pt-4 gap-5 mx-3 md:gap-8 md:mx-5 md:ml-36 lg:text-xl">
                        <li>Home</li>
                        <li>Tags</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className="search relative flex items-center mb-1 gap-x-4 justify-end basis-1 mt-2 md:mt-0 box-border md:pt-5">
                    <NavSearch />

                    <div className="wraper relative flex items-center justify-center gap-[22px] mr-[10px] md:mr-[0px]">
                        <i className="bellIcon fa fa-thin fa-bell cursor-pointer hover:rotate-12"></i>
                        <div
                            onClick={menuHandler}
                            className="loginIcon image9 h-10 w-10 rounded-[50%] cursor-pointer hover:border-2 border-gray-500"
                        ></div>
                        {showMenu && (
                            <div className="menu flex flex-col gap-3 absolute top-11 z-10 right-0 h-[13rem] w-[9rem] px-5 py-3 rounded-[15px] shadow-gray-500 shadow-md border-[1.5px] bg-white">
                                <div className="sec1 relative">
                                    <ul>
                                        <li>
                                            <span className="font-bold">Arthur Black</span>
                                        </li>
                                        <li>
                                            <span className="font-extralight text-[13px]">@arthurblack</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="line absolute h-[1px] w-[102%] top-[4rem] left-[-1px] bg-gray-500"></div>
                                <div className="sec2 text-[15px] leading-6">
                                    <ul>
                                        <li>
                                            <span> Dashboard </span>
                                        </li>
                                        <li>
                                            <span> Write a Post </span>
                                        </li>
                                        <li>
                                            <span> Settings </span>
                                        </li>
                                        <li>
                                            <span> Help </span>
                                        </li>
                                        <li>
                                            <span> Sign out </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                    <button className="px-5 border-[1px] border-gray-200 rounded-xl mr-[10px] md:mr-[0px] hidden">
                        Login
                    </button>
                </div>
            </nav>
        </section>
    );
}

export default Navbar;
