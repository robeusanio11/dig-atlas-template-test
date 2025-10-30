import './HelpModal.css'
import { useState } from 'react'

function HelpModal () {
    const [helpActive, setHelpActive] = useState(true);
    const toggleHelp = () => { setHelpActive(!helpActive); }

    return (
            <div className="help-container">
                <button className="help-button" onClick={toggleHelp}>X</button>
                <div className={helpActive ? "help-content-active" : 'help-content-inactive'}>
                    <h2>Here is the help menu!</h2>
                    <p>tip1</p>
                    <p>tip2</p>
                    <p>tip3</p>
                </div>
            </div>
    )
}

export default HelpModal