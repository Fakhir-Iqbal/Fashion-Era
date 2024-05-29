import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Modal } from "react-bootstrap"; 

const ProductModal = ({ showModal, setShowModal, selectedProduct }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedProduct.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedProduct.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton className="font-poetsen-one h-[50px]">
        <Modal.Title>{selectedProduct && selectedProduct.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selectedProduct && (
          <div className="flex flex-col justify-center items-center">
            <div className="max-w-full h-64 text-gray-400 text-4xl flex justify-center space-x-2">
              <button onClick={handlePreviousImage}>
                <FaChevronLeft />
              </button>
              <img
                src={selectedProduct.images[currentImageIndex]}
                alt={selectedProduct.name}
                className="h-full w-[250px]"
              />
              <button onClick={handleNextImage}>
                <FaChevronRight />
              </button>
            </div>
            <br />
            <div className="text-start">
              <p>{selectedProduct.description}</p>
            </div>
            <div className="text-start w-full flex items-center justify-center">
              <button className="bg-[#004743] text-white italic h-10 w-[70%] cursor-pointer rounded-md flex items-center justify-center gap-3">
                Add to Cart / &nbsp;{selectedProduct.price}
              </button>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ProductModal;
