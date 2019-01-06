import React from "react";
import { Fragment } from "react";
import { MDBBtn } from "mdbreact";
import {
  MDBIcon, Button, Card, CardBody, CardImage, CardTitle, CardText, Col, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow,
  MDBCol,
  MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBFormInline
} from 'mdbreact';


const Form = props => (

  <Col >
    <Card className="Cards">

      <CardBody>
      
        <CardTitle className="card-title">Weather Forecast</CardTitle>
        <form onSubmit={props.getWeather} className="md-form">
          <input type="text" name="city" placeholder="City..." class="form-control" required />
          <input type="text" name="country" placeholder="Country..." class="form-control" required />

          <div className="link-button">
            <Button type="submit" size="sm" color="light-green" className="button mb-sm clearfix" >Get Weather</Button>
            <Button type="reset" size="sm" color="light-green" className="button mb-sm clearfix">Clear</Button>
          </div>
        </form>
        <hr class="hr-light mb-3 mt-4" />

        <div className="social-icons">

          <div className="text-center d-flex justify-content-center white-label">
            <a href="#!" className="p-2 m-2 social">
              <MDBIcon icon="twitter" className="white-text" />
            </a>
            <a href="#!" className="p-2 m-2">
              <MDBIcon icon="linkedin" className="white-text" />
            </a>
            <a href="#!" className="p-2 m-2">
              <MDBIcon icon="instagram" className="white-text" />
            </a>
          </div>

        </div>

      </CardBody>
    </Card>
  </Col>
);

export default Form;

