# 🏥 Healthcare Dashboard UI

This project is a **static React-based dashboard UI** that visually represents a **healthcare management system**. It displays health status indicators, a calendar of appointments, and user activity — all using reusable components and clean design.

---

## 📸 Preview
![Dashboard Screenshot](https://github.com/YaSi9R/assignmentcode/blob/master/Screenshot%202025-05-25%20143727.png?raw=true)



---

## 📁 Component Structure

### 🔷 `DashboardMainContent`
> The main layout container which holds all dashboard elements.

### 📌 Subcomponents:

#### 🫀 `DashboardOverview`
- Presents an overview of the user’s health data.

#### 🧍 `AnatomySection`
- Shows a human anatomy figure with markers:
  - ❤️ Healthy Heart
  - 🫁 Lungs
  - 🦷 Teeth
  - 🦴 Bone
- Each has a label and color-coded status indicator (e.g., red = issue, green = healthy).

#### 🧾 `HealthStatusCards`
- Three cards displaying static status info for:
  - Lungs
  - Teeth
  - Bone
- Includes checkup dates and health bars.

#### 📆 `CalendarView`
- A static monthly calendar showing:
  - **October 2021**
  - Appointment slots (e.g., 09:00, 11:00)
  - Event cards for:
    - 🦷 Dentist: 09:00-11:00 with Dr. Cameron Williamson
    - 💪 Physiotherapy: 11:00-12:00 with Dr. Kevin Djones

#### 📅 `UpcomingSchedule`
- Lists static upcoming appointments:
  - 🧪 Health checkup complete – 11:00 AM
  - 👁️ Ophthalmologist – 14:00 PM
  - ❤️ Cardiologist – 12:00 AM
  - 🧠 Neurologist – 16:00 PM
- Uses reusable cards from `SimpleAppointmentCard`.

#### 📊 `ActivityFeed`
- Static visual representation of weekly activity using a CSS bar chart.
- Text: `3 appointments on this week`.

---

## 🧩 Reusable Components

### 🟪 `SimpleAppointmentCard`
- Used to render each upcoming appointment.
- Props:
  - Title
  - Time
  - Icon (emoji or SVG)

---

## 🛠️ Technologies Used

- React (JSX Components)
- HTML5 + CSS3
- Static Data (no backend)
- Flexbox & Grid layout styling

---

## 📄 Author Info

- **Name**: Mohd Yasir
- **Course**: [Btech CSE III year Student]
- **Submission Date**: [25th May 2025]

---

## 📌 Note

This is a **static UI prototype** for educational/demo purposes only. There is no functionality or backend integration in this version.

---
