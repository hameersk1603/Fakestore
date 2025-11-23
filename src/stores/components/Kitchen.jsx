import React from 'react';
import { kitchenData } from '../data/kitchen';
import { Link } from 'react-router-dom';

const Kitchen = () => {
  const firstFiveImages = kitchenData.slice(0, 8);

  return (
    <>
      <div className="proTitle">
        <h2>Kitchen</h2>
      </div>

      <div
        className="proSection"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)', // 4 items per row
          gap: '20px',
          padding: '20px',
          background: 'azure',
          borderRadius: '10px'
        }}
      >
        {firstFiveImages.map((item) => (
          <Link
            key={item.id}
            to={`/kitchen/${item.id}`} // Navigate to kitchen detail page
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div
              className="imgBox"
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                textAlign: 'center',
                borderRadius: '8px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img
                className="proImg"
                src={item.image}
                alt={item.name}
                style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px' }}
              />
              <h4 style={{ marginTop: '10px' }}>{item.name}</h4>
              <p style={{ color: 'green', fontWeight: 'bold' }}>${item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Kitchen;
