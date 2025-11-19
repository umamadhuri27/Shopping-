import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartTile from '../Components/CartTile';

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    const totalAmount = cart.reduce((acc, curr) => {
      const qty = curr.quantity ?? 1;
      const price = Number(curr.price);
      return acc + price * qty;
    }, 0);

    const qtyTotal = cart.reduce((acc, curr) => {
      return acc + (curr.quantity ?? 1);
    }, 0);

    setTotalCart(totalAmount);
    setTotalQuantity(qtyTotal);
  }, [cart]);

  return (
    <div className="min-h-[80vh] bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
            Your Shopping Cart
          </h2>

          {cart && cart.length ? (
            <div className="space-y-4">
              {cart.map((cartItem) => (
                <div key={cartItem.id}>
                  <CartTile cartItem={cartItem} />
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full flex flex-col items-center justify-center py-20 rounded-lg border-2 border-dashed border-gray-200 bg-white">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Your cart is empty
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Looks like you haven't added anything yet.
              </p>
              <Link to="/">
                <button className="bg-red-950 text-white border-2 rounded-lg font-bold px-6 py-3">
                  SHOP NOW
                </button>
              </Link>
            </div>
          )}
        </div>

        {cart && cart.length > 0 && (
          <aside className="sticky top-24 self-start">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Cart Summary
              </h3>

              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-600">Unique Items</span>
                <span className="font-medium text-gray-800">
                  {cart.length}
                </span>
              </div>

              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-600">Total Quantity</span>
                <span className="font-medium text-gray-800">
                  {totalQuantity}
                </span>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-lg font-bold text-red-700">
                  ₹{totalCart.toFixed(2)}
                </span>
              </div>

              <div className="space-y-3">
                <button className="w-full inline-flex justify-center items-center gap-2 px-4 py-3 bg-red-950 text-white font-semibold rounded-lg">
                  Proceed to Checkout
                </button>

                <Link to="/" className="block">
                  <button className="w-full inline-flex justify-center items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </div>

            <div className="mt-4 text-xs text-gray-500">
              Secure checkout. Free returns within 30 days.
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
