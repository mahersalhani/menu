import React from "react";
import { Col, Row } from "react-bootstrap";

const Header = () => {
  let title = "قائمة الطعام";
  return (
    <Row>
      <Col sm="12" className="justify-content-center text-center">
        <div className="title">{title}</div>
        <div className="justify-content-center d-flex">
          <p className="underlone"></p>
        </div>
      </Col>
    </Row>
  );
};

export default Header;
