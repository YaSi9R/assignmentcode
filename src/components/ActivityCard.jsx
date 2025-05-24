import React from "react";
import "../styles/ActivityCard.css";

const barData = [
  // Each sub-array is for one day (3 bars per day)
  ["height-60", "height-40", "height-80"], // Mon
  ["height-20", "height-90", "height-60"], // Tues
  ["height-40", "height-30", "height-50"], // Wed
  ["height-70", "height-40", "height-60"], // Thurs
  ["height-90", "height-60", "height-80"], // Fri
  ["height-30", "height-20", "height-40"], // Sat
  ["height-60", "height-70", "height-50"], // Sun
];

const ActivityCard = () => {
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  return (
    <div className="activity-card">
      <div className="card-header">
        <h3 className="card-title">Activity</h3>
        <span className="activity-subtitle">3 appointment on this week</span>
      </div>
      <div className="card-content">
        <div className="activity-chart">
          {days.map((day, index) => (
            <div key={day} className="chart-day">
              <div className="chart-bar-group">
                <div className={`bar bar-gray ${barData[index][0]}`}></div>
                <div className={`bar bar-cyan ${barData[index][1]}`}></div>
                <div className={`bar bar-purple ${barData[index][2]}`}></div>
              </div>
              <span className="day-label">{day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
