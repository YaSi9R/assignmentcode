import React from "react"
import "../styles/ActivityCard.css"

const ActivityCard = () => {
  return (
    <div className="activity-card">
      <div className="card-header">
        <div className="activity-title-container">
          <h3 className="card-title">Activity</h3>
          <span className="activity-subtitle">4 appointment on this week</span>
        </div>
      </div>
      <div className="card-content">
        <div className="activity-chart">
          {["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"].map((day, index) => (
            <div key={day} className="chart-day">
              <div className="chart-bars">
                <div className={`chart-bar ${index % 2 === 0 ? "bar-cyan" : "bar-blue"} bar-1`}></div>
                <div className={`chart-bar ${index % 3 === 0 ? "bar-cyan" : "bar-blue"} bar-2`}></div>
              </div>
              <span className="chart-day-label">{day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ActivityCard
