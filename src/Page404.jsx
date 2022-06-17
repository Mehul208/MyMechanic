import React from "react";
import image from "./images/404.png";
const Page404 = () => {
    return (
        <div className="block404">
            <div>
                <img src={image} alt="404 not found pic" />
            </div>
            <button className="btn btn-dark px-4">
                {" "}
                <a href="/" className="text-light fs-5 text-decoration-none">
                    Go Home
                </a>{" "}
            </button>
        </div>
    );
};

export default Page404;
