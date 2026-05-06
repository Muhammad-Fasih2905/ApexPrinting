import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyApex from './components/WhyApex';
import CategoriesSection from './components/CategoriesSection';
import ProductsSection from './components/ProductsSection';
import ProcessSection from './components/ProcessSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import ProductDetailModal from './components/ProductDetailModal';
import Preloader from './components/Preloader';

const AppContent = () => {
  const { login, register } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authTab, setAuthTab] = useState('login');
  const [productModal, setProductModal] = useState(null);
  const [toast, setToast] = useState({ message: '', visible: false });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // New state

  const showToastMsg = (msg) => {
    setToast({ message: msg, visible: true });
    setTimeout(() => setToast({ message: '', visible: false }), 3000);
  };

  const addToCart = (productName, price) => {
    const user = JSON.parse(sessionStorage.getItem('apex_current_user') || 'null');
    if (!user) {
      setShowAuthModal(true);
      showToastMsg('Please sign in to add items to cart.');
      return;
    }
    showToastMsg(`${productName} added to cart — ${price}!`);
  };

  // If preloader is still active, show it
  if (isLoading) {
    return <Preloader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <>
      <Navbar onOpenAuth={(tab) => { setAuthTab(tab); setShowAuthModal(true); }} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <WhyApex />
      <CategoriesSection onOpenProduct={(productName) => setProductModal(productName)} />
      <ProductsSection onOpenProduct={(productName) => setProductModal(productName)} />
      <ProcessSection />
      <ContactSection />
      <Footer />
      {showAuthModal && (
        <AuthModal
          tab={authTab}
          onClose={() => setShowAuthModal(false)}
          onLogin={login}
          onRegister={register}
        />
      )}
      {productModal && (
        <ProductDetailModal
          productName={productModal}
          onClose={() => setProductModal(null)}
          onAddToCart={addToCart}
        />
      )}
      {toast.visible && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#0a1f6b] text-white px-6 py-3 rounded-full text-sm font-semibold z-[9999] shadow-lg transition-opacity duration-400 pointer-events-none whitespace-nowrap">
          {toast.message}
        </div>
      )}
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;