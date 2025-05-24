import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import DashboardMainContent from "./components/DashboardMainContent"
import { navigationData } from "./data/navigationData"
import { healthData } from "./data/healthData"
import { appointmentsData } from "./data/appointmentsData"
import "./styles/App.css"

function App() {
  return (
    <div className="app">
      
      <Sidebar navigationItems={navigationData.general} toolItems={navigationData.tools} />
      <div className="app__main">
      
        <DashboardMainContent healthData={healthData}   />
      </div>
    </div>
  )
}

export default App
