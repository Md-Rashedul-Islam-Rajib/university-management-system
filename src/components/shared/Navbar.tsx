// src/components/Navbar.tsx
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { studentData } from "@/data/student";
import { Event } from "@/types/interfaces";
import {
  Toast,
  ToastProvider,
  ToastTitle,
  ToastDescription,
  ToastViewport,
} from "@radix-ui/react-toast";
import { Card, CardContent } from "@/components/ui/card";
// Animation variants for the mobile menu
const mobileMenuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

// Animation variants for the avatar dropdown menu
const avatarMenuVariants = {
  open: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  closed: { opacity: 0, scale: 0, transition: { duration: 0.2 } }, // Scale down when closing
};

const Navbar: React.FC = () => {
  // State to manage the mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State to manage the avatar menu toggle
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false);

  // State to force re-render and trigger animation for CustomNavLink
  const [animationKey, setAnimationKey] = useState(0);

  // Notification states
  const { upcomingEvents } = studentData;
  const events = upcomingEvents.slice(0, 3);
  const [currentNotification, setCurrentNotification] = useState<string | null>(
    null
  );
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);
  const [notifications, setNotifications] = useState<Event[]>([]); // Store notifications as an array of objects

  useEffect(() => {
    if (events.length === 0) return; // Exit if there are no events

    const showNotification = () => {
      if (index < events.length) {
        const newNotification = events[index];

        // Trigger Sooner Component with the new notification
        setCurrentNotification(newNotification.title);
        setNotifications((prev) => [...prev, newNotification]); // Store the notification
        setCount((prev) => prev + 1); // Increment count

        setIndex((prev) => prev + 1); // Increment index for the next notification
      }
    };

    // Trigger the first notification after 30 seconds
    const firstTimeout = setTimeout(() => {
      showNotification();
    }, 10000); // 10 seconds

    // Trigger subsequent notifications every 3 minutes
    const subsequentTimeout = setInterval(() => {
      showNotification();
    }, 180000); // 3 minutes

    // Cleanup function to clear the timeouts when the component unmounts
    return () => {
      clearTimeout(firstTimeout);
      clearInterval(subsequentTimeout);
    };
  }, [upcomingEvents, index,events]);
  console.log(notifications);

  const handleLinkClick = () => {
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <>
      <nav className="w-full bg-blue-700 text-white shadow-md fixed top-0 z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Mobile Nav Menu Toggle Button */}
          <div className="md:hidden bg-blue-700 flex items-center space-x-4">
            <Button
              size="icon"
              className="block text-xl font-bold"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "✕" : "☰"}
            </Button>

            {/* Mobile Nav Menu */}
            <motion.div
              key={isMenuOpen ? "menu-open" : "menu-closed"}
              className="absolute top-16 left-0 w-full bg-blue-600 shadow-md rounded-xl md:hidden"
              initial="closed"
              animate={isMenuOpen ? "open" : "closed"}
              variants={mobileMenuVariants}
            >
              <div className="flex flex-col p-4">
                <NavLink
                  to="/student-dashboard"
                  className="text-lg font-medium hover:text-blue-500 border-b-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Student Portal
                </NavLink>
                <NavLink
                  to="/faculty-management"
                  className="text-lg font-medium hover:text-blue-500 border-b-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Faculty Overview
                </NavLink>
                <NavLink
                  to="/course-registration"
                  className="text-lg font-medium hover:text-blue-500 border-b-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Enroll in Course
                </NavLink>
              </div>
            </motion.div>
          </div>

          {/* Logo on Mobile */}
          <div className="text-2xl font-bold flex-grow text-center md:text-left md:flex-grow-0">
            <Link to="/" className="hover:text-blue-500">
              Capital University
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex md:space-x-1 lg:space-x-6">
            <CustomNavLink
              to="/student-dashboard"
              onClick={handleLinkClick}
              key={animationKey}
            >
              Student Portal
            </CustomNavLink>
            <CustomNavLink
              to="/faculty-management"
              onClick={handleLinkClick}
              key={animationKey + 1}
            >
              Faculty Overview
            </CustomNavLink>
            <CustomNavLink
              to="/course-registration"
              onClick={handleLinkClick}
              key={animationKey + 2}
            >
              Enroll in Course
            </CustomNavLink>
          </div>

          {/* User Avatar */}
          <div className="flex items-center space-x-4 relative">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar
                  className="cursor-pointer"
                  onClick={() => setIsAvatarMenuOpen((prev) => !prev)}
                >
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="User Image"
                  />
                  {count && (
                    <div className="absolute top-0 z-50 right-0 w-4 h-4 bg-red-700 rounded-full glow-notification border-2 border-white" />
                  )}
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>

              {/* Avatar Dropdown Menu */}
              <motion.div
                key={isAvatarMenuOpen ? "avatar-open" : "avatar-closed"}
                className="absolute right-0 top-16 mt-2 bg-white rounded-lg overflow-hidden"
                initial="closed"
                animate={isAvatarMenuOpen ? "open" : "closed"}
                variants={avatarMenuVariants}
              >
                <DropdownMenuContent className="text-white bg-blue-700 font-semibold">
                  <DropdownMenuItem
                    className="border-b-2"
                    onClick={() => setIsAvatarMenuOpen(false)}
                  >
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="border-b-2"
                    onClick={() => setIsAvatarMenuOpen(false)}
                  >
                    <Popover>
                      <PopoverTrigger>
                        <span className="mr-1">Notifications</span>
                      </PopoverTrigger>
                      <PopoverContent>
                        {notifications?.map((notification) => (
                          <Card key={notification.eventId}>
                            <CardContent>
                              <span>{notification.title}</span>

                              <span>
                                {notification.date.toLocaleDateString()}
                              </span>
                              <span>{notification.description}</span>
                            </CardContent>
                          </Card>
                        ))}
                      </PopoverContent>
                    </Popover>
                    {count > 0 && (
                      <Badge
                        className="text-white font-orbitron glow-notification font-medium"
                        variant={"default"}
                      >
                        {count}
                      </Badge>
                    )}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="border-b-2"
                    onClick={() => setIsAvatarMenuOpen(false)}
                  >
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setIsAvatarMenuOpen(false)}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </motion.div>
            </DropdownMenu>
          </div>
        </div>
        {/* Toast Component for Notifications */}
        <ToastProvider>
          <Toast
            open={!!currentNotification}
            onOpenChange={() => setCurrentNotification(null)}
          >
            <Card>
              <CardContent>
                <ToastTitle className="font-medium text-blue-700">New Notification</ToastTitle>
                <ToastDescription className="font-bold">{currentNotification}</ToastDescription>
              </CardContent>
            </Card>
          </Toast>
          <ToastViewport /> {/* ToastViewport is the container for toasts */}
        </ToastProvider>
      </nav>
    </>
  );
};

// Custom NavLink Component with animation
const CustomNavLink: React.FC<{
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}> = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      isActive
        ? "text-white relative px-2 py-1 text-lg font-medium hover:text-blue-500"
        : "relative px-2 py-1 text-lg font-medium hover:text-blue-500"
    }
    onClick={onClick}
  >
    {({ isActive }) => (
      <div className="relative flex items-center">
        {children}

        {isActive && (
          <motion.div
            key={`underline-${to}`} // Unique key to re-render on every click
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        )}
      </div>
    )}
  </NavLink>
);

export default Navbar;
