import React from "react";
import PropTypes from "prop-types";
import { FormControl, InputGroup } from "react-bootstrap";

const ProductFilter = ({ onSearch, inputValue }) => {
  const handleInputChange = (event) => {
    onSearch(event.target.value);
  };
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Search by product name"
        aria-label="Search by product name"
        aria-describedby="basic-addon2"
        onChange={handleInputChange}
        value={inputValue}
      />
    </InputGroup>
  );
};

export default ProductFilter;

ProductFilter.PropTypes = {
  onSearch: PropTypes.func,
  inputValue: PropTypes.string,
};
