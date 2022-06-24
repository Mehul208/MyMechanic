import React, { useState } from "react";
// import ListModal from "./ListModal";

const ServiceCard = ({ id, title, imageLink, features }) => {
    // const [open, setOpen] = useState(false);
    return (
        <div>
            {/* <ListModal
                open={open}
                setOpen={setOpen}
                st={serviceTitle}
                ot={optionTitle}
                id={id}
            /> */}
            <h1>{title}</h1>
            <p>
                <img src={imageLink} alt="" />
            </p>
            <div>
                {/* {features
                    ? features.map((item, i) => (
                          <div key={i}>
                              <h3
                                  onClick={() => {
                                      setOpen(true);
                                      setServiceTitle(nameQuery);
                                      setoptionTitle(item.title);
                                  }}
                              >
                                  {item.title}
                              </h3>
                              <img src={item.image} alt="" />
                              <ul>
                                  {item.points.map((point, k) => (
                                      <li key={k}>{point}</li>
                                  ))}
                              </ul>
                          </div>
                      ))
                    : ""} */}
                <ul>
                    {features ? features.map((point, k) => (
                        <li key={k}>{point}</li>
                    )):""}
                </ul>
            </div>
        </div>
    );
};

export default ServiceCard;
