import React from 'react'
import Sidebar from './Sidebar'
import UpcomingLaunch from './UpcomingLaunch'
import LaunchFacilities from './LaunchFacilities'
import PreviousLaunch from './PreviousLaunch'
import Starlink from './Starlink'

function Dashboard() {
  return (
    <>

      <div className='sedha'>
        <div className='left'>
          <UpcomingLaunch />
          <PreviousLaunch />

        </div>
        <div>
          <LaunchFacilities />
          <Starlink />
        </div>
      </div>
    </>
  )
}

export default Dashboard