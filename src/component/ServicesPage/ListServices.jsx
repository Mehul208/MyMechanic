import React from "react";
import { Link } from "react-router-dom";
import { data } from "../extras/landingPageCard";

const ListServices = () => {
    return (
        <div>
            
            <h1>All Services</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        <Link to={`${item.id}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListServices;
