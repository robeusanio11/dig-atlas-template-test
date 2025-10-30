import './TimeSlider.css'
function TimeSlider () {
    return (
        <><div className='time-slider-wrapper'>
            <div className='time-slider-container'>
                <input type='range' className="time-slider">
                </input>
            </div>
        </div>
        </>
    )
}

export default TimeSlider