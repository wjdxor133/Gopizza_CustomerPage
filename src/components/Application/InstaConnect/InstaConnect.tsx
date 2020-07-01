import React, { useState, useEffect } from "react";
import { InstaAPI } from "../../../config";
import "./InstaConnect.scss";

const InstaConnect = () => {
  const [image, setImage] = useState<any>([]);

  useEffect(() => {
    fetch(`${InstaAPI}`, { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        if (res.data !== undefined && res.data.length > 0) {
          setImage(res.data);
        }
      });
  }, []);

  return (
    <div id="instagram">
      <ul>
        {image
          .filter((img: any, idx: number) => {
            return img && idx < 15;
          })
          .map((el: any) => {
            return (
              <li>
                <a href={el.permalink}>
                  {" "}
                  <img src={el.media_url} alt="" />
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
  // <div id="instagram">{image}</div>;
};

export default InstaConnect;
