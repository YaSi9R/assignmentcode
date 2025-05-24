import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import DashboardMainContent from "./components/DashboardMainContent"
import { navigationData } from "./data/navigationData"
import { healthData } from "./data/healthData"
import { appointmentsData } from "./data/appointmentsData"
import "./styles/App.css"

/**
 * Main App Component - Root component that orchestrates the layout
 * Uses Flexbox for Header, Sidebar, and DashboardMainContent layout
 */
function App() {
  return (
    <div className="app">
      
      <Sidebar navigationItems={navigationData.general} toolItems={navigationData.tools} />
      <div className="app__main">
        {/* <Header /> */}
        <DashboardMainContent healthData={healthData}   />
      </div>
    </div>
  )
}

export default App
