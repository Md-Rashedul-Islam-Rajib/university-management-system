import StudentCard from '@/components/shared/StudentDetails'
import StudentPortalBanner from '@/components/shared/StudentPortalBanner'


const Events = () => {
  return (
    <div>
        <div className="m-6">
        <StudentPortalBanner />
        </div>
        <div>
          <StudentCard />
        </div>
      
    </div>
  )
}

export default Events
