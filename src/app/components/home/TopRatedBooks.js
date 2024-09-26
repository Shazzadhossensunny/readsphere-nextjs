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
        const response = await fetch('https://openlibrary.org/subjects/fiction.json?limit=6');
        if (!response.ok) {
          throw new Error('Failed to fetch top rated books');
        }
        const data = await response.json();
        console.log('API Response:', data);
        console.log('Works:', data.works); // Add this line
        setBooks(data.works || []);
        setLoading(false);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTopBooks();
  }, []);

  if (loading) return <div>Loading top rated books...</div>;
  if (error) return <div>Error: {error}</div>;
  if (books.length === 0) return <div>No books available.</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Top Rated Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => {
          console.log('Book data being passed to BookCard:', book); // Add this line
          return (
            <BookCard
              key={book.key}
              book={book} // Pass the entire book object
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopRatedBooks;