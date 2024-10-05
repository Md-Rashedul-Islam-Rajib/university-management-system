
import EventCard from '@/components/shared/EventCard';
import StudentPortalBanner from '@/components/shared/StudentPortalBanner'
import { studentData } from '@/data/student'




const Events = () => {
    const {upcomingEvents} = studentData;
  return (
    <div>
        <div className="m-6">
        <StudentPortalBanner />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {
            upcomingEvents?.map((event)=>
            <EventCard key={event.eventId} event={event} />)
          }
        </div>
      
    </div>
  )
}

export default Events
