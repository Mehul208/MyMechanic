import React from "react";
import "./footer.css";
const Footer = () => {
    return (
        <div className="_efb">
            <div className="_efb1">
                <div className="_efb1a">
                    About Us
                    <ul>
                        <li>Whitepaper</li>
                        <li>Blog</li>
                        <li>Activity</li>
                    </ul>
                </div>
                <div className="_efb1a">
                    Support
                    <ul>
                        <li>Help {"&"} support</li>
                        <li> Community</li>
                        <li> Author Profile</li>
                        <li> Contact</li>
                    </ul>
                </div>
            </div>
            <div className="logo text-center _lft">
                <h2 style={{ fontSize: "32px", marginBottom: "15px" }}>
                    <span>My</span>Mechanic
                </h2>
                <p>
                    A Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard.
                    <br /> <br />
                    <span>All rights reserved @ 2022</span>
                </p>
            </div>
        </div>
    );
};

export default Footer;
