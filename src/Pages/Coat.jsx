import React, { useState } from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import ProductModal from "../components/ProductModal";
import { Row, Col, Card, Container } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import Img1 from "../assest/smallbackground.jpg";
import Img2 from "../assest/3piece.jpg";
import men1 from "../assest/CoatImage/men1.jpg"
import men2 from "../assest/CoatImage/men2.jpg"
import men3 from "../assest/CoatImage/men3.jpg"
import men4 from "../assest/CoatImage/men4.jpg"
import casual1 from "../assest/CoatImage/casual1.jpg"
import casual2 from "../assest/CoatImage/casual2.jpg"
import casual3 from "../assest/CoatImage/casual3.jpg"
import casual4 from "../assest/CoatImage/casual4.jpg"
import feature1 from "../assest/CoatImage/Feature1.jpg"
import feature2 from "../assest/CoatImage/Feature2.jpg"
import feature3 from "../assest/CoatImage/Feature3.jpg"
import feature4 from "../assest/CoatImage/Feature4.jpg"

const products = [
  {
    id: 1,
    name: "Trio Ensemble Coats",
    description: "Stay cozy and stylish in this classic wool coat.",
    price: "$99.99",
    images: [men1, Img1, Img2],
    category: "Men Coat",
  },
  {
    id: 2,
    name: "Trio Ensemble Coats",
    description: "Beat the cold with this fashionable faux fur parka.",
    price: "$149.99",
    images: [men2, Img1, Img2],
    category: "Men Coat",
  },
  {
    id: 3,
    name: "Trio Ensemble Coats",
    description: "Stay cozy and stylish in this classic wool coat.",
    price: "$99.99",
    images: [men3, Img1, Img2],
    category: "Men Coat",
  },
  {
    id: 4,
    name: "Trio Ensemble Coats",
    description: "Beat the cold with this fashionable faux fur parka.",
    price: "$149.99",
    images: [men4, Img1, Img2],
    category: "Men Coat",
  },
  // Add more products here...
];
const products2 = [
  {
    id: 11,
    name: "Urban Chic Outerwear",
    description: "Stay cozy and stylish in this classic wool coat.",
    price: "$99.99",
    images: [casual1, Img1, Img2],
    category: "Men Coat",
  },
  {
    id: 22,
    name: "Urban Chic Outerwear",
    description: "Beat the cold with this fashionable faux fur parka.",
    price: "$149.99",
    images: [casual2, Img1, Img2],
    category: "Men Coat",
  },
  {
    id: 33,
    name: "Urban Chic Outerwear",
    description: "Stay cozy and stylish in this classic wool coat.",
    price: "$99.99",
    images: [casual3, Img1, Img2],
    category: "Men Coat",
  },
  {
    id: 44,
    name: "Urban Chic Outerwear",
    description: "Beat the cold with this fashionable faux fur parka.",
    price: "$149.99",
    images: [casual4, Img1, Img2],
    category: "Men Coat",
  },
  // Add more products here...
];
const products3 = [
  {
    id: 111,
    name: "Easygoing Classic Outerwear",
    description: "Stay cozy and stylish in this classic wool coat.",
    price: "$99.99",
    images: [feature1, Img1, Img2],
    category: "Men Coat",
  },
  {
    id: 222,
    name: "Easygoing Classic Outerwear",
    description: "Beat the cold with this fashionable faux fur parka.",
    price: "$149.99",
    images: [feature2, Img1, Img2],
    category: "Men Coat",
  },
  {
    id: 333,
    name: "Easygoing Classic Outerwear",
    description: "Stay cozy and stylish in this classic wool coat.",
    price: "$99.99",
    images: [feature3, Img1, Img2],
    category: "Men Coat",
  },
  {
    id: 444,
    name: "Easygoing Classic Outerwear",
    description: "Beat the cold with this fashionable faux fur parka.",
    price: "$149.99",
    images: [feature4, Img1, Img2],
    category: "Men Coat",
  },
  // Add more products here...
];

const CoatList = () => {
  const [favoriteStatus, setFavoriteStatus] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleToggle = (productId) => {
    setFavoriteStatus((prevStatus) => ({
      ...prevStatus,
      [productId]: !prevStatus[productId], // Toggle favorite status for the product
    }));
  };

  const isFavorite = (productId) => {
    return favoriteStatus[productId] || false; // Check if the product is in favorites
  };

  return (
    <>
      <Nav />
      <div className="bg-gray-200 pb-5">
        <Container maxWidth="lg" className="p-2 md:p-4">
          <h1 className="font-black text-3xl pt-4">Mens Collections</h1>
          <Row xs={2} sm={2} md={4} className=" g-2 md:g-3 lg:g-4">
            {products.map((product, idx) => (
              <Col key={idx}>
                <Card className="mt-3">
                  <Card.Img
                    variant="top"
                    src={product.images[0]}
                    class="h-48 md:h-72 cursor-pointer"
                    onClick={() => handleCardClick(product)}
                  />
                  <Card.Body>
                  <Card.Title className="italic">{product.name}</Card.Title>
                    <Card.Text className="d-flex justify-content-between align-items-center text-sm">
                      <span className="mr-auto">Price: {product.price}</span>
                      {isFavorite(product.id) ? (
                        <IoMdHeart
                          className="mr-3 text-xl text-red-800 cursor-pointer"
                          onClick={() => handleToggle(product.id)}
                        />
                      ) : (
                        <FaRegHeart
                          className="mr-3 text-xl text-red-800 cursor-pointer"
                          onClick={() => handleToggle(product.id)}
                        />
                      )}
                      <LuShoppingCart className="mr-3 text-xl cursor-pointer" />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <Container maxWidth="lg" className="p-2 md:p-4">
          <h1 className="font-black text-3xl pt-3">Casual</h1>
          <Row xs={2} sm={2} md={4} className=" g-2 md:g-3 lg:g-4">
            {products2.map((product, idx) => (
              <Col key={idx}>
                <Card className="mt-3">
                  <Card.Img
                    variant="top"
                    src={product.images[0]}
                    class="h-48 md:h-72 cursor-pointer"
                    onClick={() => handleCardClick(product)}
                  />
                  <Card.Body>
                  <Card.Title className="italic">{product.name}</Card.Title>
                    <Card.Text className="d-flex justify-content-between align-items-center text-sm">
                      <span className="mr-auto">Price: {product.price}</span>
                      {isFavorite(product.id) ? (
                        <IoMdHeart
                          className="mr-3 text-xl text-red-800 cursor-pointer"
                          onClick={() => handleToggle(product.id)}
                        />
                      ) : (
                        <FaRegHeart
                          className="mr-3 text-xl text-red-800 cursor-pointer"
                          onClick={() => handleToggle(product.id)}
                        />
                      )}
                      <LuShoppingCart className="mr-3 text-xl cursor-pointer" />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <Container maxWidth="lg" className="p-2 md:p-4">
          <h1 className="font-black text-3xl pt-3">Featured</h1>
          <Row xs={2} sm={2} md={4} className=" g-2 md:g-3 lg:g-4">
            {products3.map((product, idx) => (
              <Col key={idx}>
                <Card className="mt-3">
                  <Card.Img
                    variant="top"
                    src={product.images[0]}
                    class="h-48 md:h-72 cursor-pointer"
                    onClick={() => handleCardClick(product)}
                  />
                  <Card.Body>
                  <Card.Title className="italic">{product.name}</Card.Title>
                    <Card.Text className="d-flex justify-content-between align-items-center text-sm">
                      <span className="mr-auto">Price: {product.price}</span>
                      {isFavorite(product.id) ? (
                        <IoMdHeart
                          className="mr-3 text-xl text-red-800 cursor-pointer"
                          onClick={() => handleToggle(product.id)}
                        />
                      ) : (
                        <FaRegHeart
                          className="mr-3 text-xl text-red-800 cursor-pointer"
                          onClick={() => handleToggle(product.id)}
                        />
                      )}
                      <LuShoppingCart className="mr-3 text-xl cursor-pointer" />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
       
        <ProductModal
          showModal={showModal}
          setShowModal={setShowModal}
          selectedProduct={selectedProduct}
        />
      </div>
      <Footer />
    </>
  );
};

export default CoatList;
