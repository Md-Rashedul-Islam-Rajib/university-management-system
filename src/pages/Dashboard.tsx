import DailyNotice from '@/components/shared/DailyNotice'
import StudentCard from '@/components/shared/StudentDetails'
import StudentPortalBanner from '@/components/shared/StudentPortalBanner'


const Dashboard = () => {
  return (
    <div>
        <div className="m-6">
        <StudentPortalBanner />
        </div>
        <div className='grid gap-2 md:gap-4 grid-cols-1 lg:grid-cols-2 '>
          <StudentCard />
          <DailyNotice />
        </div>
      
    </div>
  )
}

export default Dashboard
