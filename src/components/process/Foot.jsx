import React from 'react'
import MultiRangeSlider from "./Slider"
import "../process/Foot.css"

 function Foot() {
    return (
        <div>

            <div className="cont3">
                <div className="cont">
                    <div className="slider-cnt">

                        <div className="container3">
                            <div className="slider-track"></div>
                            <MultiRangeSlider
                                min={0}
                                max={10000}
                                onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                            />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Foot;
