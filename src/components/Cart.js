import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeItem } from '../utils/cartSlice';

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  console.log(cartItem);
  return (
    <div className='cart relative'>
      <h1 className='m-5 text-center text-3xl font-bold '>
        Cart Items - {cartItem.length}
      </h1>
      <button
        className='absolute right-0 top-0 m-5 rounded bg-green-200 px-2 py-1 transition-all hover:bg-green-300'
        onClick={() => handleClearCart()}
      >
        Clear cart
      </button>

      <ul>
        {cartItem.map((item) => (
          <li>
            {item}
            <button
              className='m-5 rounded bg-green-200 px-2 py-1 transition-all hover:bg-green-300'
              onClick={() => handleRemoveItem(item)}
            >
              Remove item
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
