import React from "react";

function Search() {
  return (
    <div>
      {/* <h4> Search :</h4> */}
      <label>
        <input
          id="inputSearch"
          type="text"
          name="search"
          placeholder="top trending"
          onClick={() => this.handleChange}
        />
      </label>
      <label>
        <button id="search" type="submit">
          Search
        </button>
      </label>
    </div>
  );
}

export default Search;
