import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="bg-primary-700 text-white py-16 my-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to start your reading journey?</h2>
        <p className="text-xl mb-8">Join our community of book lovers and discover your next favorite read.</p>
        <Link href="/books" className="bg-white text-primary-700 px-8 py-3 rounded-full font-semibold text-lg hover:bg-primary-100 transition duration-300">
          Explore Books
        </Link>
      </div>
    </section>
  );
}