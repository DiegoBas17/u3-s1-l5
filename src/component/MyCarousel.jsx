import { Component } from "react";
import MyCarouselItem from "./MyCorouselItem";
import { Carousel } from "react-bootstrap";

class MyCarousel extends Component {
  render() {
    return (
      <Carousel fade color="white">
        <Carousel.Item interval={2000}>
          <MyCarouselItem
            nameFilm={this.props.nameFilm}
            indexS={0}
            indexE={5}
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <MyCarouselItem
            nameFilm={this.props.nameFilm}
            indexS={5}
            indexE={11}
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}
export default MyCarousel;
