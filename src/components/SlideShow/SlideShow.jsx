import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideShow = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <SlideContainer>
      <Slider {...settings}>
        <div>
          <div>
            <img
              src="https://www.gopizza.kr/wp-content/uploads/2020/05/pizza-asian-seafood-1-400x300.jpg"
              alt=""
            ></img>
          </div>
        </div>
        <div>
          <img
            src="https://www.gopizza.kr/wp-content/uploads/2019/03/pizza-classiccheese-400x300.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            src="https://www.gopizza.kr/wp-content/uploads/2020/02/pizza-hamandcheddar-400x300.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            src="https://www.gopizza.kr/wp-content/uploads/2020/03/pizza-pepperoni-mania-400x300.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            src="https://www.gopizza.kr/wp-content/uploads/2019/03/pizza-spicy-cheese-chicken-400x300.jpg"
            alt=""
          ></img>
        </div>
        <div>
          <img
            src="https://www.gopizza.kr/wp-content/uploads/2019/03/pizza-hawaiian-400x300.jpg"
            alt=""
          ></img>
        </div>
      </Slider>
    </SlideContainer>
  );
};

const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1em 0 3em 0;

  img {
    transition: all 0.3s ease;
    border: 1px solid #f86d0d;
    border-radius: 10px;
    position: relative;
    opacity: 0.7;
    margin: 0 auto;
  }

  /* 가운데 이미지 */
  .slick-center img {
    height: 70%;
    opacity: 1;
    border: 1px solid #f86d0d;
    border-radius: 10px;
    /* -ms-transform: scale(1.1); */
    transform: scaleX(1);
    transform: scaleY(1);

    &:hover {
      cursor: pointer;
    }
  }
  .slick-center p {
    height: 15%;
    opacity: 1;
    border: 1px solid #f86d0d;
    border-radius: 10px;
    position: absolute;
    /* -ms-transform: scale(1.1); */
    transform: scaleX(1);
    transform: scaleY(1);
  }

  /* 화살표 버튼 제거 */
  .slick-prev:before {
    display: none;
  }
  .slick-next:before {
    display: none;
  }
`;

export default SlideShow;
