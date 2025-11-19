import React from 'react';
import { useDispatch } from 'react-redux';
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from '../store/slices/cartSlice';

export default function CartTile({ cartItem }) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(cartItem.id));
  };

  const handleInc = () => {
    dispatch(incrementQty(cartItem.id));
  };

  const handleDec = () => {
    dispatch(decrementQty(cartItem.id));
  };

  return (
    <div className="flex items-center justify-between bg-white shadow-md border border-gray-200 rounded-xl p-5 mb-4 hover:shadow-lg transition">
      <div className="flex items-center gap-5">
        <img
          src={cartItem?.image}
          className="h-24 w-24 object-contain rounded-lg border"
          alt={cartItem?.title}
        />

        <div className="space-y-2">
          <h1 className="text-lg font-bold text-gray-800">{cartItem?.title}</h1>

          <p className="text-red-700 font-semibold text-lg">
            ₹{cartItem?.price}
          </p>

          <button
            onClick={handleRemoveFromCart}
            className="text-sm text-red-600 underline hover:text-red-800"
          >
            Remove
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-lg">
        <button
          onClick={handleDec}
          className="bg-red-900 text-white w-8 h-8 flex items-center justify-center rounded-md text-lg font-bold hover:bg-red-800 transition"
        >
          −
        </button>

        <span className="text-lg font-semibold text-gray-800 w-6 text-center">
          {cartItem.quantity ?? 1}
        </span>

        <button
          onClick={handleInc}
          className="bg-red-900 text-white w-8 h-8 flex items-center justify-center rounded-md text-lg font-bold hover:bg-red-800 transition"
        >
          +
        </button>
      </div>
    </div>
  );
}
