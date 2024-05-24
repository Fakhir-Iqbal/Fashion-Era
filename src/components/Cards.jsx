import { Row, Col, Card, Container } from 'react-bootstrap';
import "./style.css"
import { FaArrowRightLong } from "react-icons/fa6";
import threeCoat from "./../assest/3piece.jpg";
import Coat from "./../assest/coat.jpg";
import Sherwani from "./../assest/Sherwani.jpg";
import Kurta from "./../assest/kurta.jpg"

// Array of products
const products = [
  { name: '03 Piece Coat', price: '$500', image: threeCoat },
  { name: 'Groom Sherwani', price: '$800', image: Sherwani },
  { name: 'Coat', price: '$300', image: Coat },
  { name: 'Kurta', price: '$300', image: Kurta }
];

const Productcards = () => {
  return (
    <Container maxWidth="lg">
        <h1 className='font-bold pt-5 text-center' >Trending Collections</h1>
        <p className='text-sm text-gray-400 text-center' >Check out most promising product bought by our buyers</p>
  <Row xs={1} sm={2} md={4} className="g-4 ">
    {products.map((product, idx) => (
      <Col key={idx}>
        <Card className='mt-3' >
          <Card.Img variant="top" src={product.image} style={{ height: '270px' }}/>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              {/* Price: {product.price} */}
              <a  href='/' className='flex gap-2 text-xs cursor-pointer seemore_links'>See More <FaArrowRightLong className='mt-1' /></a>


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
