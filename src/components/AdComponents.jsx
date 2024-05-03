// Ad.js
import React from "react";

function AdComponents({ adData }) {
  return (
    <div className="ad">
      <a href={adData.link}>
        <img
          style={{ width: "250px" }}
          src={adData.imageUrl}
          alt={adData.title}
        />
        <h3>{adData.title}</h3>
        <p>{adData.description}</p>
      </a>
    </div>
  );
}

export default AdComponents;
