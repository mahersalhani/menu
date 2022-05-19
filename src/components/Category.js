import React from "react";
import { Col, Row } from "react-bootstrap";

const Category = ({ filterByCatgory, allCat }) => {
  const onFilter = (type) => {
    filterByCatgory(type);
  };

  return (
    <Row className="mb-5">
      <Col sm="12" className="d-flex justify-content-center">
        <div>
          {allCat.length > 0
            ? allCat.map((el, i) => {
                return (
                  <button key={i} className="mx-2 btn-cos" onClick={() => onFilter(el)}>
                    {el}
                  </button>
                );
              })
            : null}
        </div>
      </Col>
    </Row>
  );
};

export default Category;
