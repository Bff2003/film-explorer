// page Movies React
// Path: src\pages\Movies\index.js

import React from "react";
import SearchBar from "../../components/SearchBar";
import "./index.css";

function Movies() {
    return (
        <div className="Movies">
            <header className="Movies-header">
                <p>Movies</p>
            </header>
            <SearchBar />
        </div>
    );
}

export default Movies;