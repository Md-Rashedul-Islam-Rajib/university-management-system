// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Link } from 'react-router-dom'; // Use 'next/link' if you're using Next.js
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  // State to manage mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-blue-700 text-white shadow-md fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Nav Menu Links for Mobile */}
        <div className="md:hidden bg-blue-700 tex flex items-center space-x-4">
          <Button
            
            size="icon"
            className="block text-xl font-bold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰ {/* Mobile Menu Toggle Button */}
          </Button>

          {isMenuOpen && (
            <div className="absolute top-16 left-0 w-full text-white bg-blue-600 shadow-md rounded-xl">
              <div className="flex flex-col p-4">
                <Link to="/" className="text-lg font-medium hover:text-blue-500 border-b-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/about" className="text-lg font-medium hover:text-blue-500 border-b-2" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link to="/services" className="text-lg font-medium hover:text-blue-500 border-b-2" onClick={() => setIsMenuOpen(false)}>Services</Link>
                <Link to="/contact" className="text-lg font-medium hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </div>
            </div>
          )}
        </div>

        {/* Logo on Mobile */}
        <div className="text-2xl font-bold flex-grow text-center md:text-left md:flex-grow-0">
          <Link to="/" className="hover:text-blue-500">
            MyLogo
          </Link>
        </div>

        {/* User Avatar*/}
        <div className="flex items-center space-x-4">
          {/* Desktop Navigation Menu*/}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-lg font-medium hover:text-blue-500">Home</Link>
            <Link to="/about" className="text-lg font-medium hover:text-blue-500">About</Link>
            <Link to="/services" className="text-lg font-medium hover:text-blue-500">Services</Link>
            <Link to="/contact" className="text-lg font-medium hover:text-blue-500">Contact</Link>
          </div>

          {/* User Avatar for All Screens  */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                {/* Replace the src with the actual user image */}
                <AvatarImage src="https://github.com/shadcn.png" alt="User Image" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
