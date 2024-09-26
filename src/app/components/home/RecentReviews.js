import Image from 'next/image';

const recentReviews = [
    { id: 1, user: 'Alice', book: 'The Great Gatsby', rating: 4, content: 'A classic that never gets old...' },
    { id: 2, user: 'Bob', book: '1984', rating: 5, content: 'Orwell\'s dystopian masterpiece...' },
    { id: 3, user: 'Charlie', book: 'To Kill a Mockingbird', rating: 5, content: 'A powerful story of racial injustice...' },
  ];

export default function RecentReviews() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Recent Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentReviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(review.user)}&background=random`}
                  alt={`${review.user}'s avatar`}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="font-semibold">{review.user}</h3>
                  <p className="text-gray-600 text-sm">{review.book}</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="sr-only">{review.rating} out of 5 stars</span>
              </div>
              <p className="text-gray-600">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}