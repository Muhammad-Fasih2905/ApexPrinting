import React, { useState } from 'react';

const ProductImageCarousel = ({ images, productName }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const validImages = images && images.length ? images : null;

    if (!validImages) {
        return (
            <div className="h-48 bg-gradient-to-br from-[#e8eef8] to-[#f0f5ff] flex items-center justify-center">
                <div className="text-6xl">🖨️</div>
            </div>
        );
    }

    const nextSlide = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % validImages.length);
    };

    const prevSlide = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
    };

    return (
        <div className="relative h-48 bg-gradient-to-br from-[#e8eef8] to-[#f0f5ff] overflow-hidden group">
            <img
                src={validImages[currentIndex]}
                alt={`${productName} - view ${currentIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {validImages.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-sm z-10"
                    >
                        ‹
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-7 h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-sm z-10"
                    >
                        ›
                    </button>
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
                        {validImages.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-3' : 'bg-white/50'
                                    }`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductImageCarousel;