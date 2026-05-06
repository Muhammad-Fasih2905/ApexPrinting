import React from 'react';
import Logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#0a1f6b] text-white py-12 px-5 md:px-[5%]">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-10">
                <div>
                    <div className="flex items-center">
                        <img
                            src={Logo}
                            alt="Apex Printing Solutions"
                            className="h-20 md:h-40 w-auto object-contain"
                        />
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed max-w-xs">Professional printing solutions that elevate your brand. Premium materials, expert craftsmanship, and fast delivery — every time.</p>
                </div>
                <div>
                    <h4 className="font-bold text-sm mb-4">Products</h4>
                    <ul className="space-y-2">
                        <li><a href="#products" className="text-white/60 text-sm hover:text-white transition">Business Cards</a></li>
                        <li><a href="#products" className="text-white/60 text-sm hover:text-white transition">Flyers & Posters</a></li>
                        <li><a href="#products" className="text-white/60 text-sm hover:text-white transition">Brochures</a></li>
                        <li><a href="#products" className="text-white/60 text-sm hover:text-white transition">Booklets</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-sm mb-4">Company</h4>
                    <ul className="space-y-2">
                        <li><a href="#why-apex" className="text-white/60 text-sm hover:text-white transition">About Apex</a></li>
                        <li><a href="#process" className="text-white/60 text-sm hover:text-white transition">Our Process</a></li>
                        <li><a href="#contact" className="text-white/60 text-sm hover:text-white transition">Contact Us</a></li>
                        <li><a href="#" className="text-white/60 text-sm hover:text-white transition">Careers</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-sm mb-4">Support</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-white/60 text-sm hover:text-white transition">File Preparation</a></li>
                        <li><a href="#" className="text-white/60 text-sm hover:text-white transition">Shipping Info</a></li>
                        <li><a href="#" className="text-white/60 text-sm hover:text-white transition">FAQs</a></li>
                        <li><a href="#" className="text-white/60 text-sm hover:text-white transition">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-5 border-t border-white/10 max-w-6xl mx-auto">
                <p className="text-white/50 text-xs">© 2026 Apex Printing Solutions. All rights reserved.</p>
                <p className="text-white/50 text-xs">1001 S Main St Ste 500, Kalispell, MT 59901 &nbsp;|&nbsp; +1 (717) 363-3027</p>
            </div>
        </footer>
    );
};

export default Footer;