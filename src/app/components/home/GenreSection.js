import Link from 'next/link';

const genres = [
  { name: 'Fiction', icon: '📚' },
  { name: 'Mystery', icon: '🕵️' },
  { name: 'Romance', icon: '💖' },
  { name: 'Science Fiction', icon: '🚀' },
  { name: 'Fantasy', icon: '🧙' },
  { name: 'Biography', icon: '👤' },
];

export default function GenreSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Popular Genres</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {genres.map((genre) => (
            <Link
              key={genre.name}
              href={`/books?genre=${encodeURIComponent(genre.name)}`}
              className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300"
              aria-label={`View ${genre.name} books`}
            >
              <span className="text-4xl mb-2 block" aria-hidden="true">{genre.icon}</span>
              <span className="font-semibold">{genre.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}