import React from "react";
import image1 from "../../images/image_section1.png";
import image2 from "../../images/playIcon.png";

const Section1 = () => {
    return (
        <div>
            <div className="sec1Text">
                <h1>Save Time and Get Your Car Fixed</h1>
                <p>
                    At your home without taking the stress to travel to the
                    workshops.
                </p>
            </div>
            <div className="sec1Image">
                <img src={image1} alt="" />
            </div>

            <div>
                <div className="videoSec">
                    <img
                        src={image2}
                        alt=""
                        style={{ maxWidth: "40px", marginRight: "10px" }}
                    />
                    Watch Video
                </div>
                <div className="btnOrange">Fix Your Car</div>
                <div className="stats">
                    <div>
                        <h1>1.9k+</h1>Customers
                    </div>
                    <div>
                        <h1>20/7</h1>Availability
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;
