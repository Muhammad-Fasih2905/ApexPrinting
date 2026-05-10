import React from 'react';
import { PRODUCTS } from '../data/products';

const CategoriesSection = ({ onOpenProduct }) => {
    // Group products by category
    const brandIdentity = ['Business Cards', 'Letterhead', 'Envelopes', 'Presentation Folders'];
    const marketingMedia = ['Flyers', 'Posters', 'Brochures', 'Booklets'];
    const businessOperations = ['NCR Forms', 'Notepads', 'Promotional Pads'];
    const packaging = ['Paper Bags'];

    // Helper function to render product grid
    const renderProductGrid = (products) => (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {products.map(cat => {
                const product = PRODUCTS[cat];
                const firstImage = product?.images && product.images.length ? product.images[0] : null;
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
    );

    // Helper function to render section header (non-clickable)
    const SectionHeader = ({ title }) => (
        <div className="text-center mb-8 mt-12 first:mt-0">
            <div className="inline-block bg-gradient-to-r from-[#2563eb] to-[#1a3eb8] px-8 py-3 rounded-full shadow-lg">
                <h3 className="text-white text-lg md:text-xl font-bold tracking-wide uppercase">
                    {title}
                </h3>
            </div>
        </div>
    );

    return (
        <section id="products" className="py-20 px-5 md:px-[5%] bg-[#f8faff]">
            {/* Main Section Header */}
            <div className="text-center mb-16 reveal">
                <div className="text-[#2563eb] text-xs font-semibold tracking-[0.15em] uppercase mb-2">Our Products</div>
                <h2 className="font-['Playfair_Display'] text-[#0a1f6b] text-[clamp(2rem,4vw,3rem)] font-bold leading-tight">Explore All Categories</h2>
                <p className="text-[#64748b] text-base max-w-lg mx-auto mt-3">From business essentials to packaging — everything printed to perfection.</p>
            </div>

            {/* Brand Identity Suite */}
            <SectionHeader title="Brand Identity Suite" />
            {renderProductGrid(brandIdentity)}

            {/* Marketing & Promotional Media */}
            <SectionHeader title="Marketing & Promotional Media" />
            {renderProductGrid(marketingMedia)}

            {/* Business Operations & Logistics */}
            <SectionHeader title="Business Operations & Logistics" />
            {renderProductGrid(businessOperations)}

            {/* Packaging */}
            <SectionHeader title="Packaging" />
            {renderProductGrid(packaging)}
        </section>
    );
};

export default CategoriesSection;