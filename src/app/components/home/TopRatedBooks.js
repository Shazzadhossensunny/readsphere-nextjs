"use client";
import React, { useState, useEffect } from 'react';
import BookCard from '../../components/books/BookCard';

const TopRatedBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopBooks = async () => {
      try {
        const response = await fetch('https://openlibrary.org/search.json?q=rating:5&sort=rating&limit=6');
        if (!response.ok) {
          throw new Error('Failed to fetch top rated books');
        }
        const data = await response.json();
        setBooks(data.docs);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTopBooks();
  }, []);

  if (loading) return <div>Loading top rated books...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Top Rated Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <BookCard
            key={book.key}
            title={book.title}
            author={book.author_name?.[0] || 'Unknown Author'}
            description={book.first_sentence?.[0] || 'No description available.'}
            rating={book.ratings_average?.toFixed(1) || 'N/A'}
          />
        ))}
      </div>
    </div>
  );
};

export default TopRatedBooks;