import React, { useState } from "react";

function SearchForm({onSubmit}) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({keyword})
  };

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button>Search</button>
      <input
        type="text"
        placeholder="Search gif here..."
        onChange={handleChange}
        value={keyword}
      />
    </form>
  );
}
export default React.memo(SearchForm)
