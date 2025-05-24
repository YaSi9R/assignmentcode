import "../styles/AnatomySection.css"
import Anatomy1 from "../assets/Anatomy1.jpg"

const AnatomySection = ({ anatomyData }) => {
  return (
    <div className="anatomy-section">
      <div className="anatomy-container">
        <img
          src={Anatomy1|| "/placeholder.svg?height=320&width=192"}
          alt="Human anatomy illustration"
          className="anatomy-image"
        />

        
        <button className="anatomy-search" aria-label="Examine anatomy">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
            <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>

       
        {anatomyData.indicators.map((indicator, index) => (
          <div
            key={index}
            className={`anatomy-indicator anatomy-indicator--${indicator.type}`}
            style={{
              top: indicator.position.top,
              left: indicator.position.left,
              right: indicator.position.right,
              bottom: indicator.position.bottom,
            }}
          >
            <span className="indicator-icon">{indicator.icon}</span>
            <span className="indicator-text">{indicator.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnatomySection
