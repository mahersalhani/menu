import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const CardSection = ({ itemData }) => {
  return (
    <Row>
      {itemData.length > 0 ? (
        itemData.map((el, i) => {
          return (
            <Col sm="12" className="mb-3" key={i}>
              <Card className="d-flex flex-row">
                <Card.Img className="img-item" variant="top" src={el.img} />
                <Card.Body>
                  <Card.Title className="d-flex justify-content-between align-items-baseline">
                    <div className="food-title">{el.title}</div>
                    <div className="food-price">{el.price}</div>
                  </Card.Title>
                  <Card.Text className="food-descrip py-2">{el.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })
      ) : (
        <h3 className="text-center">لا يوجد اصناف</h3>
      )}
    </Row>
  );
};

export default CardSection;
