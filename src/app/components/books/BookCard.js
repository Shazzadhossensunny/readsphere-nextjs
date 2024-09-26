import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const BookCard = ({ title, author, description, rating, coverId }) => {
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : '/placeholder-book-cover.jpg'; // Make sure to add a placeholder image in your public folder

  return (
    <Card>
      <CardHeader>
        <div className="w-full h-48 relative mb-2">
          <Image
            src={coverUrl}
            alt={`Cover of ${title}`}
            fill
            className="object-cover"
          />
        </div>
        <CardTitle>{title}</CardTitle>
        <p className="text-sm text-gray-600">{author}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{description}</p>
        <div className="mt-2">
          <span className="text-yellow-500">★</span>
          {/* <span className="ml-1">{rating ? rating.toFixed(1) : 'N/A'}/5</span> */}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">Read More</Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;