import PropTypes from 'prop-types';
import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Head from 'next/head';

const RootLayout = ({ children, title = 'ReadSphere - Explore the world of books and reviews' })  => {
  return (
    <html lang="en">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Discover and review books on ReadSphere" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
