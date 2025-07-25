import React from 'react'
import "../process/Last.css"
 function Last() {
    return (
        <div>
            <div className='process-all'>
                <div className="process-cntr">
                    <div className="process-cntr2">
                        <h6>Your Message</h6>
                        <textarea id="text-user" placeholder="Type here" />
                        <hr />
                    </div>
                </div>

                <div className="process-bt">
                    <button className="Submitbt" type="submit">Submit</button>
                </div>
            </div>
        </div>
    )
}
export default Last;