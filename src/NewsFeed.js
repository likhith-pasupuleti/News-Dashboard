
// src/components/NewsFeed.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '.src/NewsFeed.css'; 

// function NewsFeed({ searchQuery, category }) {
//     const [articles, setArticles] = useState([]);
//     const [error, setError] = useState('');
//     const apiKey = '4bd0b66f94b44da19718e2b1ed5325ed';  // Replace 'your_api_key' with your actual News API key.

//     useEffect(() => {
//         // Guard clause to prevent fetching with empty parameters
//         if (!searchQuery && !category) {
//             setArticles([]);
//             return; // Prevent fetching when there is no query or category
//         }

//         const fetchArticles = async () => {
//             setError(''); // Reset the error message on new fetch
//             try {
//                 const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&q=${searchQuery}&apiKey=${apiKey}`);
//                 if (response.data.articles.length > 0) {
//                     setArticles(response.data.articles);
//                 } else {
//                     setArticles([]);
//                     setError('No articles found.');
//                 }
//             } catch (error) {
//                 if (error.response) {
//                     // The request was made and the server responded with a status code
//                     // that falls out of the range of 2xx
//                     console.error('Response error:', error.response.data);
//                     setError(`Error: ${error.response.data.message}`);
//                 } else if (error.request) {
//                     // The request was made but no response was received
//                     console.error('No response:', error.request);
//                     setError('Failed to get response from the API.');
//                 } else {
//                     // Something happened in setting up the request that triggered an Error
//                     console.error('Error setting up request:', error.message);
//                     setError('Error setting up API request.');
//                 }
//             }
//         };
        

//         fetchArticles();
//     }, [searchQuery, category]);

//     return (
//         <div>
//             {error && <p>{error}</p>}
//             {articles.map(article => (
//                 <div key={article.url}>
//                     <h2>{article.title}</h2>
//                     <p>{article.description}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default NewsFeed;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NewFeed.css';  // Ensure the CSS is imported

function NewsFeed({ searchQuery, category }) {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState('');
    const apiKey = '4bd0b66f94b44da19718e2b1ed5325ed';  // Replace 'your_api_key' with your actual News API key.

    useEffect(() => {
        if (!searchQuery && !category) {
            setArticles([]);
            return; // Prevent fetching when there is no query or category
        }

        const fetchArticles = async () => {
            setError(''); // Reset the error message on new fetch
            try {
                const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&q=${searchQuery}&apiKey=${apiKey}`);
                if (response.data.articles.length > 0) {
                    setArticles(response.data.articles);
                } else {
                    setArticles([]);
                    setError('No articles found.');
                }
            } catch (error) {
                if (error.response) {
                    console.error('Response error:', error.response.data);
                    setError(`Error: ${error.response.data.message}`);
                } else if (error.request) {
                    console.error('No response:', error.request);
                    setError('Failed to get response from the API.');
                } else {
                    console.error('Error setting up request:', error.message);
                    setError('Error setting up API request.');
                }
            }
        };
        
        fetchArticles();
    }, [searchQuery, category]);

    return (
        <div className="news-feed">
            {error && <p className="error-message">{error}</p>}
            {articles.map(article => (
                <div className="article" key={article.url}>
                    <h2>{article.title}</h2>
                    {article.urlToImage && <img src={article.urlToImage} alt={article.title} className="article-image" />}
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">Read more</a>
                </div>
            ))}
        </div>
    );
}

export default NewsFeed;
