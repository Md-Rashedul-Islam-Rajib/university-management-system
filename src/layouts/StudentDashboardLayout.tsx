import Sidebar from '@/components/shared/SideBar'
import { Outlet } from 'react-router-dom'

const StudentDashboardLayout = () => {
  return (
    <div className="flex w-screen">
    
    <Sidebar />
      
      <div className="p-6 bg-gray-100 flex-grow">
        <Outlet /> 
      </div>
    
  </div>
  )
}

export default StudentDashboardLayout
