import React, { useState } from 'react';
import { FaPaypal, FaStripe, FaCcAmazonPay, FaCcApplePay, FaCcVisa, FaBitcoin, FaCcMastercard } from 'react-icons/fa';

function Payment() {
  const [stripeEnabled, setStripeEnabled] = useState(true);
  const [paypalEnabled, setPaypalEnabled] = useState(true);
  const [razorpayEnabled, setRazorpayEnabled] = useState(true);
  const [bankTransferEnabled, setBankTransferEnabled] = useState(true);
  const [cashAppEnabled, setCashAppEnabled] = useState(true);
  const [venmoEnabled, setVenmoEnabled] = useState(true);
  const [zelleEnabled, setZelleEnabled] = useState(true);

  const toggleSwitch = (setter) => () => setter(prevState => !prevState);

  return (
    <div className="shadow_card main_block_superadmin p-4 bg-white rounded-xl flex flex-col gap-4">
      <h1 className="font-medium text-lg">Payment Setting</h1>
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="Enter currency" className="border p-2 w-full" />
        <input type="text" placeholder="Enter currency symbol" className="border p-2 w-full" />
      </div>
      <div className="mt-4">
        {[
          { name: 'Stripe', icon: <FaStripe />, enabled: stripeEnabled, toggle: toggleSwitch(setStripeEnabled) },
          { name: 'PayPal', icon: <FaPaypal />, enabled: paypalEnabled, toggle: toggleSwitch(setPaypalEnabled) },
          { name: 'Razorpay', icon: <FaCcAmazonPay />, enabled: razorpayEnabled, toggle: toggleSwitch(setRazorpayEnabled) },
          { name: 'Bank Transfer', icon: <FaBitcoin />, enabled: bankTransferEnabled, toggle: toggleSwitch(setBankTransferEnabled) },
          { name: 'Cash App', icon: <FaCcApplePay />, enabled: cashAppEnabled, toggle: toggleSwitch(setCashAppEnabled) },
          { name: 'Venmo', icon: <FaCcVisa />, enabled: venmoEnabled, toggle: toggleSwitch(setVenmoEnabled) },
          { name: 'Zelle', icon: <FaCcMastercard />, enabled: zelleEnabled, toggle: toggleSwitch(setZelleEnabled) }
        ].map((payment, index) => (
          <div key={index} className="flex items-center justify-between border p-4 mt-4">
            <div className="flex items-center">
              <div className="text-2xl mr-2">{payment.icon}</div>
              <span className="text-xl">{payment.name}</span>
            </div>
            <ToggleSwitch label="Enable" enabled={payment.enabled} onToggle={payment.toggle} />
          </div>
        ))}
      </div>
    </div>
  );
}

const ToggleSwitch = ({ label, enabled, onToggle }) => (
  <div className="flex items-center">
    <span className="mr-2">{label} :</span>
    <button
      onClick={onToggle}
      className={`relative w-12 h-6 flex items-center rounded-full p-1 ${enabled ? 'bg-green-500' : 'bg-gray-300'}`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform ${enabled ? 'translate-x-6' : ''}`}
      ></div>
    </button>
  </div>
);

export default Payment;
