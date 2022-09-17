import React, { useState,useContext } from "react";
import { GeometryContext } from "../../GeometeryContext/GeometryContextProvider";
import Loader from "../Loader";
//import "./rectangle.css";
const data = {
  length: 0,
  unit: "",
  dimension: "",
};
const Square = () => {
  const [exercise, setExercise] = useState(data);
  const [answer, setAnswer] = useState(0);
  const [error, setError] = useState("");
  const figures = useContext(GeometryContext)
  const square = figures.filter((item) => item.figureName === "Square");

  if (square.length === 0) {
    return <Loader />;
  }
  const { figureName, units, availableDimensions, dimensionsToCalculate } =
    square[0];

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setExercise((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (exercise.dimension === "") {
      setError("Please choose the dimension you want to calculate");
    }
    if (exercise.unit === "") {
      setError("Please select the unit for calculation");
    } else {
      if (exercise.dimension === "Perimeter") {
        setAnswer(Number(exercise.length) * 4);
      } else if (exercise.dimension === "Area") {
        setAnswer(Math.pow(Number(exercise.length), 2));
      }
    }
    e.target.reset();
  };

  return (
    <div className="app__figure_container">
      <div className="app__figure__header">
        <div className="figures__and_units">
          <div className="figure_dimensions">
          <span className="figure_name">
            Name of Geometric Figure: <strong>{figureName}</strong>
          </span>
            <span> Dimensions To Calculate:</span>
            {dimensionsToCalculate.map((val) => (
              <span className="figure_dimension" key={val}>
                <strong>{val}</strong>
              </span>
            ))}
          </div>
          <div className="figure_dimensions">
            <span>Available Dimensions:</span>
            {availableDimensions.map((val) => (
              <span className="figure_dimension" key={val}>
                <strong>{val}</strong>
              </span>
            ))}
          </div>
          <div className="figure_dimensions">
            <span>Available Units:</span>
            {units.map((val) => (
              <span className="figure_dimension" key={val}>
                <strong>{val}</strong>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="app__form">
        <form onSubmit={submitHandler}>
          <div className="form-group ">
            <div className="sub_form-group">
              <input
                type="radio"
                id="area"
                name="dimension"
                value="Area"
                onChange={onChangeHandler}
              />
              <label htmlFor="area">Area</label>
            </div>
            <span className="error">{error}</span>
          </div>
          <div className="form-group ">
            <div className="sub_form-group">
              <input
                type="radio"
                id="area"
                name="dimension"
                value="Perimeter"
                onChange={onChangeHandler}
              />
              <label htmlFor="perimeter">Perimeter</label>
            </div>
            <span className="error">{error}</span>
          </div>
          <div className="form-group">
            <input
              type="number"
              name="length"
              onChange={onChangeHandler}
              placeholder="Enter Length"
            />
            <span className="error">{error}</span>
          </div>
          <div className="form-group">
            <select name="unit" onChange={onChangeHandler}>
              <option>
                Select unit (e.g M for Meters or CM for Centimeters)
              </option>
              <option value="M">M</option>
              <option value="CM">CM</option>
            </select>
            <span className="error">{error}</span>
          </div>
          <div className="form-group">
            <button className="btn__custom" type="submit">
              {exercise.dimension === "Perimeter"
                ? " Calculate " + exercise.dimension
                : exercise.dimension === "Area"
                ? " Calculate " + exercise.dimension
                : "Calculate"}
            </button>
          </div>
        </form>
        <div className="app__result_container">
          {exercise.dimension === "Area" ? (
            <span className="geometric_result">
              <strong> Answer in</strong>
              {exercise.unit} : {answer} {exercise.unit}
              <sup>2</sup>
            </span>
          ) : (
            <span className="geometric_result">
              <strong> Answer in</strong>
              {exercise.unit}: {answer} {exercise.unit}
            </span>
          )}
          {exercise.dimension === "Area" ? (
            <span className="geometric_result">
              <strong> Answer in</strong>{" "}
              {exercise.unit === "M" ? "CM" || exercise.unit === "CM" : "M"}:{" "}
              {exercise.unit === "M"
                ? answer * 100 + "CM" || exercise.unit === "CM"
                : (answer * 0.01).toFixed(3) + "M"}
              <sup>2</sup>
            </span>
          ) : (
            <span className="geometric_result">
              <strong> Answer in </strong>
              {exercise.unit === "M"
                ? "CM" || exercise.unit === "CM"
                : "M"}:{" "}
              {exercise.unit === "M"
                ? answer * 100 + "CM" || exercise.unit === "CM"
                : (answer * 0.01).toFixed(2) + "M"}{" "}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Square;
