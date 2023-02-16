import React from 'react';
import { Jumbotron, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

function LandingPage() {
  return (
    <div>
      <div className="landing-page">
      <Jumbotron className="text-center">
      <br/><br/>
      <h3 className="display-4"><em>Manipal University Jaipur</em></h3>
        <br/>
        <h4 className="lead"><em>Activity Reporting and Document Storage Page</em></h4>
        <br/>
        <hr className="my-4" />
        <br/>
        <a className="btn btn-secondary btn-lg"  href="/reactdata" role="button"><em>Enter Event Details</em></a>
      </Jumbotron>
      <br />
      <br />
      <div class="picone">

        </div>
        <div class="picthree">

        </div>

        <div class="picfour">

        </div>

        <div class="pictwo">

        </div>
      </div>
    </div>
  );
}

export default LandingPage;
