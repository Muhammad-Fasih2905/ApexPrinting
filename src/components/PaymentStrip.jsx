import React from 'react';

const PaymentStrip = () => {
    return (
        <div className="bg-[#f8faff] py-8 px-5 text-center border-t border-[#e8eef8]">
            <p className="text-[#64748b] text-xs font-semibold tracking-wide uppercase mb-3">Secure Payment Methods Accepted</p>
            <div className="flex justify-center gap-3 flex-wrap">
                {['💳 Visa', '💳 Mastercard', '💳 AmEx', '🏦 PayPal', '📱 Apple Pay', '🔒 Stripe'].map(p => (
                    <div key={p} className="bg-white border border-[#e8eef8] px-4 py-2 rounded-lg font-bold text-sm text-[#374151]">{p}</div>
                ))}
            </div>
        </div>
    );
};

export default PaymentStrip;