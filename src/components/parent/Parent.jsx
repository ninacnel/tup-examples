import { Col, Container, Row } from "react-bootstrap";
import Children from "../children/Children";
import NewProduct from "../newProduct/NewProduct";
import { useState } from "react";
import { allProducts } from "../data/Data";

const Parent = () => {
    const [products, setProducts] = useState(allProducts);

// todo lo relacionado a la creacion/modificacion/eliminacion de productos
// deberia hacerse pegandole a la API y no actualizando un estado

    // const handleAddNewProduct = (newItem) => {
    //     const newProduct = {
    //         code: Math.random().toString(),
    //         ...newItem,
    //     }

    //     setProducts((prevState) => [...prevState, newProduct]);
    // }

    return (
        <>
            <Container className='border rounded bg-dark'>
                <h1 className="text-light">Parent</h1>
                <Row>
                    {products.map((product) => (
                        <Col key={product.code} md={4} className='mb-2'>
                            <Children
                                code={product.code}      
                                name={product.name}
                                price={product.price}
                                isAvailable={product.isAvailable}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Parent;
