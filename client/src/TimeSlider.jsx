import { useState } from 'react'
import './TimeSlider.css'
function TimeSlider ({ onChangeYear }) {
    const [year, setYear] = useState(1500)

    const handleChange = (e) => {
        const newYear = e.target.value
        setYear(newYear)
        onChangeYear(newYear)
    }

    return (
        <>
        <div className='time-slider-wrapper'>
            <div className='time-slider-container'>
                <input 
                    type='range' 
                    className="time-slider" 
                    min ='1500' 
                    max ='2025'
                    value={year}
                    onChange={handleChange}>
                </input>
                <p>{year}</p>
            </div>
        </div>
        </>
    )
}

export default TimeSlider