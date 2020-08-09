import React from "react";
import "./menu-item.scss";
import { withRouter } from "react-router-dom";
function MenuItem({
  title,
  subtitle,
  imageUrl,
  size,
  match,
  history,
  linkUrl,
}) {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

export default withRouter(MenuItem);
