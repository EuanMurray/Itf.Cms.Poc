import React, { Component } from "react";
import Slider from "react-slick";

export class ImageCarousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const imagesData = JSON.parse(this.props.imageData);

    let images = imagesData.map(imageData => {
      return <img key={imageData.Id} src={imageData.Url} />;
    });

    return <Slider {...settings}>{images}</Slider>;
  }
}
