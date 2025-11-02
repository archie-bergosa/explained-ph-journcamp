
import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import philippinesProvinces from '../data/philippines-provinces.json';

const RegistrantsMap = () => {
  const registrantData = {
    'Central Luzon (Region III)': 19.47,
    'National Capital Region (NCR)': 15.64,
    'CALABARZON (Region IV-A)': 11.55,
    'Bicol Region (Region V)': 6.37,
    'Davao Region (Region XI)': 5.64,
    'Cagayan Valley (Region II)': 5.23,
    'Western Visayas (Region VI)': 5.98, // 5.02 + 0.96 (from NIR)
    'Eastern Visayas (Region VIII)': 4.97,
    'Ilocos Region (Region I)': 4.35,
    'SOCCSKSARGEN (Region XII)': 3.57,
    'MIMAROPA Region (Region IV-B)': 3.37,
    'Central Visayas (Region VII)': 4.27, // 3.31 + 0.96 (from NIR)
    'Zamboanga Peninsula (Region IX)': 2.59,
    'Northern Mindanao (Region X)': 2.38,
    'Caraga (Region XIII)': 2.23,
    'Cordillera Administrative Region (CAR)': 1.66,
    'Bangsamoro Autonomous Region in Muslim Mindanao (BARMM)': 0.73,
  };

  const maxRegistrants = Math.max(...Object.values(registrantData));

  const getColor = (region) => {
    const count = registrantData[region] || 0;
    const opacity = count / maxRegistrants;
    return `rgba(0, 128, 128, ${opacity});`
  };

  return (
    <div>
      <h2>Registrants Heatmap</h2>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1500,
          center: [122, 12],
        }}
        style={{
          width: '100%',
          height: 'auto',
        }}
      >
        <Geographies geography={philippinesProvinces}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: getColor(geo.properties.region),
                    outline: 'none',
                  },
                  hover: {
                    fill: '#FF5722',
                    outline: 'none',
                  },
                  pressed: {
                    fill: '#FF5722',
                    outline: 'none',
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default RegistrantsMap;
