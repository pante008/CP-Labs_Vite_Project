import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import Card from './components/Card';
import ListItem from './components/ListItem';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [minYear, setMinYear] = useState(1900);
  const [maxYear, setMaxYear] = useState(new Date().getFullYear());

  // Fetch Data from OpenLibrary API for two genres
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Science Fiction books
        const sciFiRes = await fetch('https://openlibrary.org/subjects/science_fiction.json?limit=50');
        const sciFiResult = await sciFiRes.json();

        // Fetch Fantasy books
        const fantasyRes = await fetch('https://openlibrary.org/subjects/fantasy.json?limit=50');
        const fantasyResult = await fantasyRes.json();

        // Check if both have 'works' data
        const sciFiBooks = sciFiResult.works ? sciFiResult.works.map((book) => ({
          title: book.title,
          author: book.authors?.[0]?.name || 'Unknown',
          publishYear: book.first_publish_year || 'N/A',
          genre: 'Science Fiction',
        })) : [];

        const fantasyBooks = fantasyResult.works ? fantasyResult.works.map((book) => ({
          title: book.title,
          author: book.authors?.[0]?.name || 'Unknown',
          publishYear: book.first_publish_year || 'N/A',
          genre: 'Fantasy',
        })) : [];

        // Combine both arrays
        const combinedBooks = [...sciFiBooks, ...fantasyBooks];
        setData(combinedBooks);
        setFilteredData(combinedBooks);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Calculate Summary Statistics
  const validYears = data
    .map((book) => book.publishYear)
    .filter((year) => typeof year === 'number');

  const totalBooks = data.length;
  const averageYear = validYears.length
    ? Math.round(validYears.reduce((sum, year) => sum + year, 0) / validYears.length)
    : 'N/A';

  const earliestYear = validYears.length
    ? Math.min(...validYears)
    : 'N/A';

  // Apply Search and Filters
  useEffect(() => {
    const filtered = data
      .filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
      .filter((book) => selectedGenre === 'All' || book.genre === selectedGenre)
      .filter((book) => book.publishYear >= minYear && book.publishYear <= maxYear);
    setFilteredData(filtered);
  }, [searchTerm, selectedGenre, minYear, maxYear, data]);

  return (
    <div className="app">
      <Header title="Book Dashboard" />
      <div className="summary">
        <Card label="Total Books" value={totalBooks} />
        <Card label="Average Publish Year" value={averageYear} />
        <Card label="Earliest Publish Year" value={earliestYear} />
      </div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Filter
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        minYear={minYear}
        setMinYear={setMinYear}
        maxYear={maxYear}
        setMaxYear={setMaxYear}
      />
      <div className="list">
        {filteredData.map((book, index) => (
          <ListItem
            key={index}
            title={book.title}
            author={book.author}
            publishYear={book.publishYear}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
