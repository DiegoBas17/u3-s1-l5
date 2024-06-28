import { Component } from "react";
import { Container, Dropdown } from "react-bootstrap";
import { Grid } from "react-bootstrap-icons";
import { JustifyLeft } from "react-bootstrap-icons";
import MyCarousel from "./MyCarousel";

class Home extends Component {
  render() {
    return (
      <main>
        <Container className="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center mt-4">
            <h1 className="d-inline">TV Shows</h1>
            <Dropdown className="d-inline">
              <Dropdown.Toggle
                variant="Secondary"
                id="dropdown-basic"
                className="ms-2"
              >
                Genres
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Tv Shows</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Movies</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Recently Added</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <Grid className="border border-1 p-2" width={40} height={30} />
            <JustifyLeft
              className="border border-1 p-2"
              width={40}
              height={30}
            />
          </div>
        </Container>
        <h2>Trending Now</h2>
        <MyCarousel nameFilm={"harry potter"} />
        <h2>Watch It Again</h2>
        <MyCarousel nameFilm={"batman"} />
        <h2>New Releases</h2>
        <MyCarousel nameFilm={"superman"} />
      </main>
    );
  }
}
export default Home;
