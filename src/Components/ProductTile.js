import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, incrementQty, decrementQty } from '../store/slices/cartSlice';

export default function ProductTile({ product }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  const cartItem = cart.find((item) => item.id === product.id);

  function handleAddToCart() {
    
    dispatch(addToCart(product));
  }

  function handleInc() {
    dispatch(incrementQty(product.id));
  }

  function handleDec() {
    dispatch(decrementQty(product.id));
  }

  return (
    <div className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl bg-white">
      <div className="h-[180px] w-full flex items-center justify-center">
        <img
          src={product?.image}
          alt={product?.title}
          className="object-contain h-full w-full"
        />
      </div>

      <div className="px-2 w-full">
        <h1 className="w-full truncate mt-3 text-gray-700 font-bold text-lg">
          {product?.title}
        </h1>
        <p className="text-sm text-gray-500 mt-1">₹{product?.price}</p>
      </div>

      <div className="flex items-center justify-center w-full ">
        {cartItem ? (
          <div className="flex items-center gap-3 bg-red-50 rounded-lg px-3 py-2">
            <button
              onClick={handleDec}
              aria-label={`decrease quantity of ${product.title}`}
              className="bg-red-950 text-white px-3 py-1 rounded-md font-bold hover:opacity-90"
            >
              −
            </button>

            <span className="min-w-[36px] text-center font-semibold text-gray-800">
              {cartItem.quantity ?? 1}
            </span>

            <button
              onClick={handleInc}
              aria-label={`increase quantity of ${product.title}`}
              className="bg-red-950 text-white px-3 py-1 rounded-md font-bold hover:opacity-90"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="bg-red-950 text-white border-2 rounded-lg font-bold px-6 py-3"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}
