import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { acData } from '../data/ac'
import { Link } from 'react-router-dom'

const AcPage = () => {
  const [selectedPro, setSelectedPro] = useState([])

  const companyHandler = (company) => {
    if (selectedPro.includes(company)) {
      setSelectedPro(selectedPro.filter((item) => item !== company))
    } else {
      setSelectedPro([...selectedPro, company])
    }
  }

  const companies = [...new Set(acData.map((item) => item.company))]

  const filteredPro =
    selectedPro.length === 0
      ? acData
      : acData.filter((item) => selectedPro.includes(item.company))

  return (
    <>
      <Navbar />
      <div style={{ padding: '20px', background: 'azure', marginTop: '20px' }}>
        <div className="proTitle">
          <h2>Air Conditioners</h2>
        </div>

        {/* Filter checkboxes */}
        <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {companies.map((company) => (
            <label key={company} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <input
                type="checkbox"
                checked={selectedPro.includes(company)}
                onChange={() => companyHandler(company)}
              />
              {company}
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
              to={`/ac/${item.id}`}
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
                  style={{ width: '100%', height: '290px', objectFit: 'cover', borderRadius: '5px' }}
                />
                <div style={{ marginTop: '10px', fontWeight: '500' }}>
                  {item.company}, {item.model}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default AcPage
