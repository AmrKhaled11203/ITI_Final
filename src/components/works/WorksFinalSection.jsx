import React from 'react';
import '../works/Works_Style.css';
import maskBackground from '../../assets/images/work_images/Mask__.jpg';
import logoImage from '../../assets/images/Logo.png';

const WorksFinalSection = () => {
    return (
        <section className="last-container">
            <img className="last-backgound" src={maskBackground} alt="Mask background" />

            <div className="last-container-content">
                <img src={logoImage} alt="Logo" className="last-logo" />
            </div>

            <div className="last-container-note">
                <h2 className="last-container-title">
                    Let us Bring your Ideas to Life in the Digital World.
                </h2>

                <p className="last-container-text">
                    No matter which services you choose, we are committed to delivering exceptional results that exceed your
                    expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a
                    unified vision for your digital product.
                </p>

                <a href="#more-works" className="contact-button">Start Project</a>
            </div>
        </section>
    );
};

export default WorksFinalSection;
