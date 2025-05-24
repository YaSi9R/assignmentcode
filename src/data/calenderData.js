/**
 * Calendar data including multiple months and appointments
 */
export const calendarData = {
  currentMonth: 9, // October (0-indexed)
  currentYear: 2021,
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  // Generate calendar data for multiple months
  getMonthData: (month, year) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const firstDayOfMonth = new Date(year, month, 1).getDay()
    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null)
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const hasAppointments = Math.random() > 0.7 // Random appointments for demo
      const isToday = month === 9 && year === 2021 && day === 26 // Oct 26, 2021 as today
      const appointmentCount = day === 26 ? 3 : day === 30 ? 4 : hasAppointments ? Math.floor(Math.random() * 3) + 1 : 0

      days.push({
        date: day,
        hasAppointments: appointmentCount > 0,
        isToday: isToday,
        appointments: appointmentCount,
      })
    }

    return days
  },
  todayAppointments: [
    {
      id: 1,
      time: "09:00",
      title: "Dentist Appointment",
      doctor: "Dr. Cameron Williamson",
      type: "consultation",
      status: "confirmed",
      icon: "🦷",
    },
    {
      id: 2,
      time: "11:00",
      title: "Physiotherapy Session",
      doctor: "Dr. Kevin Djones",
      type: "therapy",
      status: "confirmed",
      icon: "🏃",
    },
    {
      id: 3,
      time: "14:00",
      title: "Blood Test",
      doctor: "Lab Technician",
      type: "test",
      status: "pending",
      icon: "🩸",
    },
  ],
  upcomingAppointments: [
    {
      id: 4,
      date: "Tomorrow",
      time: "10:00",
      title: "Cardiologist Consultation",
      doctor: "Dr. Sarah Johnson",
      type: "consultation",
      status: "confirmed",
      icon: "❤️",
    },
    {
      id: 5,
      date: "Oct 28",
      time: "15:30",
      title: "Eye Examination",
      doctor: "Dr. Michael Chen",
      type: "examination",
      status: "confirmed",
      icon: "👁️",
    },
    {
      id: 6,
      date: "Oct 30",
      time: "09:30",
      title: "General Checkup",
      doctor: "Dr. Emily Davis",
      type: "checkup",
      status: "confirmed",
      icon: "🏥",
    },
    {
      id: 7,
      date: "Nov 2",
      time: "11:15",
      title: "Neurologist Visit",
      doctor: "Dr. Robert Wilson",
      type: "consultation",
      status: "pending",
      icon: "🧠",
    },
  ],
}
