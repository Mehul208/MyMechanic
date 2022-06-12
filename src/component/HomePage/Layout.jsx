import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";

const Layout = () => {
    return (
        <div>
            <Section1 /> {/* Head Section */}
            <Section2 /> {/* Offers or searchbar */}
            <Section3 /> {/* Nearby Services Cards */}
            <Section4 /> {/* Some info/reviews */}
        </div>
    );
};

export default Layout;
