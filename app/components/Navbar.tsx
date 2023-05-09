"use client"; // this is a client component 👈🏽

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState("Option 1");

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
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
                value={selectedOption}
                onChange={handleOptionChange}
                className="bg-gray-800 text-white py-2 px-4 rounded"
              >
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
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
