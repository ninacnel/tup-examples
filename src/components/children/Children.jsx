import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const Children = ({ name, price, isAvailable }) => {
    const [availability, setAvailability] = useState(isAvailable);

    const handleAvailability = () => {
        setAvailability(!availability);
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
            </Card.Footer>
        </Card>
    );
};

Children.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    isAvailable: PropTypes.bool,
};

export default Children;
