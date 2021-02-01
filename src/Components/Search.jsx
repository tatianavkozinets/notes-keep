import React, { useState } from "react";

const Search = ({ searchText, onSearch }) => {
  const [text, setText] = useState(searchText);

  return (
    <div className="area">
      <input
        className="search-area"
        placeholder="Search text..."
        value={text}
        onChange={e => {
          setText(e.target.value);
          onSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
