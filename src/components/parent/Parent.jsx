import { Col, Container, Row } from "react-bootstrap";
import Children from "../children/Children";
import { useContext, useState } from "react";
import { allProducts } from "../data/Data";
import { ThemeContext } from "../services/contexts/theme/ThemeContext";
import { Link } from "react-router-dom";

const Parent = () => {
    const [products, setProducts] = useState(allProducts);
    const { theme} = useContext(ThemeContext);

    return (
        <>
            <h3 className={`${theme === 'dark' ? 'text-light' : 'text-dark'}`}>{theme}</h3>
            <Container className={`border rounded ${theme=== 'light' ? 'bg-light' : 'bg-dark'}`}>
                <h1 className={`${theme === 'light' ? 'text-light' : 'text-dark'}`}>Parent</h1>
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
                <Link to='/product-form' onClick={setProducts}>Add product</Link>
            </Container>
        </>
    );
};

export default Parent;
