// src/components/Sidebar.tsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SidebarItem from './SidebarItem.tsx';
import {
  FiHome,
  FiBook,
  FiCalendar,
  FiBarChart2
} from 'react-icons/fi';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true); // Sidebar toggle state
  const location = useLocation(); // Get the current location

  // Menu items for the sidebar
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <FiHome /> },
    { name: 'Courses', path: '/courses', icon: <FiBook /> },
    { name: 'Grades', path: '/grades', icon: <FiBarChart2 /> },
    { name: 'Events', path: '/events', icon: <FiCalendar /> },
  ];

  return (
    <motion.div
      animate={{ width: isOpen ? '200px' : '60px' }} // Animate the sidebar width
      className="bg-blue-800 text-white h-[calc(100vh-72px)] shadow-lg p-4"
    >
      {/* Sidebar Toggle Button */}
      <div className="flex justify-end mb-4">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ?<FaArrowLeft  className="text-2xl" />: <FaArrowRight  className="text-2xl" />  }
        </button>
      </div>

      {/* Sidebar Menu Items */}
      <div className="flex flex-col space-y-2">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.name}
            isOpen={isOpen}
            name={item.name}
            icon={item.icon}
            path={item.path}
            isActive={location.pathname === item.path}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;
