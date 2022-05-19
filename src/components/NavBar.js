import React, { useRef, useState } from "react";
import { Button, Container, Form, FormControl, Nav, Navbar, Row } from "react-bootstrap";

const NavBar = ({ filterbySearch }) => {
  const [searchVal, setSearchVal] = useState("");

  const onSearch = () => {
    filterbySearch(searchVal);
    setSearchVal("");
  };

  let clickFun = useRef();

  return (
    <Row>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <div className="brand-color" href="#">
            مطعم جديد
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="ابحث.."
                style={{ marginLeft: "10px" }}
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearchVal(e.target.value)}
                value={searchVal}
                onKeyDown={(e) => {
                  if (e.code === "Enter") {
                    e.preventDefault();
                    clickFun.current.click();
                  }
                }}
                //
              />
              <Button onClick={onSearch} ref={clickFun} variant="outline-success">
                ابحث
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default NavBar;
