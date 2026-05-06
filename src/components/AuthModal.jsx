import React, { useState } from 'react';

const AuthModal = ({ tab, onClose, onLogin, onRegister }) => {
    const [activeTab, setActiveTab] = useState(tab);
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [regFirstName, setRegFirstName] = useState('');
    const [regLastName, setRegLastName] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (!loginEmail || !loginPassword) { setError('Please fill in all fields.'); return; }
        const success = onLogin(loginEmail, loginPassword);
        if (!success) setError('Invalid email or password. Please try again.');
        else onClose();
    };

    const handleRegister = () => {
        if (!regFirstName || !regLastName || !regEmail || !regPassword) { setError('Please fill in all fields.'); return; }
        if (regPassword.length < 6) { setError('Password must be at least 6 characters.'); return; }
        const success = onRegister(regFirstName, regLastName, regEmail, regPassword);
        if (!success) setError('An account with this email already exists.');
        else onClose();
    };

    return (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div className="modal">
                <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-light flex items-center justify-center cursor-pointer" onClick={onClose}>✕</button>
                <div className="text-center mb-6">
                    <div className="font-['Bebas_Neue'] text-2xl tracking-wide">APEX</div>
                </div>
                <h2 className="font-['Playfair_Display'] text-[#0a1f6b] text-2xl text-center mb-1">{activeTab === 'login' ? 'Welcome Back' : 'Create Account'}</h2>
                <p className="text-center text-[#64748b] text-sm mb-6">{activeTab === 'login' ? 'Sign in to your Apex account' : 'Join Apex for exclusive printing benefits'}</p>
                <div className="flex bg-gray-light rounded-xl p-1 mb-5">
                    <button className={`flex-1 py-2 text-center rounded-lg text-sm font-semibold transition-all ${activeTab === 'login' ? 'bg-white text-[#0a1f6b] shadow-sm' : 'bg-transparent text-[#64748b]'}`} onClick={() => { setActiveTab('login'); setError(''); }}>Sign In</button>
                    <button className={`flex-1 py-2 text-center rounded-lg text-sm font-semibold transition-all ${activeTab === 'register' ? 'bg-white text-[#0a1f6b] shadow-sm' : 'bg-transparent text-[#64748b]'}`} onClick={() => { setActiveTab('register'); setError(''); }}>Create Account</button>
                </div>
                {activeTab === 'login' ? (
                    <div>
                        <div className="mb-4"><label className="block text-xs font-semibold text-[#0a1f6b] mb-1">Email Address</label><input type="email" className="w-full px-3 py-2 rounded-lg border border-gray-light text-sm bg-off-white focus:border-blue-bright focus:bg-white outline-none" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} /></div>
                        <div className="mb-4"><label className="block text-xs font-semibold text-[#0a1f6b] mb-1">Password</label><input type="password" className="w-full px-3 py-2 rounded-lg border border-gray-light text-sm bg-off-white focus:border-blue-bright focus:bg-white outline-none" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} /></div>
                        {error && <p className="text-red-500 text-xs text-center mb-3">{error}</p>}
                        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#1a3eb8] to-[#2563eb] text-white font-bold text-sm shadow-md hover:-translate-y-0.5 transition-all" onClick={handleLogin}>Sign In →</button>
                        <div className="flex items-center gap-4 my-4"><div className="flex-1 h-px bg-gray-light"></div><span className="text-[#64748b] text-xs">or</span><div className="flex-1 h-px bg-gray-light"></div></div>
                        <p className="text-center text-xs text-[#64748b]">Don't have an account? <a className="text-[#2563eb] font-semibold cursor-pointer" onClick={() => { setActiveTab('register'); setError(''); }}>Create one free</a></p>
                    </div>
                ) : (
                    <div>
                        <div className="grid grid-cols-2 gap-3 mb-4"><div><label className="block text-xs font-semibold text-[#0a1f6b] mb-1">First Name</label><input className="w-full px-3 py-2 rounded-lg border border-gray-light text-sm bg-off-white focus:border-blue-bright focus:bg-white outline-none" value={regFirstName} onChange={e => setRegFirstName(e.target.value)} /></div><div><label className="block text-xs font-semibold text-[#0a1f6b] mb-1">Last Name</label><input className="w-full px-3 py-2 rounded-lg border border-gray-light text-sm bg-off-white focus:border-blue-bright focus:bg-white outline-none" value={regLastName} onChange={e => setRegLastName(e.target.value)} /></div></div>
                        <div className="mb-4"><label className="block text-xs font-semibold text-[#0a1f6b] mb-1">Email Address</label><input type="email" className="w-full px-3 py-2 rounded-lg border border-gray-light text-sm bg-off-white focus:border-blue-bright focus:bg-white outline-none" value={regEmail} onChange={e => setRegEmail(e.target.value)} /></div>
                        <div className="mb-4"><label className="block text-xs font-semibold text-[#0a1f6b] mb-1">Password</label><input type="password" className="w-full px-3 py-2 rounded-lg border border-gray-light text-sm bg-off-white focus:border-blue-bright focus:bg-white outline-none" value={regPassword} onChange={e => setRegPassword(e.target.value)} /></div>
                        {error && <p className="text-red-500 text-xs text-center mb-3">{error}</p>}
                        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#1a3eb8] to-[#2563eb] text-white font-bold text-sm shadow-md hover:-translate-y-0.5 transition-all" onClick={handleRegister}>Create Account →</button>
                        <div className="flex items-center gap-4 my-4"><div className="flex-1 h-px bg-gray-light"></div><span className="text-[#64748b] text-xs">or</span><div className="flex-1 h-px bg-gray-light"></div></div>
                        <p className="text-center text-xs text-[#64748b]">Already have an account? <a className="text-[#2563eb] font-semibold cursor-pointer" onClick={() => { setActiveTab('login'); setError(''); }}>Sign in</a></p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuthModal;