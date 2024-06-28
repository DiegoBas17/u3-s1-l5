import { Component } from "react";
import { Carousel } from "react-bootstrap";
import MyCarouselItem from "./MyCorouselItem";

class MyCarousel extends Component {
  render() {
    return (
      <Carousel>
        <MyCarouselItem nameFilm={this.props.nameFilm} indexS={0} indexE={3} />
        <MyCarouselItem nameFilm={this.props.nameFilm} indexS={3} indexE={6} />
        <MyCarouselItem nameFilm={this.props.nameFilm} indexS={6} indexE={9} />
      </Carousel>
    );
  }
}
export default MyCarousel;
