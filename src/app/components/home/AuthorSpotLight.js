"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const AuthorSpotlight = ({ authorKey }) => {
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAuthor = async () => {
    setLoading(true);
    setError(null);

    if (!authorKey) {
      setError("No author key provided");
      setLoading(false);
      return;
    }

    try {
      const url = `https://openlibrary.org/authors/${authorKey}.json`;
      console.log('Fetching author data from:', url);
      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(`Author not found. Please check the author key.`);
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Received author data:', data);
      setAuthor(data);
    } catch (err) {
      console.error('Error fetching author data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAuthor();
  }, [authorKey]);

  if (loading) return <div>Loading author information...</div>;
  if (error) return (
    <Card className="w-[300px]">
      <CardContent>
        <p className="text-red-500">Error: {error}</p>
        <p className="text-sm mt-2">Author key: {authorKey || 'Not provided'}</p>
        <p className="text-sm mt-2">
          {!authorKey
            ? "Please provide a valid author key."
            : "Please check the author key and try again."}
        </p>
        {authorKey && <Button className="mt-4" onClick={fetchAuthor}>Retry</Button>}
      </CardContent>
    </Card>
  );
  if (!author) return null;

  return (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={`https://covers.openlibrary.org/a/olid/${author.key.split('/').pop()}-M.jpg`} alt={author.name} />
            <AvatarFallback>{author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <span>{author.name}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{author.bio?.value || author.bio || 'No biography available.'}</p>
        {author.birth_date && <p className="text-xs mt-2">Born: {author.birth_date}</p>}
        {author.death_date && <p className="text-xs">Died: {author.death_date}</p>}
      </CardContent>
    </Card>
  );
};

export default AuthorSpotlight;