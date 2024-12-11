import React, { useState } from "react";
import SelectItem from "./SelectItem";
import SelectSupplier from "./SelectSupplier";
import SellItemsProgressBar from "../Progress-bars/SellItemsProgressBar";
import ConfirmTransaction from "./ConfirmTransaction";

const SellItemsCarousal = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <SelectItem key="selectItem" />,
    <SelectSupplier key="selectSupplier" />,
    <ConfirmTransaction
      key="selectQuantity"
      onTransactionComplete={() => setCurrentSlide(0)} // Reset slide
    />,
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="relative">
      <div className="mb-4 ml-cust-46 w-96 h-16">
        <SellItemsProgressBar currentSlide={currentSlide} />
      </div>
      <div className="p-6 border rounded-lg bg-gray-100">
        {slides[currentSlide]}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevious}
          disabled={currentSlide === 0}
          className={`btn btn-outline btn-primary ${
            currentSlide === 0 && "opacity-50 cursor-not-allowed"
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentSlide === slides.length - 1}
          className={`btn btn-primary pb-2 ${
            currentSlide === slides.length - 1 && "opacity-50 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SellItemsCarousal;