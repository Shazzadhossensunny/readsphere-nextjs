"use client";
import { useEffect, useState } from 'react';
import { getRecentBooks } from '../../utils/api';
import BookCard from '../../components/books/BookCard';

export default function FeaturedBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const recentBooks = await getRecentBooks();
        setBooks(recentBooks);
      } catch (error) {
        console.error('Error fetching featured books:', error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <BookCard key={book.key} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}