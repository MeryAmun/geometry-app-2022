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

  const rectangle = figure.filter((item) => item.figureName === "Rectangle");
  const triangle = figure.filter((item) => item.figureName === "Triangle");
  const square = figure.filter((item) => item.figureName === "Square");
  const circle = figure.filter((item) => item.figureName === "Circle");


  return (
    <div className="geometry-container">
      <div className="geometry-main">
        <div className="geometry-header">
          <h3>Geometry Application</h3>
          <span>
            Your Number one Learning Aid <br /> For Geometric Figures.
            <br /> Finding Areas and Perimeters
          </span>
        </div>

        <div className="geometric-figures">
          <button className={
            activeTab === 'rectangle' ? "liveTab" : "rec-btn"
          } onClick={() => setActiveTab("rectangle")}>
            Rectangles
          </button>
          <button className={
            activeTab === 'triangle' ? 'liveTab' : "tri-btn"
          } onClick={() => setActiveTab("triangle")}>
            Triangles
          </button>
          <button className={
            activeTab === 'circle' ? 'liveTab ': "circ-btn"
          } onClick={() => setActiveTab("circle")}>
            Circles
          </button>
          <button className={
            activeTab === 'square' ? 'liveTab' : "squ-btn"
          } onClick={() => setActiveTab("square")}>
            Squares
          </button>
        </div>
      </div>
      {activeTab === "rectangle" ? (
        <Rectangle rectangle={rectangle[0]} />
      ) : activeTab === "triangle" ? (
        <Triangle triangle={triangle[0]} />
      ) : activeTab === "square" ? (
        <Square square={square[0]} />
      ) : (
        <Circle circle={circle[0]} />
      )}
    </div>
  );
};

export default Header;
