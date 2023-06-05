// react component
// Path: src\components\SearchBar\index.js

import React from "react";
import "./index.css";
import { useState } from "react";

function SearchBar(props) {

    const [search, setSearch] = useState();

    return (
        <div className="SearchBar">
            {/* icon */}
            <div className="SearchBar-icon">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="SearchBar-icon-svg">
                    <path d="M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15zm5.25-1.5l4.5 4.5-1.5 1.5-4.5-4.5a6 6 0 111.5-1.5z"></path>
                </svg>
            </div>

            {/* separate */}
            <div className="SearchBar-separate"></div>

            {/* search input */}
            <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
        </div>
    );

}

export default SearchBar;