
import Link from 'next/link';
import ActiveLink from './ActiveLink';
import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";

const NAV_LINKS = [
  { href: '/', label: 'Home', icon: RiHome2Line },
  { href: '/timeline', label: 'Timeline', icon: RiTimeLine },
  { href: '/stats', label: 'Stats', icon: ImStatsDots },
];

const Navbar = () => {

  const renderNavLinks = (mobile = false) => {
    const baseClass = mobile
      ? "flex items-center gap-2 text-[#64748B]"
      : "flex items-center gap-2 px-4 py-2 rounded-lg text-[#64748B] hover:text-[#23795c] hover:bg-[#23795c]/5 transition-all duration-200";

    return NAV_LINKS.map(({ href, label, icon: Icon }) => (
      <li key={href}>
        <ActiveLink
          href={href}
          className={baseClass}
          activeClassName={mobile 
            ? "text-[#23795c] font-semibold bg-[#23795c]/10"
            : "text-[#23795c] font-semibold bg-[#23795c]/10"
          }
        >
          <Icon />
          {label}
        </ActiveLink>
      </li>
    ));
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
     
      <div className="navbar-start">
        <Link href="/" className="font-bold text-[#1F2937]">
          Keen<span className="text-[#23795c]">Keeper</span>
        </Link>
      </div>

   
      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          {renderNavLinks(false)}
        </ul>
      </div>

     
      <div className="navbar-end md:hidden">
        <div className="dropdown dropdown-end">
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
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {renderNavLinks(true)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;