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
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  name,
  path,
  icon,
  isOpen,
  isActive,
}) => {
  return (
    <Link to={path}>
      <motion.div
        whileHover={{ scale: 1.05 }} 
        className={`flex items-center p-2 rounded-md cursor-pointer ${
          isActive ? 'bg-blue-600' : 'hover:bg-blue-700'
        }`}
      >
        {/* Icon */}
        <span className="text-xl">{icon}</span>

        {/* Text */}
        {isOpen && <span className="ml-4">{name}</span>}
      </motion.div>
    </Link>
  );
};

export default SidebarItem;
