import { studentData } from '@/data/student';
import { Event } from '@/types/interfaces';
import React, { useEffect, useState } from 'react'

interface NotificationsProps {
    upcomingevents: Event;
}

const Notifications:React.Fc<NotificationsProps> = () => {

    const { upcomingEvents } = studentData;
    const [currentNotification, setCurrentNotification] = useState<
      string | null
    >(null);
    const [count, setCount] = useState(0);
    const [index, setIndex] = useState(0);
    const [notifications, setNotifications] = useState([]);


    useEffect(() => {
      if (upcomingEvents.length === 0) return; // Exit if there are no events

      const showNotification = () => {
        if (index < upcomingEvents.length) {
          setCurrentNotification(upcomingEvents[index].title);
          setCount((prev) => prev + 1);
          setIndex((prev) => prev + 1);
        }
      };

      // Trigger the first notification after 30 seconds
      const firstTimeout = setTimeout(() => {
        showNotification();
      }, 30000); // 30 seconds

      // Trigger subsequent notifications every 3 minutes
      const subsequentTimeout = setInterval(() => {
        showNotification();
      }, 180000); // 3 minutes

      // Cleanup function to clear the timeouts when the component unmounts
      return () => {
        clearTimeout(firstTimeout);
        clearInterval(subsequentTimeout);
      };
    }, [upcomingEvents, index]);
  return (
    <div>
      
    </div>
  )
}

export default Notifications
