// src/components/CategoryFilter.js
import React from 'react';

function CategoryFilter({ onFilterChange }) {
    return (
        <select onChange={(e) => onFilterChange(e.target.value)}>
            <option value="">All</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
        </select>
    );
}

export default CategoryFilter;
