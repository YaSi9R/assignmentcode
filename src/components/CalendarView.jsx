"use client"

import { useState } from "react"
import "../styles/CalendarView.css"

/**
 * CalendarView Component - Weekly calendar view using provided calendar data
 */
const CalendarView = ({ calendarData }) => {
  const [currentDate, setCurrentDate] = useState(new Date());


  const goToPreviousDay = () => {
  const newDate = new Date(currentDate);
  newDate.setDate(currentDate.getDate() - 1);
  setCurrentDate(newDate);
};

const goToNextDay = () => {
  const newDate = new Date(currentDate);
  newDate.setDate(currentDate.getDate() + 1);
  setCurrentDate(newDate);
};


  // Generate weekly data based on the calendar data
const generateWeeklyData = () => {
  const weekDays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const weekData = [];

  const selectedDate = new Date(currentDate);
  const dayOfWeek = (selectedDate.getDay() + 6) % 7; // Adjust so Monday is 0

  // Get the start of the week (Monday)
  const monday = new Date(selectedDate);
  monday.setDate(selectedDate.getDate() - dayOfWeek);

  for (let i = 0; i < 7; i++) {
    const day = new Date(monday);
    day.setDate(monday.getDate() + i);

    const dayNumber = day.getDate();
    const dayLabel = weekDays[i];

    let timeSlots = [];

    const formattedDate = day.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });

    // Sample appointment logic
    if (dayNumber === 25) {
      timeSlots = [
        { time: "10:00", highlight: false },
        { time: "11:00", highlight: false },
        { time: "12:00", highlight: false },
      ];
    } else if (dayNumber === 26) {
      timeSlots = calendarData.todayAppointments.map((apt) => ({
        time: apt.time,
        highlight: apt.status === "confirmed",
        type: apt.type === "consultation" ? "primary" : "secondary",
        title: apt.title,
      }));
    } else if (dayNumber === 27) {
      timeSlots = [
        { time: "12:00", highlight: false },
        { time: "13:00", highlight: false },
      ];
    } else if (formattedDate === "Oct 28") {
      const apt = calendarData.upcomingAppointments.find((a) => a.date === "Oct 28");
      timeSlots = [
        { time: "10:00", highlight: false },
        {
          time: apt?.time || "15:30",
          highlight: !!apt,
          type: "secondary",
          title: apt?.title,
        },
      ];
    } else if (formattedDate === "Oct 30") {
      const apt = calendarData.upcomingAppointments.find((a) => a.date === "Oct 30");
      timeSlots = [
        { time: "12:00", highlight: true, type: "primary" },
        {
          time: apt?.time || "09:30",
          highlight: !!apt,
          type: "primary",
          title: apt?.title,
        },
        { time: "14:00", highlight: true, type: "primary" },
        { time: "15:00", highlight: false },
      ];
    }

    weekData.push({
      day: dayLabel,
      date: dayNumber,
      fullDate: day,
      isToday: isSameDate(day, new Date()),
      hasAppointments: timeSlots.some((slot) => slot.highlight),
      appointmentCount: timeSlots.filter((slot) => slot.highlight).length,
      timeSlots,
      isHighlighted: timeSlots.filter((slot) => slot.highlight).length > 2,
    });
  }

  return weekData;
};

const isSameDate = (d1, d2) =>
  d1.getDate() === d2.getDate() &&
  d1.getMonth() === d2.getMonth() &&
  d1.getFullYear() === d2.getFullYear();

const weekData = generateWeeklyData();
const monthName = currentDate.toLocaleString('default', { month: 'long' });
    const customWeekOrder = ["Thurs", "Tues", "Sat", "Mon", "Wed", "Sun", "Fri"] // your custom order
  const currentYear=["2025"]
  return (

<div className="calendar-view-weekly">
  <div className="calendar-header-weekly">
    <h2 className="calendar-title-weekly">
      {monthName} {currentYear}
    </h2>
    <div className="calendar-nav-buttons">
      <button className="calendar-nav-weekly" onClick={goToPreviousDay} aria-label="Previous month" type="button">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>
      <button className="calendar-nav-weekly" onClick={goToNextDay} aria-label="Next month" type="button">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>
    </div>
  </div>

  <div className="weekly-calendar-grid">
    {customWeekOrder.map((dayName) => {
      const dayData = weekData.find((d) => d.day === dayName)
      if (!dayData) return null

      return (
        <div
          key={dayData.date}
          className={`weekly-day-column ${dayData.isHighlighted ? "day-highlighted" : ""} ${dayData.isToday ? "day-today" : ""}`}
        >
          <div className="day-header">
            <span className="day-name">{dayData.day}</span>
            <span
              className={`day-number ${dayData.isHighlighted ? "day-number-highlighted" : ""} ${dayData.isToday ? "day-number-today" : ""}`}
            >
              {dayData.date}
            </span>
            {dayData.appointmentCount > 0 && (
              <div className="appointment-count-badge">{dayData.appointmentCount}</div>
            )}
          </div>
          <div className="time-slots">
            {dayData.timeSlots.map((slot, timeIndex) => (
              <div
                key={timeIndex}
                className={`time-slot ${slot.highlight ? `time-slot--${slot.type}` : "time-slot--default"}`}
                title={slot.title || slot.time}
              >
                {slot.time}
              </div>
            ))}
          </div>
        </div>
      )
    })}
  </div>
</div>

  )
}

export default CalendarView
