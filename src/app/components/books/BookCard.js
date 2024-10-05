import React from "react";
import Image from "next/image";
import ReviewModal from "../ReviewModal";

const BookCard = ({ book }) => {
  if (!book) {
    return <div>No book data available</div>;
  }

  const {
    title = "Unknown Title",
    authors = [],
    cover_i,
    cover_id,
    first_publish_year,
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-2 aspect-h-3 relative">
      <Image
        src={coverUrl}
        alt={`Cover of ${title}`}
        width={300}
        height={192}
        className="w-full h-48 object-cover mb-4"
      />
      </div>
      <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">By {authorName}</p>
      <p className="text-sm text-gray-500 mb-4">
          First published: {first_publish_year || 'Unknown'}
        </p>
      <a
        href={`https://openlibrary.org${key}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View on Open Library
      </a>
      <div className="mt-3">
      <ReviewModal
      book={book}
      onReviewSubmitted={(newReview) => {
          console.log('New review:', newReview)
          }}>
      </ReviewModal>
      </div>
      </div>


    </div>
  );
};

export default BookCard;
