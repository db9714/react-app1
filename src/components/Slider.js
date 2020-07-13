import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./css/Slider.module.css";

export default class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3 className={styles.SliderBlock}>1</h3>
          </div>
          <div>
            <h3 className={styles.SliderBlock}>2</h3>
          </div>
          <div>
            <h3 className={styles.SliderBlock}>3</h3>
          </div>
          <div>
            <h3 className={styles.SliderBlock}>4</h3>
          </div>
          <div>
            <h3 className={styles.SliderBlock}>5</h3>
          </div>
          <div>
            <h3 className={styles.SliderBlock}>6</h3>
          </div>
          <div>
            <h3 className={styles.SliderBlock}>7</h3>
          </div>
          <div>
            <h3 className={styles.SliderBlock}>8</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
