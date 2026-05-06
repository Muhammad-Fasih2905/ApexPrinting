import React, { useState, useEffect, useRef } from 'react';
import { PRODUCTS } from '../data/products';

const ProductDetailModal = ({ productName, onClose, onAddToCart }) => {
    const product = PRODUCTS[productName];
    const [selections, setSelections] = useState({});
    const [totalPrice, setTotalPrice] = useState(product.basePrice);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const fileInputRef = useRef(null);

    // Get images array from product (if any)
    const images = product.images && product.images.length ? product.images : null;

    useEffect(() => {
        const initial = {};
        for (const optName in product.options) {
            const firstChoice = Object.keys(product.options[optName])[0];
            initial[optName] = { label: firstChoice, value: product.options[optName][firstChoice] };
        }
        setSelections(initial);
    }, [product]);

    useEffect(() => {
        let sum = product.basePrice;
        for (const key in selections) sum += selections[key].value;
        setTotalPrice(sum);
    }, [selections, product.basePrice]);

    const handleSelectChange = (optName, e) => {
        const selectedLabel = e.target.value;
        const value = product.options[optName][selectedLabel];
        setSelections(prev => ({ ...prev, [optName]: { label: selectedLabel, value } }));
    };

    return (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div className="pd-modal-container">
                <button className="inline-flex items-center gap-1 bg-none border-none cursor-pointer text-[#2563eb] font-semibold text-sm mb-6 transition-all hover:gap-2" onClick={onClose}>← Back to Categories</button>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Left Column: Main Image and Thumbnails */}
                    <div>
                        <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#e8eef8] to-[#f0f5ff] aspect-square flex items-center justify-center border border-gray-light">
                            {images ? (
                                <img
                                    src={images[selectedImageIndex]}
                                    alt={`${productName} - view ${selectedImageIndex + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            ) : (
                                <div className="text-center p-6">
                                    <div className="text-7xl mb-3">🖨️</div>
                                    <p className="text-[#64748b] font-semibold">{productName}</p>
                                </div>
                            )}
                        </div>
                        {/* Thumbnails Row */}
                        {images && images.length > 1 && (
                            <div className="flex gap-2 mt-3">
                                {images.map((img, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setSelectedImageIndex(idx)}
                                        className={`w-16 h-16 rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${selectedImageIndex === idx
                                            ? 'border-[#2563eb] shadow-md'
                                            : 'border-transparent hover:border-[#2563eb]'
                                            }`}
                                    >
                                        <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        )}
                        {/* Fallback thumbnails if no images (optional) - we can show nothing */}
                    </div>

                    {/* Right Column: Product Details */}
                    <div>
                        {/* <div className="inline-block bg-gray-light text-[#1a3eb8] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3">✨ Premium Quality</div> */}
                        <h1 className="font-['Playfair_Display'] text-[#0a1f6b] text-3xl font-bold mb-1">{productName}</h1>
                        <div className="mb-3 text-sm text-[#FF9529]">★★★★★ <span className="text-[#64748b] text-xs">(4.8 · 1,240 reviews)</span></div>
                        <p className="text-[#64748b] text-sm leading-relaxed mb-5 pb-4 border-b border-gray-light">{product.desc}</p>
                        <div className="mb-5"><div className="font-['Bebas_Neue'] text-4xl text-[#0a1f6b]">${totalPrice.toFixed(2)}</div><div className="text-[#64748b] text-xs">Starting price · options adjust the total</div></div>
                        <div className="flex flex-col gap-3 mb-5">
                            {Object.keys(product.options).map(optName => (
                                <div key={optName} className="flex flex-col gap-1">
                                    <label className="text-xs font-bold text-[#0a1f6b] uppercase tracking-wide">{optName}</label>
                                    <select className="px-3 py-2 border border-gray-light rounded-lg text-sm bg-off-white focus:border-blue-bright focus:bg-white outline-none cursor-pointer" value={selections[optName]?.label || ''} onChange={(e) => handleSelectChange(optName, e)}>
                                        {Object.keys(product.options[optName]).map(choice => {
                                            const cost = product.options[optName][choice];
                                            return <option key={choice} value={choice}>{choice}{cost > 0 ? ` (+$${cost.toFixed(2)})` : ''}</option>;
                                        })}
                                    </select>
                                </div>
                            ))}
                        </div>
                        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#1a3eb8] to-[#2563eb] text-white font-bold text-base shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg mb-4" onClick={() => onAddToCart(productName, `$${totalPrice.toFixed(2)}`)}>Add to Cart →</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailModal;