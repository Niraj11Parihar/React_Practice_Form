import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center">
      <div className="bg-slate-400 w-full">
        <div className="container m-auto p-3 flex items-center justify-between rounded mt-2">
          {/* Navbar Branding */}
          <div className="text-3xl font-semibold">
            <h1>BrandName</h1>
          </div>

          {/* Navbar Links */}
          <div>
            <ul className="flex space-x-8 text-white text-lg font-medium">
              <li className="hover:text-slate-950 cursor-pointer">
                <Link to="/">Form</Link>
              </li>
              <li className="hover:text-slate-950 cursor-pointer">
                <Link to="/UserData">User Data</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
