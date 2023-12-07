import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user,logOut } = useContext(AuthContext)
    const handleLogout=() => {
        logOut();
    }
    const navLinks = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-500 hover:bg-red-700 text-white rounded-xl" : "rounded-xl bg-blue-500 hover:bg-blue-700 text-white"
            }
        ><li><p>Home</p></li></NavLink>

        <NavLink to="/findDoctor" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "rounded-xl bg-red-500 hover:bg-red-700 text-white" : "rounded-xl bg-blue-500 hover:bg-blue-700 text-white"
        }><li><p>Find Doctor</p></li></NavLink>

        <NavLink to="/about" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "rounded-xl bg-red-500 hover:bg-red-700 text-white" : "rounded-xl bg-blue-500 hover:bg-blue-700 text-white"
        }><li><p>About</p></li></NavLink>

        <NavLink to="/contact" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "rounded-xl bg-red-500 hover:bg-red-700 text-white" : "rounded-xl bg-blue-500 hover:bg-blue-700 text-white"
        }><li><p>Contact</p></li></NavLink>

        {user ?
            <div className="">
                <div className="dropdown dropdown-end">
                    <img tabIndex={0} className='w-10 h-10 rounded-full' src={user?.photoURL} alt="" />
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='text-black'><p>{user?.displayName}</p></li>
                        <Link to="/dashboard"> <button className="btn w-full btn-sm btn-success btn-outline  mb-3">Dashboard</button></Link>
                        <button onClick={handleLogout} className="btn btn-sm btn-success btn-outline">Log out</button>
                    </ul>
                </div>
            </div>
            :
            <div>
                <NavLink to="/login" className="btn btn-neutral text-white btn-outline btn-sm lg:ml-10"><li><p>Login</p></li></NavLink>
            </div>
        }
    </>
    return (
        <>
            <div className="navbar bg-green-800 lg:px-10 py-4 fixed z-10">
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