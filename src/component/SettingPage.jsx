import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class SettingPage extends Component {
  render() {
    return (
      <main>
        <Container class="cotainer my-5">
          <Row class="row justify-content-center">
            <Col sm="10" lg="7">
              <h1>Account</h1>
              <hr />
              <Row>
                <Col lg="4" className="text-body-tertiary">
                  MEMBERSHIP & BILLING
                  <div class="fs-6">
                    <button type="button" class="border-0 px-4 py-2">
                      Cancel Membership
                    </button>
                  </div>
                </Col>
                <Col lg="8">
                  <div class="d-flex justify-content-between">
                    <p class="fw-semibold">student@strive.school</p>
                    <a href="#" class="text-decoration-none d-none d-sm-block">
                      Change account email
                    </a>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="text-body-tertiary">Password: ***********</p>
                    <a href="#" class="text-decoration-none d-none d-sm-block">
                      Change password
                    </a>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="text-body-tertiary">Phone: 322 1456 4567</p>
                    <a href="#" class="text-decoration-none d-none d-sm-block">
                      Change phone number
                    </a>
                  </div>
                  <a href="#" class="text-decoration-none d-sm-none">
                    Change account
                  </a>
                  <hr />
                  <div class="d-flex justify-content-between">
                    <div class="d-inline">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-paypal d-inline"
                        viewBox="0 0 16 16"
                      >
                        <path d="M14.06 3.713c.12-1.071-.093-1.832-.702-2.526C12.628.356 11.312 0 9.626 0H4.734a.7.7 0 0 0-.691.59L2.005 13.509a.42.42 0 0 0 .415.486h2.756l-.202 1.28a.628.628 0 0 0 .62.726H8.14c.429 0 .793-.31.862-.731l.025-.13.48-3.043.03-.164.001-.007a.35.35 0 0 1 .348-.297h.38c1.266 0 2.425-.256 3.345-.91q.57-.403.993-1.005a4.94 4.94 0 0 0 .88-2.195c.242-1.246.13-2.356-.57-3.154a2.7 2.7 0 0 0-.76-.59l-.094-.061ZM6.543 8.82a.7.7 0 0 1 .321-.079H8.3c2.82 0 5.027-1.144 5.672-4.456l.003-.016q.326.186.548.438c.546.623.679 1.535.45 2.71-.272 1.397-.866 2.307-1.663 2.874-.802.57-1.842.815-3.043.815h-.38a.87.87 0 0 0-.863.734l-.03.164-.48 3.043-.024.13-.001.004a.35.35 0 0 1-.348.296H5.595a.106.106 0 0 1-.105-.123l.208-1.32z" />
                      </svg>
                      <p class="d-inline fw-semibold">
                        <em class="fw-bolder me-2">PayPal</em>
                        admin@strive.school
                      </p>
                    </div>
                    <a href="#" class="text-decoration-none text-end">
                      Update payment info
                    </a>
                  </div>
                  <div class="d-flex justify-content-end">
                    <a href="#" class="text-decoration-none">
                      Billing details
                    </a>
                  </div>
                  <hr />
                  <div class="d-flex justify-content-end">
                    <a href="#" class="text-decoration-none">
                      Redeem gift card or promo code
                    </a>
                  </div>
                  <div class="d-flex justify-content-end">
                    <a href="#" class="text-decoration-none">
                      Where to buy gift cards
                    </a>
                  </div>
                </Col>
                <hr class="mt-3 mb-2" />
                <Col lg="4" class="text-body-tertiary">
                  PLAN DETAILS
                </Col>
                <Col lg="8">
                  <div class="d-flex justify-content-between">
                    <div>
                      <strong>Standard </strong>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-badge-hd"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.396 11V5.001H6.209v2.44H3.687V5H2.5v6h1.187V8.43h2.522V11zM8.5 5.001V11h2.188c1.811 0 2.685-1.107 2.685-3.015 0-1.894-.86-2.984-2.684-2.984zm1.187.967h.843c1.112 0 1.622.686 1.622 2.04 0 1.353-.505 2.02-1.622 2.02h-.843z" />
                        <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                      </svg>
                    </div>
                    <a href="#" class="text-decoration-none">
                      Change plan
                    </a>
                  </div>
                </Col>
                <hr class="mt-2" />
                <Col lg="4" class="text-body-tertiary">
                  SETTINGS
                </Col>
                <Col lg="8">
                  <p class="my-1">
                    <a href="#" class="text-decoration-none">
                      Parental controls
                    </a>
                  </p>
                  <p class="my-1">
                    <a href="#" class="text-decoration-none">
                      Test partecipation
                    </a>
                  </p>
                  <p class="my-1">
                    <a href="#" class="text-decoration-none">
                      Menage download devices
                    </a>
                  </p>
                  <p class="my-1">
                    <a href="#" class="text-decoration-none">
                      active a device
                    </a>
                  </p>
                  <p class="my-1">
                    <a href="#" class="text-decoration-none">
                      Recent device streaming activity
                    </a>
                  </p>
                  <p class="my-1">
                    <a href="#" class="text-decoration-none">
                      Sing out of all devices
                    </a>
                  </p>
                </Col>
                <hr class="mt-2" />
                <Col lg="4" class="text-body-tertiary">
                  MY PROFILE
                </Col>
                <Col lg="8">
                  <div class="d-flex justify-content-between">
                    <div>
                      <img
                        src="./assets/kids_icon.png"
                        alt=""
                        style={{ height: "25px" }}
                      />
                      <span class="fw-semibold">Strive Student</span>
                    </div>
                    <div>
                      <p class="my-1">
                        <a href="#" class="text-decoration-none">
                          Manage profiles
                        </a>
                      </p>
                      <p class="my-1">
                        <a href="#" class="text-decoration-none">
                          Add profile email
                        </a>
                      </p>
                    </div>
                  </div>
                  <Row>
                    <Col lg="5">
                      <p class="my-1">
                        <a href="#" class="text-decoration-none">
                          Language
                        </a>
                      </p>
                      <p class="my-1">
                        <a href="#" class="text-decoration-none">
                          Playback settings
                        </a>
                      </p>
                      <p class="my-1">
                        <a href="#" class="text-decoration-none">
                          Subtitle apparance
                        </a>
                      </p>
                    </Col>
                    <div class="col-12 col-lg-7">
                      <p class="my-1">
                        <a href="#" class="text-decoration-none">
                          Viewing activity
                        </a>
                      </p>
                      <p class="my-1">
                        <a href="#" class="text-decoration-none">
                          Ratings
                        </a>
                      </p>
                    </div>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
    );
  }
}
export default SettingPage;
