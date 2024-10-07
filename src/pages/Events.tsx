
import EventCard from '@/components/shared/EventCard';
import StudentPortalBanner from '@/components/shared/StudentPortalBanner'
import { studentData } from '@/data/student'
import { motion } from "framer-motion";




const Events = () => {
    const {upcomingEvents} = studentData;
    const variants = {
      enter: {
        x: "100%",  
        opacity: 0, 
      },
      center: {
        x: 0,       
        opacity: 1, 
      },
      exit: {
        x: "-100%", 
        opacity: 0, 
      },
    };
  return (
    <div>
        <div className="m-6">
        <StudentPortalBanner />
        </div>
        <motion.div
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{ type: "tween", duration: 0.5 }} // Control the transition timing
          >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {
            upcomingEvents?.map((event)=>
            <EventCard key={event.eventId} event={event} />)
          }
        </div>

        
      </motion.div>
    </div>
  )
}

export default Events
