// Filter.js
import React from 'react';

const Filter = ({ selectedGenre, setSelectedGenre, minYear, setMinYear, maxYear, setMaxYear }) => {
  return (
    <div className="filters">
      <div className="genre-filter">
        <label htmlFor="genre">Genre: </label>
        <select
          id="genre"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Fantasy">Fantasy</option>
        </select>
      </div>
      <div className="year-filters">
        <label htmlFor="minYear">Min Year: </label>
        <input
          type="number"
          id="minYear"
          value={minYear}
          onChange={(e) => setMinYear(Number(e.target.value))}
        />
        <label htmlFor="maxYear">Max Year: </label>
        <input
          type="number"
          id="maxYear"
          value={maxYear}
          onChange={(e) => setMaxYear(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Filter;
