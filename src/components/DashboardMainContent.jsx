// import DashboardOverview from "./DashboardOverview"
import CalendarView from "./CalendarView"
// import TodayAppointments from "./TodayAppointments"
// import UpcomingAppointments from "./UpcomingAppointments"
// import ActivityFeed from "./ActivityFeed"
import "../styles/DashboardMainContent.css";

/**
 * DashboardMainContent Component - Main area container for dashboard sections
 */
const DashboardMainContent = ({ healthData, appointmentsData, calendarData }) => {
    return (
        <main className="dashboard-main">
            <div className="dashboard-main__header">
                <div className="dashboard-title">
                    <h1>Dashboard</h1>

                </div>
                <div className="dashboard-controls">
                    <span className="week-indicator">This Week</span>

                </div>
            </div>

            <div className="dashboard-main__content">
                {/* Left Column */}
                <div className="dashboard-main__left">
                    {/* <DashboardOverview healthData={healthData} />
                    <ActivityFeed activityData={appointmentsData.activityData} /> */}
                </div>

                {/* Right Column */}
                <div className="dashboard-main__right">
                    <CalendarView calendarData={calendarData} />
                    {/* <TodayAppointments todayAppointments={calendarData.todayAppointments} />
                    <UpcomingAppointments upcomingAppointments={calendarData.upcomingAppointments} /> */}
                </div>
            </div>
        </main>
    )
}

export default DashboardMainContent
