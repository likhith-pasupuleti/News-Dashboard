// src/components/SearchBar.js
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [input, setInput] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(input);
    };

    return (
        <form onSubmit={handleSearch}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search news..." />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar;
