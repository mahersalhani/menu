import { useState } from "react";
import { Container } from "react-bootstrap";
import CardSection from "./components/CardSection";
import Category from "./components/Category";
import Header from "./components/header";
import NavBar from "./components/NavBar";
import { item } from "./data";

function App() {
  const [itemData, setItemData] = useState(item);

  //filter by catagory
  const filterByCatgory = (cat) => {
    if (cat === "الكل") {
      setItemData(item);
    } else {
      const newArr = item.filter((el) => el.catagory === cat);
      setItemData(newArr);
    }
  };

  //get all cat uniqe
  const allCat = ["الكل", ...new Set(item.map((el) => el.catagory))];

  //filter by search
  const filterbySearch = (word) => {
    if (word !== "") {
      const newArr = item.filter((el) => el.title.includes(word) || el.price.includes(word) || el.desc.includes(word));
      setItemData(newArr);
    }
  };

  return (
    <div className="color-body">
      <NavBar filterbySearch={filterbySearch}></NavBar>
      <Container>
        <Header />
        <Category filterByCatgory={filterByCatgory} allCat={allCat} />
        <CardSection itemData={itemData} />
      </Container>
    </div>
  );
}

export default App;
