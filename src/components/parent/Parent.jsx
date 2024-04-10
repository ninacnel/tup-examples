import { Col, Container, Row } from "react-bootstrap";
import Children from "../children/Children";
import NewProduct from "../newProduct/NewProduct";
import { useState } from "react";

const allProducts = [
    { code: 1, name: 'Banana', price: 23, isAvailable: true },
    { code: 2, name: 'Burger', price: 30, isAvailable: false },
    { code: 3, name: 'Orange', price: 25, isAvailable: true },
    { code: 4, name: 'Bread', price: 15, isAvailable: false },
];

const Parent = () => {
    const [products, setProducts]= useState(allProducts);

    const handleAddNewProduct = (newItem) => {
        const newProduct = {
            code: Math.random().toString(),
            ...newItem,
        }

        setProducts((prevState) => [...prevState, newProduct]);
    }

    return (
        <>
            <Container className='border rounded bg-dark'>
                <h1 className="text-light">Parent</h1>
                <Row>
                    {products.map((product) => (
                        <Col key={product.code} md={4} className='mb-2'>
                            <Children      
                                name={product.name}
                                price={product.price}
                                isAvailable={product.isAvailable}
                            />
                        </Col>
                    ))}
                </Row>
                <NewProduct onHandleAddNewProduct={handleAddNewProduct}/>
            </Container>
        </>
    );
};

export default Parent;
