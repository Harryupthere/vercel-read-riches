import React, { useState } from 'react';
import '../components/css/donut.css';

const DonutChart = () => {
  // Dummy data for each segment
  const segments = [
    { id: 1, label: 'Threat of Substitute', value: 20 },
    { id: 2, label: 'Bargaining Power of Buyers', value: 20 },
    { id: 3, label: 'Bargaining Power of Suppliers', value: 20 },
    { id: 4, label: 'Industry Rivalry', value: 20 },
    { id: 5, label: 'Threat of New Entrants', value: 20 },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  // Function to handle click on each segment
  const handleSegmentClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="donut-chart-container">
      <svg width="400" height="400" viewBox="0 0 42 42" className="donut-chart">
        {segments.map((segment, index) => {
          const rotation = (360 / segments.length) * index;
          return (
            <circle
              key={segment.id}
              className={`donut-segment ${index === activeIndex ? 'active' : ''}`}
              cx="21"
              cy="21"
              r="15.915"
              fill="transparent"
              stroke={index === activeIndex ? '#1D666D' : '#73BBC3'}
              strokeWidth="3.8"
              strokeDasharray={`${segment.value} ${100 - segment.value}`}
              strokeDashoffset="25"
              transform={`rotate(${rotation} 21 21)`}
              onClick={() => handleSegmentClick(index)}
            />
          );
        })}
        <text x="50%" y="50%" textAnchor="middle" fill="#333" dy=".3em" fontSize="0.6em">
          Porter’s Five Forces
        </text>
      </svg>

      <div className="description-box">
        {activeIndex !== null ? (
          <div>
            <h3>{segments[activeIndex].label}</h3>
            <p>Detailed description of {segments[activeIndex].label} goes here.</p>
          </div>
        ) : (
          <p>Click on a segment to see details.</p>
        )}
      </div>
    </div>
  );
};

export default DonutChart;
