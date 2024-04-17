import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const NewProduct = ({ onHandleAddNewProduct }) => {
  const [nameEntered, setNameEntered] = useState("");
  const [priceEntered, setPriceEntered] = useState(0);
  const [stockEntered, setStockEntered] = useState(false);

  const handleNameEntered = (event) => {
    setNameEntered(event.target.value);
  };

  const handlePriceEntered = (event) => {
    setPriceEntered(event.target.value);
  };

  const handleStockEntered = (event) => {
    setStockEntered(event.target.value);
  };

  const handleProductSubmit = (event) => {
    event.preventDefault();

    const productData = {
      name: nameEntered,
      price: priceEntered,
      isAvailable: stockEntered,
    };

    onHandleAddNewProduct(productData);

    setNameEntered("");
    setPriceEntered(0);
    setStockEntered(false);
  };

  return (
    <Form onSubmit={handleProductSubmit}>
      <Form.Group controlId="product-name">
        <Form.Label className="text-light">Product Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name..."
          onChange={handleNameEntered}
          value={nameEntered}
        />
      </Form.Group>
      <Form.Group controlId="product-price">
        <Form.Label className="text-light">Price</Form.Label>
        <Form.Control
          type="number"
          onChange={handlePriceEntered}
          value={priceEntered}
        />
      </Form.Group>
      <Form.Group controlId="product-availability">
        <Form.Check
          type="checkbox"
          className="text-light"
          label="Available"
          onChange={handleStockEntered}
          value={stockEntered}
        />
      </Form.Group>
      <Button type="submit" variant="warning" className="mb-3 mt-2 ps-5 pe-5">
        Add
      </Button>
    </Form>
  );
};

export default NewProduct;
