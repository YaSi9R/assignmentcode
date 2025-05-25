import { useState } from "react"
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { appointmentsData } from "../data/appointmentsData";
import "../styles/CalendarView.css"

interface CalendarViewProps {
  initialDate?: Date
}

const appointments = {
  "2021-10-24": ["10:00", "11:00", "12:00"],
  "2021-10-25": ["08:00", "09:00", "10:00"],
  "2021-10-26": ["12:00", "--", "13:00"],
  "2021-10-27": ["10:00", "11:00", "--"],
  "2021-10-28": ["14:00", "14:00", "16:00"],
  "2021-10-29": ["12:00", "14:00", "15:00"],
  "2021-10-30": ["09:00", "10:00", "11:00"],
}

const highlights = {
  "2021-10-25": ["09:00"],
  "2021-10-27": ["11:00"],
  "2021-10-30": ["12:00", "09:00"],
}

const dayNames = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]

const CalendarView = ({ initialDate = new Date(2021, 9, 25) }: CalendarViewProps) => {
  const [currentDate, setCurrentDate] = useState(initialDate)

  const startOfWeek = new Date(currentDate)
  startOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 1)

  const week = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startOfWeek)
    date.setDate(startOfWeek.getDate() + i)
    return date
  })

  const monthYear = currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })

  const changeWeek = (offset: number) => {
    const newDate = new Date(currentDate)
    newDate.setDate(currentDate.getDate() + offset)
    setCurrentDate(newDate)
  }

  const getKey = (date: Date) => date.toISOString().split("T")[0]
  const getDayLabel = (date: Date) => dayNames[date.getDay() === 0 ? 6 : date.getDay() - 1]

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2 className="calendar-title">{monthYear}</h2>
        <div className="calendar-navigation">
          <button onClick={() => changeWeek(-7)} className="nav-button" aria-label="Previous week">

            <HiArrowNarrowLeft className="nav-icon" />

          </button>
          <button onClick={() => changeWeek(7)} className="nav-button" aria-label="Next week">
            <HiArrowNarrowRight className="nav-icon" />

          </button>
        </div>
      </div>

      <div className="calendar-grid">
        {week.map((date, i) => {
          const key = getKey(date)
          const slots = appointments[key] || []
          const highlighted = highlights[key] || []
          const isHighlightedColumn = date.getDate() === 26 

          return (
             <div key={i} className={`calendar-day ${isHighlightedColumn ? "highlight-column" : ""}`}>
              <div className="day-name">{getDayLabel(date)}</div>
              <div className="date-number">{date.getDate()}</div>
              <div className="time-slots">
                {slots.map((time, j) => (
                  <div
                    key={j}
                    className={`time-slot ${highlighted.includes(time) ? "highlighted" : ""}`}
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
      <div className="appointment-cards">
        {appointmentsData.today.map((appointment, index) => (
          <div key={index} className={`appointment-card appointment-card--${appointment.type}`}>
            <div className="appointment-header">
              <h3 className="appointment-title">{appointment.title}</h3>
              <span className="appointment-icon" role="img" aria-label={appointment.title}>
                {appointment.icon}
              </span>
            </div>
            <p className="appointment-time">{appointment.time}</p>
            <p className="appointment-doctor">{appointment.doctor}</p>
          </div>
        ))}
      </div>



    </div>
  )
}

export default CalendarView
