import React from 'react'
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

const ProductInfo = () => {
    const location = useLocation();

    const { code, name, price } = location.state.item;
    return (
        <Container>
            <Card>
                <Card.Header>
                    <h3>Product Info</h3>
                    <p>Code: {code}</p>
                </Card.Header>
                <Card.Body>
                    <h4>Product name {name}</h4>
                    <h4>Product price ${price}</h4>
                    <p>More info about this product should be here</p>
                </Card.Body>
            </Card>
        </Container>
    )
}

// ProductInfo.propTypes = {

// };

export default ProductInfo