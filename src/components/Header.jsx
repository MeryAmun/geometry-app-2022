import React, { useState } from "react";
import "./header.css";
import { Rectangle, Triangle, Square, Circle } from "./index";

const Header = () => {
  const [activeTab, setActiveTab] = useState("rectangle");


  return (
    <div className="geometry-container">
      <div className="geometry-main">
        <div className="geometry-header" data-test='header'>
          <h3 data-test='header-main'>Geometry Application</h3>
          <span className="header-subtitle" data-test='header-sub'>
            Your Number one Learning Aid <br /> For calculating dimensions of  Geometric Figures.
            <br /> 
          </span>
        </div>

        <div className="geometric-figures" data-test="tab-container">
          <button className={
            activeTab === 'rectangle' ? "liveTab" : "btn"
          } onClick={() => setActiveTab("rectangle")}>
            Rectangles
          </button>
          <button className={
            activeTab === 'triangle' ? 'liveTab' : "btn"
          } onClick={() => setActiveTab("triangle")}>
            Triangles
          </button>
          <button className={
            activeTab === 'circle' ? 'liveTab ': "btn"
          } onClick={() => setActiveTab("circle")}>
            Circles
          </button>
          <button className={
            activeTab === 'square' ? 'liveTab' : "btn"
          } onClick={() => setActiveTab("square")}>
            Squares
          </button>
        </div>
      </div>
      {activeTab === "rectangle" ? (
        <Rectangle />
      ) : activeTab === "triangle" ? (
        <Triangle />
      ) : activeTab === "square" ? (
        <Square/>
      ) : (
        <Circle/>
      )}
    </div>
  );
};

export default Header;
