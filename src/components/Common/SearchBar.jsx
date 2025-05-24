import React, { useRef, useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleSearchToggle = () => {
    setIsFocused(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search term:", searchTerm); // ✅ This will now work
    setSearchTerm(""); // Optional: clear after search
     setIsFocused(false); // Optional: close search after submit
  };

  return (
    <div
      className={`transition-all duration-200 ease-in-out ${
        isFocused
          ? "fixed top-0 left-0 w-full h-14 bg-white z-50 px-4 flex items-center"
          : "w-auto"
      }`}
    >
      {isFocused ? (
        <form
          onSubmit={handleSubmit}
          className="relative w-full flex items-center"
        >
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="absolute right-3 text-gray-500 hover:text-blue-500"
            aria-label="Search"
          >
            <HiMagnifyingGlass className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={() => setIsFocused(false)}
            className="absolute right-12 text-gray-500 hover:text-blue-500"
          >
            <HiMiniXMark className="h-6 w-6" />
          </button>
        </form>
      ) : (
        <button
          onClick={handleSearchToggle}
          className="text-gray-600 hover:text-blue-500"
          aria-label="Open search"
        >
          <HiMagnifyingGlass className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
