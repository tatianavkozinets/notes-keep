import React, { useState } from "react";

const Search = props => {
  const [searchText, setSearchText] = useState(props.searchText);

  return (
    <div className="area">
      <input
        className="search-area"
        placeholder="Search text..."
        value={searchText}
        onChange={e => {
          setSearchText(e.target.value);
          props.onSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
