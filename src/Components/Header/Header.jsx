import React from "react";
import "./Header.css";

export default function Header({ title, description, height }) {
  return (
    <div className="header" style ={{ height: height + "vh" }}>
      <div
        className={`d-flex justify-content-center align-items-center`}
        style={{ height: height + "vh" }}
      >
        <div className="header-content text-center text-white 100vh">
          <h1>{title}</h1>
          {description !== "" ? (
            <p className="w-50 m-auto mt-5">{description}</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
