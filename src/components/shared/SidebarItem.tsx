// src/components/SidebarItem.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface SidebarItemProps {
  name: string;
  path: string;
  icon: React.ReactNode;
  isOpen: boolean;
  isActive: boolean;
  horizontal?: boolean; // New prop to handle horizontal layout
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  name,
  path,
  icon,
  isOpen,
  isActive,
  horizontal = false, // Default is vertical layout
}) => {
  return (
    <Link to={`${path}`} className="relative">
      <motion.div
        whileHover={{ scale: 1.15 }} // Hover effect
        className={`flex items-center cursor-pointer p-2 rounded-md transition-all duration-200 ${
          isActive ? 'text-gray-400 font-bold' : 'text-white'
        } ${horizontal ? 'flex-col space-y-1' : 'flex'} ${isOpen ? 'space-x-2' : 'justify-center'}`}
      >
        {/* Icon */}
        <span className={`text-xl ml-2 ${isActive? 'scale-125': 'scale-100'}`}>{icon}</span>

        {/* Text */}
        {isOpen && <span className={`${horizontal ? 'text-xs' : 'ml-2'}`}>{name}</span>}
      </motion.div>
    </Link>
  );
};

export default SidebarItem;
