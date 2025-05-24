import AnatomySection from "./AnatomySection"
import HealthStatusCards from "./HealthStatusCards"
import "../styles/DashboardOverview.css"
import ActivityCard from "./ActivityCard"



const DashboardOverview = ({ healthData }) => {
  return (
    <>
    <div className="dashboard-overview">
      <AnatomySection anatomyData={healthData.anatomy} />
      <HealthStatusCards healthCards={healthData.statusCards} />
     
    </div>
     <ActivityCard/>
     </>

  )
}

export default DashboardOverview
