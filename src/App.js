// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// src/App.js
import React, { useState } from 'react';
import NewsFeed from './NewsFeed';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';

import './App.css';

function App() {
    const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState('');

    return (
        <div className="App">
            <header>
                <h1>News Dashboard</h1>
                <SearchBar onSearch={setSearchQuery} />
                <CategoryFilter onFilterChange={setCategory} />
            </header>
            <NewsFeed searchQuery={searchQuery} category={category} />
        </div>
    );
}

export default App;
