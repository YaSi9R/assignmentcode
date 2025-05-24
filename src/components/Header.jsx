import "../styles/Header.css"
import avatar from "../assets/avatar.jpg"

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        
        

        
        <div className="header__search">
          <div className="search-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
              <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" />
            </svg>
            
          </div>
          <input
            type="text"
            placeholder="Search patients, appointments..."
            className="search-input"
            aria-label="Search"
          />
           <button className="header__notification" aria-label="Notifications">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" stroke="currentColor" strokeWidth="2" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span className="notification-badge"></span>
        </button>
        </div>
      </div>

      <div className="header__right">
       
        <div className="header__profile">
          <div className="profile-avatar">
            <img src={avatar} alt="Dr. John Doe" />
          </div>
          
        </div>

        
        <button className="header__add-btn" aria-label="Add new item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header
