// src/components/Sidebar.tsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import SidebarItem from "./SidebarItem.tsx";
import { FiHome, FiBook, FiCalendar, FiBarChart2 } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  // Menu items for the sidebar
  const menuItems = [
    { name: "Dashboard", path: "dashboard", icon: <FiHome /> },
    { name: "Courses", path: "courses", icon: <FiBook /> },
    { name: "Grades", path: "grades", icon: <FiBarChart2 /> },
    { name: "Events", path: "events", icon: <FiCalendar /> },
  ];

  return (
    <>
      <div className="fixed bottom-0 md:hidden z-50 text-white bg-blue-600 w-screen h-16 shadow-lg p-2 flex justify-around items-center">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.name}
            isOpen={true} // Always show icon and label on mobile
            name={item.name}
            icon={item.icon}
            path={item.path}
            isActive={location.pathname === `/${item.path}`}
            horizontal={true} // Use horizontal layout for mobile
          />
        ))}
      </div>

      <motion.div
        animate={{ width: isOpen ? "200px" : "60px" }}
        className="bg-blue-800 text-white h-[calc(100vh-64px)] shadow-lg p-4 hidden md:block !m-0"
      >
        {/* Sidebar Toggle Button */}
        <div className="flex justify-end mb-4">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaArrowLeft className="text-2xl" />
            ) : (
              <FaArrowRight className="text-2xl" />
            )}
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
    </>
  );
};

export default Sidebar;
