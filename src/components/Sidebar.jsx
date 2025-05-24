import "../styles/Sidebar.css"

const Sidebar = ({ navigationItems, toolItems }) => {
    console.log("navigationItems", navigationItems);
    console.log("toolItems", toolItems);
    const toolsExceptSettings = toolItems.filter(item => item.label !== "Setting");
    const settingsItem = toolItems.find(item => item.label === "Setting");


    return (
        <aside className="sidebar">  
           
            <h1 className="Sidebar__logo">Healthcare.</h1>
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
        </aside>
    )
}

export default Sidebar
