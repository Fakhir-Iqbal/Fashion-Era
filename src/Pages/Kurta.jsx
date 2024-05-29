import React, { useState } from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import ProductModal from "../components/ProductModal";
import { Row, Col, Card, Container } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import Img1 from "../assest/KurtaImage/kurta17.webp";
import Img2 from "../assest/KurtaImage/kurta16.jpg";
import kurta1 from "../assest/KurtaImage/kurta2.jpg"
import kurta2 from "../assest/KurtaImage/kurta3.webp"
import kurta3 from "../assest/KurtaImage/kurta4.jpeg"
import kurta4 from "../assest/KurtaImage/kurta5.webp"
import kurta5 from "../assest/KurtaImage/kurta6.webp"
import kurta6 from "../assest/KurtaImage/kurta7.jpeg"
import kurta7 from "../assest/KurtaImage/kurta8.jpg"
import kurta8 from "../assest/KurtaImage/kurta9.jpg"
import kurta9 from "../assest/KurtaImage/kurta10.jpg"
import kurta10 from "../assest/KurtaImage/kurta11.jpg"
import kurta11 from "../assest/KurtaImage/kurta12.jpg"
import kurta12 from "../assest/KurtaImage/kurta13.jpg"
import kurta13 from "../assest/KurtaImage/kurta14.jpg"
import kurta14 from "../assest/KurtaImage/kurta15.jpg"
import kurta15 from "../assest/KurtaImage/kurta1.webp"


const products = [
  {
    id: 1,
    name: "Urban Elegance Kurta",
    description: "Stay cozy and stylish in this classic Sherwani.",
    price: "$99.99",
    images: [kurta1, Img1, Img2],
    category: "Men Sherwani",
  },
  {
    id: 2,
    name: "Urban Elegance Kurta",
    description: "Stay cozy and stylish in this classic Sherwani.",
    price: "$99.99",
    images: [kurta2, Img1, Img2],
    category: "Men Sherwani",
  },
  {
    id: 3,
    name: "Urban Elegance Kurta",
    description: "Stay cozy and stylish in this classic Sherwani.",
    price: "$99.99",
    images: [kurta3, Img1, Img2],
    category: "Men Sherwani",
  },
  {
    id: 4,
    name: "Urban Elegance Kurta",
    description: "Stay cozy and stylish in this classic Sherwani.",
    price: "$99.99",
    images: [kurta4, Img1, Img2],
    category: "Men Sherwani",
  },
  {
    id: 5,
    name: "Urban Elegance Kurta",
    description: "Stay cozy and stylish in this classic Sherwani.",
    price: "$99.99",
    images: [kurta5, Img1, Img2],
    category: "Men Sherwani",
  },
  {
    id: 6,
    name: "Urban Elegance Kurta",
    description: "Stay cozy and stylish in this classic Sherwani.",
    price: "$99.99",
    images: [kurta6, Img1, Img2],
    category: "Men Sherwani",
  },
  {
    id: 7,
    name: "Urban Elegance Kurta",
    description: "Stay cozy and stylish in this classic Sherwani.",
    price: "$99.99",
    images: [kurta7, Img1, Img2],
    category: "Men Sherwani",
  },
  {
    id: 8,
    name: "Urban Elegance Kurta",
    description: "Stay cozy and stylish in this classic Sherwani.",
    price: "$99.99",
    images: [kurta8, Img1, Img2],
    category: "Men Sherwani",
  },
  {
    id: 9,
    name: "Urban Elegance Kurta",
    description: "Stay cozy and stylish in this classic Sherwani.",
    price: "$99.99",
    images: [kurta9, Img1, Img2],
    category: "Men Sherwani",
  },
  {
    id: 10,
    name: "Urban Elegance Kurta",
    description: "Stay cozy and stylish in this classic Sherwani.",
    price: "$99.99",
    images: [kurta10, Img1, Img2],
    category: "Men Sherwani",
  },
  {
    id: 11,
    name: "Urban Elegance Kurta",
    description: "Stay cozy and stylish in this classic Sherwani.",
    price: "$99.99",
    images: [kurta11, Img1, Img2],
    category: "Men Sherwani",
  },
  {
    id: 12,
    name: "Urban Elegance Kurta",
    description: "Stay cozy and stylish in this classic Sherwani.",
    price: "$99.99",
    images: [kurta12, Img1, Img2],
    category: "Men Sherwani",
  },
  {
    id: 13,
    name: "Urban Elegance Kurta",
    description: "Stay cozy and stylish in this classic Sherwani.",
    price: "$99.99",
    images: [kurta13, Img1, Img2],
    category: "Men Sherwani",
  },
  {
    id: 14,
    name: "Urban Elegance Kurta",
    description: "Stay cozy and stylish in this classic Sherwani.",
    price: "$99.99",
    images: [kurta14, Img1, Img2],
    category: "Men Sherwani",
  },
  {
    id: 15,
    name: "Urban Elegance Kurta",
    description: "Stay cozy and stylish in this classic Sherwani.",
    price: "$99.99",
    images: [kurta15, Img1, Img2],
    category: "Men Sherwani",
  },
  
  
];

const Kurta = () => {

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
    <Nav/>
    <div className="bg-gray-200 pb-5">
        <Container maxWidth="lg" className="p-2 md:p-4">
          <h1 className="font-black text-3xl pt-4">Kurta</h1>
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
       
        <ProductModal
          showModal={showModal}
          setShowModal={setShowModal}
          selectedProduct={selectedProduct}
        />
      </div>
      <Footer/>
    </>
  )
}

export default Kurta