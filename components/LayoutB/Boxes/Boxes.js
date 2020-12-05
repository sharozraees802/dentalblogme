import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { Container, Row, Col } from "reactstrap";

import "./boxes.module.css";
import ReactPlayer from "react-player";

const Boxes = (props) => {
  return (
    <div
      className="wrapper container-fluid"
      style={{
        marginTop: "60px",
        display: "grid",
        gridGap: "0",
        justifyItems: "center",
        width: "1200px",
      }}
    >
      <Row>
        <Col>
          <div style={{ width: "350px", minheight: "300px" }}></div>
          <CardImg
            top
            style={{ width: "350px", height: "230px" }}
            src="/static/images/boxes/blog.jpg"
            alt="Card image cap"
          />
          <Card
            style={{
              display: "absolute",
              zIndex: "2",
              width: "350px",
              height: "190px",
              transform: "translateY(-50px)",
              opacity: "0.7",
              textAlign: "center",
            }}
            body
          >
            <CardTitle
              style={{ cursor: "pointer", transform: "translateY(-10px)" }}
            >
              <strong>Articles</strong>
              <hr className="hr" />
            </CardTitle>
            <CardText>
              Take a look at our blog with interesting articles on dental
              imaging.
            </CardText>
          </Card>
        </Col>
        <Col>
          <div style={{ width: "350px", minheight: "300px" }}></div>
          <CardImg
            top
            style={{ width: "350px", height: "230px" }}
            src="/static/images/boxes/classifieds.jpg"
            alt="Card image cap"
          />
          <Card
            style={{
              display: "absolute",
              zIndex: "2",
              width: "350px",
              height: "190px",
              transform: "translateY(-50px)",
              opacity: "0.7",
              textAlign: "center",
            }}
            body
          >
            <CardTitle
              style={{ cursor: "pointer", transform: "translateY(-10px)" }}
            >
              <strong>Classifieds</strong>
              <hr />
            </CardTitle>
            <CardText style={{ paddingBottom: "40px" }}>
              At used dental units section you will find the best available
              offer.
            </CardText>
          </Card>
        </Col>

        <Col>
          <div style={{ width: "350px", minheight: "300px" }}></div>
          <CardImg
            top
            style={{ width: "350px", height: "230px" }}
            src="/static/images/boxes/services.jpg"
            alt="Card image cap"
          />
          <Card
            style={{
              display: "absolute",
              zIndex: "2",
              width: "350px",
              height: "190px",
              transform: "translateY(-50px)",
              opacity: "0.7",
              textAlign: "center",
            }}
            body
          >
            <CardTitle
              style={{ cursor: "pointer", transform: "translateY(-10px)" }}
            >
              <strong>Services</strong>
              <hr />
            </CardTitle>
            <CardText style={{ paddingBottom: "40px" }}>
              We´re ready to support you ASAP. Try out our sevices.
            </CardText>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Boxes;
