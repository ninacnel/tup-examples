import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Children = ({ code, name, price, isAvailable }) => {
    const [availability, setAvailability] = useState(isAvailable);
    const navigate = useNavigate();

    const handleAvailability = () => {
        setAvailability(!availability);
    }

    const handleProductInfoNavigation = () => {
        navigate(`/product/${code}`, {
            state: {
                item: {
                    code: code,
                    name: name,
                    price: price
                }
            }
        });
    }

    return (
        <Card>
            <Card.Header>
                <h2>{name}</h2>
                <h3>${price}</h3>
                <h4>{availability ? 'Available' : 'Sold out'}</h4>
            </Card.Header>
            <Card.Footer>
                <Button variant='outline-info' onClick={handleAvailability}>Update</Button>
                <Button variant='info' onClick={handleProductInfoNavigation}>See product info</Button>
            </Card.Footer>
        </Card>
    );
};

Children.propTypes = {
    code: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    isAvailable: PropTypes.bool,
};

export default Children;
