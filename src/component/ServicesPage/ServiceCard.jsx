import React, { useState } from "react";
import ListModal from "./ListModal";

const ServiceCard = ({id, title, image, desc, list, nameQuery }) => {
    const [open, setOpen] = useState(false);
    const [serviceTitle, setServiceTitle] = useState("");
    const [optionTitle, setoptionTitle] = useState("");
    return (
        <div>
            <ListModal
                open={open}
                setOpen={setOpen}
                st={serviceTitle}
                ot={optionTitle}
                id={id}
            />
            <h1>{title}</h1>
            <p>
                <img src={image} alt="" /> <br /> {desc}
            </p>
            <div>
                {list
                    ? list.map((item, i) => (
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
                    : ""}
            </div>
        </div>
    );
};

export default ServiceCard;
