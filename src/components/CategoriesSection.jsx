import React from 'react';
import { PRODUCTS } from '../data/products';

const CategoriesSection = ({ onOpenProduct }) => {
    return (
        <section id="products" className="py-20 px-5 md:px-[5%] bg-[#f8faff]">
            <div className="text-center mb-16 reveal">
                <div className="text-[#2563eb] text-xs font-semibold tracking-[0.15em] uppercase mb-2">Our Products</div>
                <h2 className="font-['Playfair_Display'] text-[#0a1f6b] text-[clamp(2rem,4vw,3rem)] font-bold leading-tight">Explore All Categories</h2>
                <p className="text-[#64748b] text-base max-w-lg mx-auto mt-3">From business essentials to packaging — everything printed to perfection.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 max-w-6xl mx-auto">
                {Object.keys(PRODUCTS).map(cat => {
                    const product = PRODUCTS[cat];
                    const firstImage = product.images && product.images.length ? product.images[0] : null;
                    return (
                        <div
                            key={cat}
                            onClick={() => onOpenProduct(cat)}
                            className="bg-white rounded-2xl p-6 text-center cursor-pointer border border-transparent shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2563eb] hover:shadow-xl"
                        >
                            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#e8eef8] to-[#dce8ff] flex items-center justify-center overflow-hidden">
                                {firstImage ? (
                                    <img src={firstImage} alt={cat} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="text-3xl">🖨️</div>
                                )}
                            </div>
                            <div className="text-sm font-semibold text-[#0a1f6b]">{cat}</div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default CategoriesSection;