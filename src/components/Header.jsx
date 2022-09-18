import React, { useState, useEffect } from "react";
import { baseUrl } from "./api/geometricFiguresApi";
import Loader from "./GeometricFigures/Loader";
import "./header.css";
import { Rectangle, Triangle, Square, Circle } from "./index";

const Header = () => {
  const [activeTab, setActiveTab] = useState("rectangle");
  const [figure, setFigure] = useState([]);

  useEffect(() => {
    const getGeoFigures = async () => {
      const response = await fetch(`${baseUrl}/geometry/all`, {
        method: "GET",
        header: {
          "Content-Types": "application/json",
        },
      }).then((response) => {
        return response.json();
      });
      setFigure(response);
      return response;
    };
    getGeoFigures();
  }, []);

  if (figure.length === 0) {
    return <Loader />;
  }


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
