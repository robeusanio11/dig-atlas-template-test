import './HelpModal.css'
import { useState } from 'react'

function HelpModal () {
    const [helpActive, setHelpActive] = useState(true);
    const toggleHelp = () => { setHelpActive(!helpActive); }

    return (
        <>
            {helpActive && <div className="blur-overlay"></div>}
            {/* Button to reopen modal, only shows when modal is hidden */}
            {!helpActive && (
                <button className="help-button-open" onClick={toggleHelp}>
                    Show Help
                </button>
            )}

            {/* The intro/help modal */}
            {helpActive && (
                <div className="help-container-active">
                    <button className="help-button-exit" onClick={toggleHelp}>X</button>
                    <div className="help-content">
                        <h2>Welcome to the digital atlas</h2>
                        <h5>Find this screen again after closing by clicking the button on the bottom left.</h5>
                        <p>tip1</p>
                        <p>tip2</p>
                        <p>tip3</p>
                    </div>
                </div>
            )}
        </>
    )    
}

export default HelpModal