import React from 'react';
import { menData } from '../data/men';
import { Link } from 'react-router-dom';

const Men = () => {
  const firstFiveImages = menData.slice(0, 3);

  return (
    <>
      <div className="proTitle">
        <h2>Mens Wear</h2>
      </div>

      <div
        className="proSection"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)', // 3 items per row
          gap: '20px',
          padding: '20px',
          background: '#f0f8ff', // light azure background
        }}
      >
        {firstFiveImages.map((item) => (
          <Link
            key={item.id}
            to={`/men/${item.id}`} // navigate to men single product page
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                textAlign: 'center',
                background: 'white',
                borderRadius: '8px',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img
                src={item.image}
                alt={item.model}
                style={{
                  width: '100%',
                  height: '180px',
                  objectFit: 'cover',
                  borderRadius: '5px',
                }}
              />
              <div style={{ marginTop: '10px', fontWeight: '500' }}>
                {item.brand}, {item.model}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Men;
