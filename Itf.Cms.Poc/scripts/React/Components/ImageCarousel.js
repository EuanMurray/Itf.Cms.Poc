import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";

import RBCarousel from "react-bootstrap-carousel";

export class ImageCarousel extends Component {
  render() {
    const imagesData = JSON.parse(this.props.imageData);

    let images = imagesData.map(imageData => {
      return (
        <div key={imageData.Id}>
          <div>Photo Credit: {imageData.Credit}</div>
          <img src={imageData.CropUrl} alt={imageData.Caption} />
          <p className="legend">{imageData.Caption}</p>
        </div>
      );
    });

    let imagesBoot = imagesData.map(imageData => {
      return (
        <div key={imageData.Id}>
          <div>Photo Credit: {imageData.Credit}</div>
          <img src={imageData.CropUrl} alt={imageData.Caption} />
          <div className="carousel-caption">{imageData.Caption}</div>
        </div>
      );
    });

    return (
      <div>
        <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
          {images}
        </Carousel>
        <RBCarousel>{imagesBoot}</RBCarousel>
      </div>
    );
  }
}
