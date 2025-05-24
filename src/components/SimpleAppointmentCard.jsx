import "../styles/SimpleAppointmentCard.css"

/**
 * SimpleAppointmentCard Component - Reusable card for individual appointments
 */
const SimpleAppointmentCard = ({ appointment }) => {
    return (
        <div className={`appointment-card-simple appointment-card-simple--${appointment.type}`}>
            <div className="card-header">
                <h4 className="card-title">{appointment.title}</h4>
                <div className="card-icon">
                    <span role="img" aria-label={appointment.title}>
                        {appointment.icon}
                    </span>
                </div>
                

            </div>
            
            <p className="card-time">{appointment.time}</p>
        </div>
    )
}

export default SimpleAppointmentCard
