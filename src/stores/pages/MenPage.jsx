import React, { useState } from 'react';
import { menData } from '../data/men';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MenPage = () => {
  const [selectedPro, setSelectedPro] = useState([]);

  const brandHandler = (brand) => {
    if (selectedPro.includes(brand)) {
      setSelectedPro(selectedPro.filter(item => item !== brand));
    } else {
      setSelectedPro([...selectedPro, brand]);
    }
  };

  const brands = [...new Set(menData.map(item => item.brand))];

  const filteredPro =
    selectedPro.length === 0
      ? menData
      : menData.filter(item => selectedPro.includes(item.brand));

  return (
    <>
      <Navbar />

      <div style={{ padding: '20px', background: 'azure', marginTop: '20px' }}>
        <div className="proTitle">
          <h2>Men Fashion</h2>
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
              to={`/men/${item.id}`} // Navigate to men single product page
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                style={{
                  border: '1px solid #ccc',
                  padding: '10px',
                  textAlign: 'center',
                  background: 'white',
                  borderRadius: '8px',
                  transition: '0.3s',
                  cursor: 'pointer'
                }}
              >
                <img
                  src={item.image}
                  alt={item.model}
                  style={{
                    width: '100%',
                    height: '180px',
                    objectFit: 'cover',
                    borderRadius: '5px'
                  }}
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
  );
};

export default MenPage;
