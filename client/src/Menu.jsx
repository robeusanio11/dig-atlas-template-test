import { useState, useEffect } from 'react'
import './Menu.css'
// import { use } from 'react'

function Menu ({selectedState}) {
    const [menuActive, setMenuActive] = useState(true); // checks if menu is active or not
    const [menuButtonText, setMenuButtonText] = useState('-->'); // button content
    // toggles menuActive
    const toggleMenu = () => setMenuActive(!menuActive)
    // changes menu button content when toggled
    useEffect(() => { toggleMenuButton(); }, [menuActive])
    // function to set menu button text
    const toggleMenuButton = () => {
        setMenuButtonText(menuActive ? 'X' : '☰');
    }
    
    if (selectedState == null) {
        return (
            <div className="menu-container">
                <button className="menu-button" onClick={toggleMenu}>{menuButtonText}</button>
                <div className={menuActive ? "menu-content-active" : 'menu-content-inactive'}>
                    <h2>Here is the Menu</h2>
                    <h5>Click something to find out more</h5>
                    <p>placeholder paragraph</p>
                    <p>placeholder paragraph</p>
                    <p>placeholder paragraph</p>
                </div>
            </div>
    )
    } else {
        return (
                <div className="menu-container">
                    <button className="menu-button" onClick={toggleMenu}>{menuButtonText}</button>
                    <div className={menuActive ? "menu-content-active" : 'menu-content-inactive'}>
                        <h2>{selectedState.name}</h2>
                        <h5>{selectedState.density}</h5>
                        <p>placeholder paragraph</p>
                        <p>placeholder paragraph</p>
                        <p>placeholder paragraph</p>
                    </div>
                </div>
        )
    }
}

export default Menu