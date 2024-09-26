import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Link } from "lucide-react";

const BookCard = ({ book }) => {
  console.log("Book data received in BookCard:", book);

  if (!book) {
    return <div>No book data available</div>;
  }

  const {
    title = "Unknown Title",
    authors = [],
    cover_i,
    cover_id,
    key,
  } = book;

  const authorName =
    authors[0]?.name || book.author_name?.[0] || "Unknown Author";
  const coverUrl = cover_id
    ? `https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`
    : cover_i
    ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`
    : "/placeholder-cover.jpg"; // Make sure to have a placeholder image

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <Image
        src={coverUrl}
        alt={`Cover of ${title}`}
        width={300}
        height={192}
        className="w-full h-48 object-cover mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">By {authorName}</p>
      <a
        href={`https://openlibrary.org${key}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View on Open Library
      </a>
    </div>
  );
};

export default BookCard;
