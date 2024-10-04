// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion'; 

const mobileMenuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' }, 
};

const avatarMenuVariants = {
  open: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  closed: { opacity: 0, scale: 0, transition: { duration: 0.2 } }, 
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-blue-700 text-white shadow-md fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Nav Menu Links for Mobile */}
        <div className="md:hidden bg-blue-700 flex items-center space-x-4">
          <Button
            size="icon"
            className="block text-xl font-bold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </Button>

          <motion.div
          className="absolute top-16 left-0 w-full bg-blue-600 shadow-md rounded-xl md:hidden"
          initial="closed"
          animate={isMenuOpen ? 'open' : 'closed'}
          variants={mobileMenuVariants}
        >
          <div className="flex flex-col p-4">
            <NavLink to="/student-dashboard" className="text-lg font-medium hover:text-blue-500 border-b-2" onClick={() => setIsMenuOpen(false)}>Student Dashboard</NavLink>
            <NavLink to="/faculty-management" className="text-lg font-medium hover:text-blue-500 border-b-2" onClick={() => setIsMenuOpen(false)}>Faculty Management</NavLink>
            <NavLink to="/course-registration" className="text-lg font-medium hover:text-blue-500 border-b-2" onClick={() => setIsMenuOpen(false)}>Course Registration</NavLink>
          </div>
        </motion.div>
        </div>

        {/* Logo on Mobile */}
        <div className="text-2xl font-bold flex-grow text-center md:text-left md:flex-grow-0">
          <Link to="/" className="hover:text-blue-500">
            MyLogo
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex md:space-x-1 lg:space-x-6">
          <CustomNavLink to="/student-dashboard">Student Dashboard</CustomNavLink>
          <CustomNavLink to="/faculty-management">Faculty Management</CustomNavLink>
          <CustomNavLink to="/course-registration">Course Registration</CustomNavLink>
        </div>

        {/* User Avatar */}
        <div className="flex items-center space-x-4">
          {/* Avatar Toggle Button */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer" onClick={() => setIsAvatarMenuOpen((prev) => !prev)}>
                <AvatarImage src="https://github.com/shadcn.png" alt="User Image" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            {/* Avatar Dropdown Menu (Animated with Framer Motion) */}
            <motion.div
              className="absolute right-0 top-16 mt-2 bg-white shadow-lg rounded-lg overflow-hidden"
              initial="closed"
              animate={isAvatarMenuOpen ? 'open' : 'closed'}
              variants={avatarMenuVariants}
            >
              <DropdownMenuContent className="bg-white text-black">
                <DropdownMenuItem onClick={() => setIsAvatarMenuOpen(false)}>Profile</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setIsAvatarMenuOpen(false)}>Settings</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setIsAvatarMenuOpen(false)}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </motion.div>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

// Custom NavLink Component with Framer Motion for Active State
const CustomNavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <NavLink to={to} className="relative px-2 py-1 text-lg font-medium hover:text-blue-500" activeClassName="text-white">
    {({ isActive }) => (
      <div className="relative flex items-center">
        {/* Link text */}
        {children}
        {/* Framer Motion animated border */}
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
            layoutId="underline" 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
        )}
      </div>
    )}
  </NavLink>
);

export default Navbar;
