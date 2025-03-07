import React, { useState } from "react";

const SearchBar = ({ setSearchTerm }) => {
  const [input, setInput] = useState("");

  const handleSearch = (event) => {
    setInput(event.target.value);
    setSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={input}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
