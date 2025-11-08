import React from "react";

const SearchBar = ({ value, onChange, placeholder = "Search by name...." }) => {
  return (
    <input
      type="text"
      className="search-input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      aria-label="Search employees"
    />
  );
};

export default SearchBar;
