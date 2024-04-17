import { Col, Container, Row } from "react-bootstrap";
import Children from "../children/Children";
import NewProduct from "../newProduct/NewProduct";
import { useState } from "react";
import { allProducts } from "../data/Data";
import ProductFilter from "../productFilter/ProductFilter";

const Parent = () => {
  const [products, setProducts] = useState(allProducts);
  const [text, setText] = useState("");

  const handleAddNewProduct = (newItem) => {
    const newProduct = {
      code: Math.random().toString(),
      ...newItem,
    };

    setProducts((prevState) => [...prevState, newProduct]);
  };

  const handleInputChange = (inputText) => {
    setText(inputText);
    onHandleFilter(text);
  };

  const productsSearched = products.filter((product) =>
    product.name.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <>
      <Container
        className="border rounded bg-dark"
        style={{
          width: "800px",
          minHeight: "800px",
        }}
      >
        <h1 className="text-light">Parent</h1>
        <ProductFilter onSearch={handleInputChange} inputValue={text} />
        <Row>
          {productsSearched.map((product) => (
            <Col key={product.code} md={4} className="mb-2">
              <Children
                name={product.name}
                price={product.price}
                isAvailable={product.isAvailable}
              />
            </Col>
          ))}
        </Row>
        <NewProduct onHandleAddNewProduct={handleAddNewProduct} />
      </Container>
    </>
  );
};

export default Parent;
