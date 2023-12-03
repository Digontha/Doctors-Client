import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks = <>
        <NavLink
        to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-500 hover:bg-red-700 text-white rounded-xl" : "rounded-xl bg-blue-500 hover:bg-blue-700 text-white"
            }
        ><li><p>Home</p></li></NavLink>

        <NavLink to="findDoctor" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "rounded-xl bg-red-500 hover:bg-red-700 text-white" : "rounded-xl bg-blue-500 hover:bg-blue-700 text-white"
        }><li><p>Find Doctor</p></li></NavLink>

        <NavLink to="makeAppointment" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "rounded-xl bg-red-500 hover:bg-red-700 text-white" : "rounded-xl bg-blue-500 hover:bg-blue-700 text-white"
        }><li><p>Make Appointment</p></li></NavLink>

        <NavLink to="about" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "rounded-xl bg-red-500 hover:bg-red-700 text-white" : "rounded-xl bg-blue-500 hover:bg-blue-700 text-white"
        }><li><p>About</p></li></NavLink>

        <NavLink to="contact" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "rounded-xl bg-red-500 hover:bg-red-700 text-white" : "rounded-xl bg-blue-500 hover:bg-blue-700 text-white"
        }><li><p>Contact</p></li></NavLink>

        <div>
            <NavLink className="btn btn-neutral text-white btn-outline btn-sm lg:ml-10"><li><p>Login</p></li></NavLink>
        </div>
    </>
    return (
        <>
            <div className="navbar bg-green-800 lg:px-10 py-4">
                <div className="flex-1 gap-2">
                    <p className="text-white font-semibold font-mono  text-xl">DOCTORS</p>
                    <img className='w-10 h-10 rounded-full' src="https://th.bing.com/th/id/OIP.InaHmCjoSIANErkcdkrQ_QAAAA?rs=1&pid=ImgDetMain" alt="" />
                </div>
                <div className="dropdown dropdown-end ">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul className="menu menu-sm dropdown-content space-y-3 mt-3 z-[1] p-2 shadow bg-slate-500 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>

                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu  menu-horizontal px-1 gap-4">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;