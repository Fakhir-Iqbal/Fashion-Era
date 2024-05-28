import React, { useState } from "react";
import { Row, Col, Card, Container, Modal, Button } from "react-bootstrap";
import Nav from "../components/Navbar";
import Img from "../assest/Men-Coat.png";
import { FaRegHeart } from "react-icons/fa6";

const products = [
  {
    id: 1,
    name: "Trio Ensemble Coats",
    description: "Stay cozy and stylish in this classic wool coat.",
    price: "$99.99",
    image: Img,
    category: "Men Coat",
  },
  {
    id: 2,
    name: "Trio Ensemble Coats",
    description: "Beat the cold with this fashionable faux fur parka.",
    price: "$149.99",
    image: Img,
    category: "Men Coat",
  },
  // Add more products here...
];

const CoatList = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <div className="bg-gray-200">
      <Nav />
      <Container maxWidth="lg" className="p-4">
        <h1 className="font-bold text-2xl">Mens Collections</h1>
        <Row xs={1} sm={2} md={4} className="g-4 ">
          {products.map((product, idx) => (
            <Col key={idx}>
              <Card className="mt-3" onClick={() => handleCardClick(product)}>
                <Card.Img variant="top" src={product.image} style={{ height: "270px" }} />
                <Card.Body>
                  <Card.Title className="italic">{product.name}</Card.Title>
                  <Card.Text className="d-flex justify-content-between align-items-center text-sm">
                    <span className="mr-auto">Price: {product.price}</span>
                    <FaRegHeart className="mr-3 text-xl text-red-800 cursor-pointer" />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton className="font-poetsen-one h-[50px]">
          <Modal.Title>{selectedProduct && selectedProduct.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <div className="flex flex-col justify-center items-center">
            <div style={{ maxWidth: "100%", height: "250px"}}>
              <img src={selectedProduct.image} alt={selectedProduct.name} style={{ maxWidth: "100%", height: "100%"}} />
            </div>
            <br/>
            <div className="text-start">
              <p>Price: {selectedProduct.price}</p>
              <p>{selectedProduct.description}</p>
            </div>
            <div className="text-start w-full flex items-center justify-center">
  <button className="bg-[#004743] text-white italic h-8">Add to Cart</button>
</div>

          </div>
          
          )}
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default CoatList;
