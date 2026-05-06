import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Logo from '../assets/logo.png';

const Navbar = ({ onOpenAuth, mobileMenuOpen, setMobileMenuOpen }) => {
    const { user, logout } = useAuth();
    const [scrolled, setScrolled] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[1000] bg-white/95 backdrop-blur-md border-b border-blue-600/20 px-5 md:px-[5%] flex items-center justify-between h-[85px] transition-shadow duration-300 ${scrolled ? 'shadow-[0_4px_30px_rgba(37,99,235,0.15)]' : ''}`}>
            <div className="flex items-center">
                <img
                    src={Logo}
                    alt="Apex Printing Solutions"
                    className="h-20 md:h-30 w-auto object-contain"
                />
            </div>
            <ul className="hidden md:flex gap-8 list-none items-center">
                <li><a href="#home" className="nav-link">Home</a></li>
                <li><a href="#products" className="nav-link">Products</a></li>
                <li><a href="#process" className="nav-link">Process</a></li>
                <li><a href="#why-apex" className="nav-link">Why Apex</a></li>
                <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
            <div className="hidden md:flex gap-3 items-center">
                {user ? (
                    <>
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1a3eb8] to-[#2563eb] text-white flex items-center justify-center font-bold text-sm">
                            {user.firstName[0].toUpperCase()}
                        </div>
                        <span className="font-semibold text-[#0a1f6b] text-sm">{user.firstName}</span>
                        <button className="btn-outline" onClick={logout}>Sign Out</button>
                    </>
                ) : (
                    <>
                        <button className="btn-outline" onClick={() => onOpenAuth('login')}>Sign In</button>
                        <button className="btn-primary" onClick={() => onOpenAuth('register')}>Get Started</button>
                    </>
                )}
            </div>
            <div className={`hamburger md:hidden ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <span></span><span></span><span></span>
            </div>
            {mobileMenuOpen && (
                <div className="absolute top-[85px] left-0 right-0 bg-white shadow-lg p-6 flex flex-col gap-4 md:hidden z-[998] border-b border-blue-100">
                    <a href="#home" className="text-[#0a1f6b] font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Home</a>
                    <a href="#products" className="text-[#0a1f6b] font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Products</a>
                    <a href="#process" className="text-[#0a1f6b] font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Process</a>
                    <a href="#why-apex" className="text-[#0a1f6b] font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Why Apex</a>
                    <a href="#contact" className="text-[#0a1f6b] font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                    <div className="flex gap-3 pt-2 border-t border-gray-100">
                        {user ? (
                            <button className="btn-outline w-full" onClick={logout}>Sign Out</button>
                        ) : (
                            <>
                                <button className="btn-outline flex-1" onClick={() => { onOpenAuth('login'); setMobileMenuOpen(false); }}>Sign In</button>
                                <button className="btn-primary flex-1" onClick={() => { onOpenAuth('register'); setMobileMenuOpen(false); }}>Get Started</button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;