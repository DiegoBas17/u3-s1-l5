import { Component } from "react";
import { Carousel } from "react-bootstrap";
import MyCarouselItem from "./MyCorouselItem";

class MyCarousel extends Component {
  render() {
    return (
      <Carousel>
        <MyCarouselItem nameFilm={this.props.nameFilm} />
      </Carousel>
    );
  }
}
export default MyCarousel;
