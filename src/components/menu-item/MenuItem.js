import React from "react";
import "./menu-item.scss";
function MenuItem({ title, subtitle, imageUrl, size }) {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-img"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle"> {subtitle}</span>
      </div>
    </div>
  );
}

export default MenuItem;
