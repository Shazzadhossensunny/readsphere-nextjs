"use client";
import { useEffect, useState } from 'react';
import { getRecentBooks } from '../../utils/api';
import BookCard from '../../components/books/BookCard';

export default function FeaturedBooks() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchBooks = async () => {
        try {
          const recentBooks = await getRecentBooks();
          console.log('Fetched books:', recentBooks); // Log the fetched data
          setBooks(recentBooks.filter(book => book !== undefined));
          setLoading(false);
        } catch (error) {
          console.error('Error fetching featured books:', error);
          setError('Failed to fetch featured books');
          setLoading(false);
        }
      };
      fetchBooks();
    }, []);

    if (loading) return <div>Loading featured books...</div>;
    if (error) return <div>Error: {error}</div>;
    if (books.length === 0) return <div>No featured books available.</div>;

    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <BookCard key={book.key || Math.random()} book={book} />
            ))}
          </div>
        </div>
      </section>
    );
  }