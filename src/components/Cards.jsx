import { Row, Col, Card, Container } from 'react-bootstrap';
import threeCoat from "./../assest/3piece.jpg";
import KidSuit from "./../assest/Kidsuit.jpg";
import Sherwani from "./../assest/Sherwani.jpg";
import Coat from "./../assest/coat.jpg"

// Array of products
const products = [
  { name: '03 Piece Coat', price: '$500', image: threeCoat },
  { name: 'Kid Suit', price: '$300', image: KidSuit },
  { name: 'Groom Sherwani', price: '$800', image: Sherwani },
  { name: 'Coat', price: '$300', image: Coat }
];

const Productcards = () => {
  return (
    <Container maxWidth="lg" >
        <h1 className='font-bold pt-5 text-center' >Trending Collections</h1>
        <p className='text-sm text-gray-400 text-center' >Check out most promising product bought by our buyers</p>
  <Row xs={1} sm={2} md={4} className="g-4">
    {products.map((product, idx) => (
      <Col key={idx}>
        <Card style={{ width: '250px' }}>
          <Card.Img variant="top" src={product.image} style={{ height: '250px', width: '250px' }}/>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              Price: {product.price}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>
  );
};

export default Productcards;
