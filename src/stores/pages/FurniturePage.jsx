import React, { useState } from 'react'
import { furnitureData } from '../data/furniture'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const FurniturePage = () => {
  const [selectedPro, setSelectedPro] = useState([])

  const typeHandler = (type) => {
    if (selectedPro.includes(type)) {
      setSelectedPro(selectedPro.filter(item => item !== type))
    } else {
      setSelectedPro([...selectedPro, type])
    }
  }

  const types = [...new Set(furnitureData.map(item => item.type))]

  const filteredPro =
    selectedPro.length === 0
      ? furnitureData
      : furnitureData.filter(item => selectedPro.includes(item.type))

  return (
    <>
      <Navbar />
      <div style={{ padding: '20px', background: 'azure', marginTop: '20px' }}>
        <div className="proTitle">
          <h2>Furniture</h2>
        </div>

        {/* Filter checkboxes */}
        <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {types.map((type) => (
            <label key={type} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <input
                type="checkbox"
                checked={selectedPro.includes(type)}
                onChange={() => typeHandler(type)}
              />
              {type}
            </label>
          ))}
        </div>

        {/* Products Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px'
          }}
        >
          {filteredPro.map((item) => (
            <Link
              key={item.id}
              to={`/fur/${item.id}`} // Navigate to single furniture page
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                style={{
                  border: '1px solid #ccc',
                  padding: '15px',
                  textAlign: 'center',
                  background: 'white',
                  borderRadius: '8px',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <img
                  src={item.image}
                  alt={item.model}
                  style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '5px' }}
                />
                <div style={{ marginTop: '10px', fontWeight: '500' }}>
                  {item.type}, {item.model}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default FurniturePage
