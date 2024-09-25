'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon, MagnifyingGlassIcon as SearchIcon } from '@heroicons/react/24/outline';




export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary-600">
          ReadSphere
        </Link>
        <div className="hidden md:flex space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/books">Books</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
        <div className="hidden md:block">
          <SearchBar />
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </nav>
      {isOpen && <MobileMenu />}
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <Link href={href} className="text-gray-600 hover:text-primary-600 transition duration-300 block py-2 px-4">
      {children}
    </Link>
  );
}

function MobileMenu() {
  return (
    <div className="md:hidden py-2">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/books">Books</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/contact">Contact</NavLink>
      <div className="px-4 py-2">
        <SearchBar />
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search books..."
        className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
      />
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
    </div>
  );
}
