import { RiHome2Line } from "react-icons/ri";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Logo */}
      <div className="navbar-start">
        <a className=" font-bold text-[#1F2937]">
          Keen<span className="text-[#244D3F]">Keeper</span>
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal px-1 text-[#64748B]">
          <li>
            <a>
              <RiHome2Line />
              Home
            </a>
          </li>

          <li>
            <a>
              <RiTimeLine />
              Timeline
            </a>
          </li>

          <li>
            <a>
              <ImStatsDots />
              Stats
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="navbar-end md:hidden">
        <div className="dropdown dropdown-end">
          {/* Hamburger Button */}
          <button tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Mobile Dropdown */}
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>

            <li>
              <a>Timeline</a>
            </li>

            <li>
              <a>Stats</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
