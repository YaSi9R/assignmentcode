import "../styles/SimpleAppointmentCard.css"

const SimpleAppointmentCard = ({ appointment }) => {
    return (
        <div className={`appointment-card-simple appointment-card-simple--${appointment.type}`}>
            <div className="card-header">
                <h3 className="card-title">{appointment.title}</h3>
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
