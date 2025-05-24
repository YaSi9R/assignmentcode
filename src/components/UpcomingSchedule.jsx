import SimpleAppointmentCard from "../components/SimpleAppointmentCard"
import "../styles/UpcomingSchedule.css"
import { appointmentsData, upcomingAppointments } from '../data/appointmentsData';
/**
 * UpcomingSchedule Component - Displays upcoming appointments organized by day
 */
const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <div className="schedule-header">
        <h2 className="schedule-title">The Upcoming Schedule</h2>
        
      </div>

      <div className="schedule-content">
        <div className="schedule-day">
          <h3 className="day-title">
            <div className="day-indicator "></div>
            On Thursday
          </h3>
          <div className="appointments-grid">
            {upcomingAppointments.thursday.map((appointment, index) => (
              <SimpleAppointmentCard key={index} appointment={appointment} />
            ))}
          </div>
        </div>

        <div className="schedule-day">
          <h3 className="day-title">
            <div className="day-indicator "></div>
            On Saturday
          </h3>
          <div className="appointments-grid">
            {upcomingAppointments.saturday.map((appointment, index) => (
              <SimpleAppointmentCard key={index} appointment={appointment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingSchedule
