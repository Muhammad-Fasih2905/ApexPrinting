import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import ProductImageCarousel from './ProductImageCarousel';

const ProductsSection = ({ onOpenProduct }) => {
    const [activeCat, setActiveCat] = useState('all');
    const categories = ['all', ...Object.keys(PRODUCTS)];
    const productsList = Object.entries(PRODUCTS).map(([name, data]) => ({ name, ...data }));
    const filtered = activeCat === 'all' ? productsList : productsList.filter(p => p.name === activeCat);

    return (
        <div className="py-16 px-5 md:px-[5%] bg-[#f8faff]">
            <div className="text-center mb-12 reveal">
                <div className="text-[#2563eb] text-xs font-semibold tracking-[0.15em] uppercase mb-2">Product Catalog</div>
                <h2 className="font-['Playfair_Display'] text-[#0a1f6b] text-4xl font-bold">Browse Our Collection</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-10">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCat(cat)}
                        className={`px-5 py-2 rounded-full border border-[#2563eb] text-sm font-semibold transition-all ${activeCat === cat
                                ? 'bg-[#2563eb] text-white'
                                : 'bg-transparent text-[#2563eb] hover:bg-[#2563eb] hover:text-white'
                            }`}
                    >
                        {cat === 'all' ? 'All Products' : cat}
                    </button>
                ))}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
                {filtered.map(product => (
                    <div
                        key={product.name}
                        onClick={() => onOpenProduct(product.name)}
                        className="bg-white rounded-2xl overflow-hidden shadow-md border border-blue-100/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-300 cursor-pointer"
                    >
                        <ProductImageCarousel images={product.images} productName={product.name} />
                        <div className="p-5">
                            <div className="inline-block bg-[#e8eef8] text-[#1a3eb8] text-[0.7rem] font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
                                Premium
                            </div>
                            <div className="font-['Playfair_Display'] text-[#0a1f6b] text-xl font-bold mb-2">{product.name}</div>
                            <p className="text-[#64748b] text-sm leading-relaxed mb-4">{product.desc.substring(0, 85)}...</p>
                            <div className="mb-4">
                                <div className="text-xs font-bold text-[#1a3eb8] uppercase tracking-wide mb-1">Starting at</div>
                                <div className="flex gap-1">
                                    <span className="bg-[#e8eef8] text-[#374151] px-3 py-1 rounded text-xs font-medium">
                                        ${product.basePrice.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#1a3eb8] to-[#2563eb] text-white font-semibold text-sm shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
                                Customize →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsSection;