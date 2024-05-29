import React, { useState } from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import ProductModal from "../components/ProductModal";
import { Row, Col, Card, Container } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import Img1 from "../assest/SherwaniImage/sherwani10.jpg";
import Img2 from "../assest/SherwaniImage/sherwani9.jpg";
import sherwani1 from "../assest/SherwaniImage/sherwani1.jpg"
import sherwani2 from "../assest/SherwaniImage/sherwani2.jpg"
import sherwani3 from "../assest/SherwaniImage/sherwani3.jpg"
import sherwani4 from "../assest/SherwaniImage/sherwani4.jpg"
import sherwani5 from "../assest/SherwaniImage/sherwani5.jpg"
import sherwani6 from "../assest/SherwaniImage/sherwani6.jpg"
import sherwani7 from "../assest/SherwaniImage/sherwani7.jpg"
import sherwani8 from "../assest/SherwaniImage/sherwani8.jpg"

const products = [
  {
    id: 1,
    name: "Imperial Majesty Sherwani",
    description: "Stay cozy and stylish in this classic Sherwani.",
    price: "$99.99",
    images: [sherwani1, Img1, Img2],
    category: "Men Sherwani",
  },
  {
    id: 2,
    name: "Imperial Majesty Sherwani",
    description: "Indulge in timeless comfort and sophistication with our classic Sherwani, blending warmth and style for a truly distinguished look.",
    price: "$99.99",
    images: [sherwani2, Img1, Img2],
    category: "Men Sherwani",
  },
  {
    id: 3,
    name: "Imperial Majesty Sherwani",
    description: "Experience the epitome of timeless comfort and sophistication with our classic Sherwani, seamlessly blending warmth and style to create a truly distinguished appearance.",
    price: "$99.99",
    images: [sherwani3, Img1, Img2],
    category: "Men Sherwani",
  },
  {
    id: 4,
    name: "Imperial Majesty Sherwani",
    description: "Stay cozy and stylish in this classic Sherwani.",
    price: "$99.99",
    images: [sherwani4, Img1, Img2],
    category: "Men Sherwani",
  },
  {
    id: 5,
    name: "Imperial Majesty Sherwani",
    description: "Indulge in timeless comfort and sophistication with our classic Sherwani, blending warmth and style for a truly distinguished look.",
    price: "$99.99",
    images: [sherwani5, Img1, Img2],
    category: "Men Sherwani",
  },
  {
    id: 6,
    name: "Imperial Majesty Sherwani",
    description: "Experience the epitome of timeless comfort and sophistication with our classic Sherwani, seamlessly blending warmth and style to create a truly distinguished appearance.",
    price: "$99.99",
    images: [sherwani6, Img1, Img2],
    category: "Men Sherwani",
  },
  {
    id: 7,
    name: "Imperial Majesty Sherwani",
    description: "Stay cozy and stylish in this classic Sherwani.",
    price: "$99.99",
    images: [sherwani7, Img1, Img2],
    category: "Men Sherwani",
  },
  {
    id: 8,
    name: "Imperial Majesty Sherwani",
    description: "Indulge in timeless comfort and sophistication with our classic Sherwani, blending warmth and style for a truly distinguished look.",
    price: "$99.99",
    images: [sherwani8, Img1, Img2],
    category: "Men Sherwani",
  },
  
];

const Sherwani = () => {

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
          <h1 className="font-black text-3xl pt-4">Sherwani</h1>
          <br />
          <p className="text-xl font-extrabold" >Pakistani Sherwani For Groom</p>
          <p className="text-sm md:text-base" >Sherwani has been the priority wedding attire for mostly all men. Sherwani for men ranges in a variety of options from being the most simplistic to being something extravagantly royal. The dress originated in the early 19th century and has been the Pakistani tradition ever since.</p>
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

          <h1 className="font-black text-3xl pt-5 text-center">Quick Overview</h1>
          <br />
          <p className="text-xl font-extrabold" >History of Sherwani Suit</p>
          <p className="text-sm md:text-base" >Traditionally, a sherwani is originated as a fusion of Shalwar Kameez with British frock and the coat. Muslims living in Northern Indian Subcontinent were associated with the Muslim aristocrats but, later Rajputs adopted this dress and made efforts to add richness and novelty. They felt a need to change the attire a bit and started wearing it over a Kurta and Churidar, Khara Pajama, and a Shalwar. Here, the notable point is, only Indian royals and noble kings espoused this attire in daily routine that surely showcased the prosperity and wealth through the decorative embellishment on the beautiful garment.
As time passes, this wedding attire got more popular in the rest of India, until the 18th century, this dress was opted by locals regardless of social class in various events. If we talk about the most prominent movements following the dressing type, several attendees, including teachers and students who worn this attire in the Aligarh Movement. Though Jawaharlal Nehru was mostly seen in Nehru Jacket Muhammad Ali Jinnah donned this outfit in multiple public appearances. Nehru also pulled down this dress less often but, it was an essential part of his suiting.</p>
          <p className="text-xl font-extrabold" >Sherwani Suit Nowadays</p>
          <p className="text-sm md:text-base" >In recent times, sherwani is considered the most significant formal wedding dress. The long coat-like dress is paired with churidar, shalwar, or straight pants. Jodhpuri and fitted pants are also used as bottoms. A dhoti is also a unique piece of cloth that adds style and glamour. A shawl or scarf is also draped over the shoulder with this suit to give a complete look and accomplished the styling goals.</p>
         
          <p className="text-xl font-extrabold" >Why Sherwani on Weddings?</p>
          <p className="text-sm md:text-base" >In different cultures, the groom must look traditional and classy at Barat. There is no better apparel than a sherwani to be a prominent figure on your wedding day. Even though men have tons of options to choose a wedding dress for themselves, but we suggest they must wear this dress on their special occasion to stand out and make a memorable wedding album.

To get an ethnic and royal look, grooms can choose white, off-white, red, or bright blue colors with heavy embroidery in different styles. Men’s traditional dresses in darker hues with zari or zardozi work weaved or sequined, prints or brocade, precious stones or globules look amazingly imperial and majestic for a wedding or some other festive occasions. Sherwanis for a groom with stoles has become an extraordinary style explanation nowadays. Including a took in a similar shading or differentiating shading would include an additional layer of advancement to your whole ethnic look.

There are several clothing brands available in the market, but some play an integral part in making the most popular wedding dresses for men. This attire can be ordered online. This ethnic attire is usually crafted with elegant thread, zari work, or embroidery. The golden, white, and black sherwani are worn at weddings. The classic outfit for grooms, Sherwanis with their inherent splendors never fails to transform a man into a handsome groom on his most special day. Not only gives you the best look but makes your bride skip a heartbeat as well.</p>
         
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

export default Sherwani