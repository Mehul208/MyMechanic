import React from "react";
import "./footer.css";
import Logo from "./Logo";
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
            <div className="text-center _lft">
                <Logo />
                <p className="mt-3">
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
