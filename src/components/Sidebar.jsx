import { useState } from "react";
import "../styles/Sidebar.css";

const Sidebar = ({ navigationItems, toolItems }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toolsExceptSettings = toolItems.filter(item => item.label !== "Setting");
  const settingsItem = toolItems.find(item => item.label === "Setting");

  return (
    <>
      {/* Navbar / Top bar for mobile with logo + hamburger */}
      <div className="mobile-navbar">
        <h1 className="Sidebar__logo">Healthcare.</h1>
        <button
          className="mobile-menu-btn"
          aria-label={sidebarOpen ? "Close menu" : "Open menu"}
          aria-expanded={sidebarOpen}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {/* Hamburger icon SVG */}
          {sidebarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="feather feather-x"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="feather feather-menu"
              viewBox="0 0 24 24"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "sidebar--open" : "sidebar--closed"}`}>
        <div className="sidebar__content">
          {/* You can remove logo here if you want only mobile navbar to show it */}
          <h1 className="Sidebar__logo desktop-logo">Healthcare.</h1>

          <div className="sidebar__section">
            <h2 className="sidebar__heading">General</h2>
            <nav className="sidebar__nav" role="navigation" aria-label="Main navigation">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className={`sidebar__link ${item.active ? "sidebar__link--active" : ""}`}
                  aria-current={item.active ? "page" : undefined}
                >
                  <span className="sidebar__icon" dangerouslySetInnerHTML={{ __html: item.icon }} />
                  <span className="sidebar__label">{item.label}</span>
                  {item.active && <div className="sidebar__indicator"></div>}
                </a>
              ))}
            </nav>
          </div>

          <div className="sidebar__section">
            <h2 className="sidebar__heading">Tools</h2>
            <nav className="sidebar__nav" role="navigation" aria-label="Tools navigation">
              {toolsExceptSettings.map((item, index) => (
                <a key={index} href={item.url} className="sidebar__link">
                  <span className="sidebar__icon" dangerouslySetInnerHTML={{ __html: item.icon }} />
                  <span className="sidebar__label">{item.label}</span>
                </a>
              ))}
            </nav>
          </div>

          {settingsItem && (
            <a href={settingsItem.url} className="sidebar__link sidebar__link--bottom">
              <span className="sidebar__icon" dangerouslySetInnerHTML={{ __html: settingsItem.icon }} />
              <span className="sidebar__label">{settingsItem.label}</span>
            </a>
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
