import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
import { MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
  const navItem = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link>Services</Link>
      </li>
      <li>
        <Link>Blog</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
          >{navItem}</ul>
        </div>
        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
        <img className="h-16" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {navItem}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-5 mr-2">
        <ShoppingBagIcon className="h-6 w-6 " /> 
        <MagnifyingGlassIcon className="h-6 w-6 " /> 
        </div>
      <button className="btn btn-outline btn-error">Appointment</button>
      </div>
    </div>
  );
};

export default NavBar;
