import React from 'react';
import { PRODUCTS } from '../data/products';

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 px-5 md:px-[5%] bg-gradient-to-br from-[#f8faff] to-white">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
                <div className="reveal">
                    <div className="text-[#2563eb] text-xs font-semibold tracking-[0.15em] uppercase mb-2 text-left">Get In Touch</div>
                    <h2 className="font-['Playfair_Display'] text-[#0a1f6b] text-4xl font-bold mb-4">Let's Bring Your Vision to Print</h2>
                    <p className="text-[#64748b] leading-relaxed mb-6">Have a project in mind? Our team is ready to help you create print materials that make a real impact. Request a quote or reach out directly.</p>
                    <div className="flex gap-4 items-start mb-5">
                        <div className="w-11 h-11 min-w-[44px] bg-[#e8eef8] rounded-xl flex items-center justify-center text-lg">📞</div>
                        <div><p className="font-semibold text-[#0a1f6b]">Phone</p><p className="text-[#64748b] text-sm">+1 (717) 363-3027</p></div>
                    </div>
                    <div className="flex gap-4 items-start mb-5">
                        <div className="w-11 h-11 min-w-[44px] bg-[#e8eef8] rounded-xl flex items-center justify-center text-lg">📍</div>
                        <div><p className="font-semibold text-[#0a1f6b]">Address</p><p className="text-[#64748b] text-sm">1001 S Main St Ste 500, Kalispell, MT 59901</p></div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="w-11 h-11 min-w-[44px] bg-[#e8eef8] rounded-xl flex items-center justify-center text-lg">⏰</div>
                        <div><p className="font-semibold text-[#0a1f6b]">Business Hours</p><p className="text-[#64748b] text-sm">Mon–Fri: 9am–6pm MST</p></div>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100/50 reveal">
                    <h3 className="font-['Playfair_Display'] text-[#0a1f6b] text-2xl mb-5">Request a Quote</h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="form-group"><label>First Name</label><input type="text" placeholder="John" /></div>
                        <div className="form-group"><label>Last Name</label><input type="text" placeholder="Doe" /></div>
                    </div>
                    <div className="form-group mb-4"><label>Email Address</label><input type="email" placeholder="john@company.com" /></div>
                    <div className="form-group mb-4">
                        <label>Product Interested In</label>
                        <select>
                            <option>Select a product...</option>
                            {Object.keys(PRODUCTS).map(p => <option key={p}>{p}</option>)}
                        </select>
                    </div>
                    <div className="form-group mb-5"><label>Message</label><textarea placeholder="Tell us about your project — quantity, sizes, finishes, deadline..."></textarea></div>
                    <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#1a3eb8] to-[#2563eb] text-white font-bold text-base shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">Send Request →</button>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;