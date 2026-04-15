import React from 'react';
import MyNavbar from './MyNavbar';
import { RiHome2Line } from 'react-icons/ri';
import { IoMdTime } from 'react-icons/io';
import { PiChartLineLight } from 'react-icons/pi';

const Navbar = () => {

    const navItems = [
        {
            path: '/',
            text: 'Home',
            icon: <RiHome2Line />
        },
        {
            path: '/timeline',
            text: 'Timeline',
            icon: <IoMdTime />
        },
        {
            path: '/stats',
            text: 'Stats',
            icon: <PiChartLineLight />
        },
    ]
    
    return (
        <div className="">
            <div className="navbar -sm bg-base-100 shadow px-2 md:px-5">
                <div className="navbar-start">
                    <h1 className='text-green font-bold text-2xl'><span className='text-black'>Keen</span>Keeper</h1>
                </div>
                <div className="navbar-end flex">
                    <ul className="flex justify-between gap-3 items-center font-semibold gray">
                        {
                            navItems.map((item, ind) => <MyNavbar key={ind} href={item.path} icon={item.icon} >{item.text}</MyNavbar>)
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;