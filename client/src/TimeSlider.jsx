import { useState } from 'react'
import './TimeSlider.css'
function TimeSlider({ year, onChangeYear }) {
  const handleChange = (e) => {
    const newYear = e.target.value
    onChangeYear(newYear) // update parent
  }

  return (
    <div className='time-slider-wrapper'>
      <div className='time-slider-container'>
        <input 
          type='range' 
          className="time-slider" 
          min='1400' 
          max='2025'
          value={year || 1500}  // fallback if year is null
          onChange={handleChange}
        />
        <p>{year || 1500}</p>
      </div>
    </div>
  )
}
 export default TimeSlider;