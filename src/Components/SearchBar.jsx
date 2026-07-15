import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");

  const disptach= useDispatch()

  const submitHandler = (e) => {
    e.preventDefault();
    disptach(setQuery(text))
    setText("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex py-10 bg-(--c1) gap-5 px-10"
      >
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="border-2 w-full px-4 py-2 rounded text-xl outline-none"
          type="text"
          placeholder="Search anything..."
          required
        />
        <button className="border-2 px-4 py-2 rounded text-xl outline-none cursor-pointer active:scale-95">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
