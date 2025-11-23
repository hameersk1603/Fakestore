import React from 'react'
import { furnitureData } from '../data/furniture'
import { Link } from 'react-router-dom'

const Furniture = () => {
  const firstFiveImages = furnitureData.slice(0, 5)

  return (
    <>
      <div className="proTitle">
        <h2>Furnitures</h2>
      </div>

      <div
        className="proSection"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)', // 2 items per row
          gap: '20px',
          padding: '20px',
          background: 'lavender',
          borderRadius: '10px'
        }}
      >
        {firstFiveImages.map((item) => (
          <Link
            key={item.id}
            to={`/fur/${item.id}`} // Navigate to single furniture page
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
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img
                className="proImg"
                src={item.image}
                alt={item.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '5px' }}
              />
              <h4 style={{ marginTop: '10px' }}>{item.name}</h4>
              <p style={{ color: 'green', fontWeight: 'bold' }}>${item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Furniture
