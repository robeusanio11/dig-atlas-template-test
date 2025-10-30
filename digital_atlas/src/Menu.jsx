import { useState, useEffect } from 'react'
import './Menu.css'
// import { use } from 'react'

function Menu () {
    const [menuActive, setMenuActive] = useState(true); // checks if menu is active or not
    const [menuButtonText, setMenuButtonText] = useState('-->'); // button content
    // toggles menuActive
    const toggleMenu = () => setMenuActive(!menuActive)
    // changes menu button content when toggled
    useEffect(() => { toggleMenuButton(); }, [menuActive])
    // function to set menu button text
    const toggleMenuButton = () => {
        setMenuButtonText(menuActive ? '-->' : '☰');
    }
    
    // const handleButtonClick = () => {
    //     toggleMenu(); 
    //     toggleMenuButton();
    // }

    return (
        <>  <div className="menu-container">
                <button className="menu-button" onClick={toggleMenu}>{menuButtonText}</button>
                <div className={menuActive ? "menu-content-active" : 'menu-content-inactive'}>
                    <h2>Here is the menu!</h2>
                    <h5>Click something to learn more.</h5>
                    <p>placeholder paragraph</p>
                    <p>placeholder paragraph</p>
                    <p>placeholder paragraph</p>
                </div>
            </div>
        </>
    )
}

export default Menu