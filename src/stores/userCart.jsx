import React from 'react';
import { useCart } from './context/CartContext';

const UserCart = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price.toString().replace(/[^0-9.-]+/g, "")),
    0
  );

  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '900px',
        margin: '0 auto',
        background: '#f5f5f5',
        borderRadius: '10px',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Your Cart</h1>

      {cartItems.length === 0 && (
        <h2 style={{ textAlign: 'center', color: '#777' }}>No items in cart</h2>
      )}

      {cartItems.map((item, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            background: '#fff',
            padding: '15px',
            marginBottom: '15px',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          }}
        >
          <div style={{ flex: '1 0 100px' }}>
            <img
              src={item.image}
              alt={item.model}
              style={{
                width: '100px',
                height: '100px',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
          </div>

          <div style={{ flex: '3', marginLeft: '20px' }}>
            <h2 style={{ margin: '0 0 5px 0' }}>{item.brand || item.company}</h2>
            <h3 style={{ margin: '0 0 10px 0', color: '#555' }}>{item.model}</h3>
            <p style={{ margin: '0', fontWeight: 'bold', color: 'green' }}>
              ${item.price}
            </p>
          </div>

          <div>
            <button
              onClick={() => removeFromCart(index)}
              style={{
                padding: '8px 15px',
                background: '#ff4d4d',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: '0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#ff1a1a')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#ff4d4d')}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {cartItems.length > 0 && (
        <div
          style={{
            textAlign: 'right',
            fontSize: '22px',
            fontWeight: 'bold',
            marginTop: '20px',
            padding: '15px 20px',
            background: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            color: '#000',
          }}
        >
          Total Amount: ${totalPrice}
        </div>
      )}
    </div>
  );
};

export default UserCart;
