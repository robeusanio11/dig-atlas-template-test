import { useState, useEffect } from 'react'
import './Menu.css'
import { use } from 'react'

function Menu () {
    const [menuActive, setMenuActive] = useState(false)
    const [menuButtonText, setMenuButtonText] = useState('☰')
    
    const toggleMenu = () => setMenuActive(!menuActive, () => { this.toggleMenuButton() })
    
    useEffect(() => {
        toggleMenuButton();
    }, [menuActive])

    const toggleMenuButton = () => {
        setMenuButtonText(menuActive ? '-->' : '☰')
    }
    
    // const handleButtonClick = () => {
    //     toggleMenu(); 
    //     toggleMenuButton();
    // }

    return (
        <>  <div className="floating-menu">
                <button className="menu-button" onClick={toggleMenu}>{menuButtonText}</button>
                <div className={menuActive ? "menu-content-active" : 'menu-content-inactive'}>
                    <h2>Here is the menu.</h2>
                    <div>Click something to learn more.</div>
                </div>
            </div>
        </>
    )
}

export default Menu