import React from 'react'

const StudentPortalBanner = () => {
  return (
    <div className='rounded-lg bg-gradient-to-r from-[#925FE2] to-[#DFCFF7] shadow-[8px_8px_48px_8px_rgba(0,0,0,0.08)]'>
      <div className='flex-col justify-between'>
        <div>Date & Time</div>
        <div>
            <h1>Welcome back, John!</h1>
            <p>Always stay updated in your student portal</p>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default StudentPortalBanner
