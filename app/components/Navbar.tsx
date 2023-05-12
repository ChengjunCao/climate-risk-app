"use client"; // this is a client component 👈🏽

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setYear } from "../state";

const Navbar = () => {
  const dispatch = useDispatch();
  const { year } = useSelector((state: any) => state.data);

  const handleYearChange = (event: any) => {
    dispatch(setYear(event.target.value));
  };

  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex-shrink-0">
          <a href="/" className="font-bold text-xl">
            Climate Risk Visualizer
          </a>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center space-x-8">
            <div className="relative">
              <select
                value={year}
                onChange={handleYearChange}
                className="bg-gray-800 text-white py-2 px-4 rounded"
              >
                <option value="2030">2030s</option>
                <option value="2040">2040s</option>
                <option value="2050">2050s</option>
                <option value="2060">2060s</option>
                <option value="2070">2070s</option>
              </select>
            </div>
            <Link href="/map">Map</Link>
            <Link href="/table">Table</Link>
            <Link href="/chart">Chart</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
