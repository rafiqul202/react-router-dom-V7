import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <header className="w-full px-8 text-gray-700 bg-white shadow-md">
      <div className="container flex flex-col md:flex-row items-center justify-between py-5 mx-auto">
        <div className=" flex flex-col md:flex-row items-center gap-x-16">
          <NavLink to={"/"}>
            <span className="text-xl font-black text-gray-900 select-none">
              REST<span className="text-indigo-500">Explorer</span>
            </span>
          </NavLink>
          <nav className="flex flex-wrap items-center ml-0 md:ml-8 md:border-l md:pl-8 gap-x-7">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-indigo-600 text-xl"
                  : "font-medium text-gray-500 hover:text-gray-900"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-indigo-600 text-xl"
                  : "font-medium text-gray-500 hover:text-gray-900"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/countries"
              className={({ isActive }) =>
                isActive
                  ? "font-semibold text-indigo-600 text-xl"
                  : "font-medium text-gray-500 hover:text-gray-900"
              }
            >
              Countries
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
