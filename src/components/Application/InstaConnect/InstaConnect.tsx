import React, { useState, useEffect } from "react";
import { InstaAPI } from "../../../config";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

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
    <InstagramWrap>
      <ul>
        {image
          .filter((img: any, idx: number) => {
            return img && idx < 6;
          })
          .map((el: any) => {
            return (
              <Fade>
                <li>
                  <a href={el.permalink}>
                    {" "}
                    <img src={el.media_url} alt="" />
                  </a>
                </li>
              </Fade>
            );
          })}
      </ul>
    </InstagramWrap>
  );
  // <div id="instagram">{image}</div>;
};
export default InstaConnect;

const InstagramWrap = styled.section`
  width: 100%;
  overflow: hidden;
  margin-top: 65px;
  ul {
    width: 60%;
    height: 50%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px 10px;

    /* display: flex;
    flex-wrap: wrap; */
    justify-content: center;
    /* align-content: space-space; */
    li {
      img {
        width: 100%;
        height: 100%;
        /* margin: 10px; */
      }
    }
  }
`;
