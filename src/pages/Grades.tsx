import StudentCard from '@/components/shared/StudentDetails'
import StudentPortalBanner from '@/components/shared/StudentPortalBanner'
import React from 'react'

const Grades = () => {
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

export default Grades
