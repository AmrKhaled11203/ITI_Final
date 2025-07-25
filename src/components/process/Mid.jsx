import React from 'react'
import "./Mid.css"


function Mid() {

    return (
        <div>
            <section className="process-sec3">
                <div className='process-logo'><img src="/images/logo.png" alt="Logo" /></div>


                <h5>Thank you for your Interest in SquareUp</h5>
                <p>
                    We would love to hear from you and discuss how we can help bring your digital ideas to life.
                    Here are the different ways you can get in touch with us
                </p>
                <button className="process-startbt">Start Project</button>
            </section>

            <form action="https://pj.com" method="post">
                <div className="process-container">
                    <div className="process-nam">
                        <h6>Full Name</h6>
                        <input type="text" placeholder="Type here" required />
                        <hr style={{ width: '300px' }} />
                    </div>
                    <div className="process-nam">
                        <h6>Email</h6>
                        <input type="email" placeholder="Type here" required />
                        <hr style={{ width: '300px' }} />
                    </div>
                </div>
                <div>
                    <div className="process-box col-">
                        <h3>Why are you contacting us?</h3>
                        <div className="process-options">
                            <label className="process-option">
                                <input type="checkbox" defaultChecked /> Web Design
                            </label>
                            <label className="process-option">
                                <input type="checkbox" /> Collaboration
                            </label>
                            <label className="process-option">
                                <input type="checkbox" /> Mobile App Design
                            </label>
                            <label className="process-option">
                                <input type="checkbox" /> Others
                            </label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Mid;
