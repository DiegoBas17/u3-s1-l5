import { Component } from "react";
import { Carousel, Col, Row } from "react-bootstrap";

class MyCarouselItem extends Component {
  state = {
    arrayFilms: [],
  };
  fetchFilms = () => {
    fetch(`http://www.omdbapi.com/?apikey=f1416e37&s=${this.props.nameFilm}`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento dei dati");
        }
      })
      .then((objFilm) => {
        console.log(objFilm);
        this.setState({ arrayFilms: objFilm.Search });
      })
      .catch((err) => alert(err));
  };
  componentDidMount() {
    this.fetchFilms();
  }
  render() {
    const { arrayFilms } = this.state;
    return (
      <Carousel.Item>
        <Row className=" g-1">
          {
            <Col md="3" lg="2">
              <img
                src={arrayFilms[1].Poster}
                alt=""
                crossorigin="anonymous"
                className="img-fluid w-100"
              />
            </Col>
          }
        </Row>
      </Carousel.Item>
    );
  }
}
export default MyCarouselItem;
