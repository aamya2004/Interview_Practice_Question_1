import { useState } from "react";
import "./styles.css";

export default function App() {
  const countries = [
    {
      name: "India",
      value: "IN",
      cities: ["Delhi", "Mumbai"]
    },
    {
      name: "Bangladesh",
      value: "BG",
      cities: ["Dhaka", "Chittagong"]
    }
  ];

  const [selectedCountry, setSelectedCountry] = useState({
    name: "",
    value: "",
    cities: []
  });

  const handleOnChange = (e) => {
    const selectedIndex = e.target.value;
    const selectedCountryData = countries[selectedIndex];
    setSelectedCountry(selectedCountryData);
  };

  return (
    <div className="App">
      <select onChange={(e) => handleOnChange(e)}>
        <option value="">Select Country</option>
        {countries.map((item, index) => (
          <option key={index} value={index}>
            {item.name}
          </option>
        ))}
      </select>

      {selectedCountry.value && (
        <select value={selectedCountry.value}>
          {selectedCountry.cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
