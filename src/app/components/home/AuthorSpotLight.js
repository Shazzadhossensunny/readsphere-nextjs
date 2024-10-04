'use client'
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const BASE_URL = "https://openlibrary.org";

const AuthorSpotlight = ({ authorId }) => {
  const [author, setAuthor] = useState(null);
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!authorId) {
      setError('Author ID is undefined.');
      setLoading(false);
      return;
    }

    const fetchAuthorData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/authors/${authorId}.json`);
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        const data = await res.json();
        if (!data || Object.keys(data).length === 0) {
          throw new Error('Author not found');
        }

        setAuthor(data);

        // Fetch works separately
        const worksData = await fetchAuthorWorks(authorId);
        setWorks(worksData);
      } catch (error) {
        console.error("Error fetching author data:", error);
        setError(error.message);
        setAuthor(null);
      } finally {
        setLoading(false);
      }
    };

    const fetchAuthorWorks = async (authorId) => {
      try {
        const res = await fetch(`${BASE_URL}/authors/${authorId}/works.json`);
        if (!res.ok) {
          throw new Error(`Error fetching works: ${res.status} ${res.statusText}`);
        }
        const worksData = await res.json();
        return worksData.entries || [];
      } catch (error) {
        console.error("Error fetching works:", error);
        return [];
      }
    };

    fetchAuthorData();
  }, [authorId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!author) {
    return <p>Author not found.</p>;
  }

  return (
    <section className="my-12 mx-auto max-w-6xl p-4">
      <h2 className="text-3xl font-bold text-center mb-8">Author Spotlight</h2>
      <Card className="mx-auto my-8 max-w-4xl p-6 bg-white shadow-lg">
        <CardHeader>
          <CardTitle>{author.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6">
            <Image
              src={author.photos && author.photos.length > 0
                ? `https://covers.openlibrary.org/a/id/${author.photos[0]}-M.jpg`
                : 'https://covers.openlibrary.org/a/id/14418219-M.jpg'}
              alt={author.name || 'Author'}
              width={200}
              height={300}
              className="rounded-lg object-cover w-[200px] h-[300px]"
            />
            <div>
              <p className="mb-4 text-lg">{author.bio || 'Biography not available.'}</p>
              <h3 className="font-semibold text-lg">Works:</h3>
              <ul className="list-disc ml-6">
                {works.length > 0 ? (
                  works.map((work, index) => (
                    <li key={index}>{work.title}</li>
                  ))
                ) : (
                  <li>No works available</li>
                )}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default AuthorSpotlight;
