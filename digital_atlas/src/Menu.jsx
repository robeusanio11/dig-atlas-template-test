import { useState } from 'react'
import './Menu.css'

function Menu () {
    const [menuActive, setMenuActive] = useState(false)
    const [menuButtonText, setMenuButtonText] = useState('☰')
    
    const toggleMenu = () => setMenuActive(!menuActive)
    
    const toggleMenuButton = () => {
        if (menuActive) {
            setMenuButtonText('-->')
        } else {
            setMenuButtonText('☰')
        }

    }
    
    const handleButtonClick = () => {toggleMenu(); toggleMenuButton();}
    return (
        <>  <div className="floating-menu">
                <button className="menu-button" onClick={handleButtonClick}>{menuButtonText}</button>
                <div className={menuActive ? "menu-content-active" : 'menu-content-inactive'}>
                    <h2>Here is the menu.</h2>
                    <div>Click something to learn more.</div>
                </div>
            </div>
        </>
    )
}

export default Menu