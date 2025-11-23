import React, { useState } from 'react'
import { fridgeData } from '../data/fridge'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const FridgePage = () => {
  const [selectedPro, setSelectedPro] = useState([])

  const brandHandler = (brand) => {
    if (selectedPro.includes(brand)) {
      setSelectedPro(selectedPro.filter(item => item !== brand))
    } else {
      setSelectedPro([...selectedPro, brand])
    }
  }

  const brands = [...new Set(fridgeData.map(item => item.brand))]

  const filteredPro =
    selectedPro.length === 0
      ? fridgeData
      : fridgeData.filter(item => selectedPro.includes(item.brand))

  return (
    <>
      <Navbar />
      <div style={{ padding: '20px', background: 'azure', marginTop: '20px' }}>
        <div className="proTitle">
          <h2>Fridges</h2>
        </div>

        {/* Filter checkboxes */}
        <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {brands.map((brand) => (
            <label key={brand} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <input
                type="checkbox"
                checked={selectedPro.includes(brand)}
                onChange={() => brandHandler(brand)}
              />
              {brand}
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
              to={`/fridges/${item.id}`} // Navigate to single fridge page
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
                  {item.brand}, {item.model}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default FridgePage
