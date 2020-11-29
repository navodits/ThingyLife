import React from "react";

const Search = (props) => {
  return (
    <div className="input-group mb-3">
      <input
        onChange={props.onKeywordChange}
        type="text"
        className="form-control"
        placeholder="Type Your text..."
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-primary"
          type="button"
          id="button-addon2"
          onClick={props.onSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
