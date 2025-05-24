import "../styles/HealthStatusCards.css"
import { FaArrowRight } from "react-icons/fa6";

/**
 * HealthStatusCards Component - Displays health status cards for different body parts
 */
const HealthStatusCards = ({ healthCards }) => {
    return (
        <div className="health-status-cards">
            {healthCards.map((card, index) => (
                <div key={index} className={`health-card health-card--${card.status}`}>
                    <div className="health-card__header">
                        <div className="health-card__icon">
                            <span role="img" aria-label={card.title}>
                                {card.icon}
                            </span>
                            <h3 className="health-card__title">{card.title}</h3>
                        </div>
                        <div className="health-card__info">
                            <p className="health-card__date">Date: {card.date}</p>
                        </div>
                    </div>

                    <div className="health-card__progress">

                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${card.percentage}%` }}
                                role="progressbar"
                                aria-valuenow={card.percentage}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                aria-label={`${card.title} health status: ${card.percentage}%`}
                            ></div>
                        </div>
                    </div>
                </div>
            ))}

            <div className="details-button">
                <button>Details<FaArrowRight />
</button>
            </div>
        </div>
    )
}

export default HealthStatusCards
