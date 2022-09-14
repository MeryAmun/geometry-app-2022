import React, { useState } from "react";
//import "./Triangle.css";
const data = {
  base: 0,
  height: 0,
  sideL:'',
  sideR:'',
  unit: "",
  dimension: "",
};
const Triangle = () => {
  const [exercise, setExercise] = useState(data);
  const [answer, setAnswer] = useState(0);
  const [error, setError] = useState("");
 

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
        setAnswer((Number(exercise.base) + Number(exercise.sideL)) + Number(exercise.sideR));
      } else if (exercise.dimension === "Area") {
        setAnswer(
          (Number(exercise.base) / 2 )* Number(exercise.height)
       
        );
     
      }
    }
    e.target.reset();
  };

  return (
    <div className="app__figure_container">
      <div className="app__figure__header">
        <h3>Find the Area and Perimeter of Triangles</h3>
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
              name="base"
              onChange={onChangeHandler}
              placeholder="Enter base Side or Side B"
            />
            <span className="error">{error}</span>
          </div>
          <div className="form-group">
            <input
              type="number"
              name="sideL"
              onChange={onChangeHandler}
              placeholder="Enter Left Side or Side A"
            />
            <span className="error">{error}</span>
          </div>
          <div className="form-group">
            <input
              type="number"
              name="sideR"
              onChange={onChangeHandler}
              placeholder="Enter Right Side or Side C"
            />
            <span className="error">{error}</span>
          </div>
          <div className="form-group">
            <input
              type="number"
              name="height"
              onChange={onChangeHandler}
              placeholder="Enter height"
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
             <strong> Answer in</strong> {exercise.unit} : {answer} {exercise.unit}
              <sup>2</sup>
            </span>
          ) : (
            <span className="geometric_result">
             <strong> Answer in</strong> {exercise.unit}: {answer} {exercise.unit}
            </span>
          )}
          {exercise.dimension === "Area" ? (
            <span className="geometric_result">
              <strong> Answer in</strong>
              {exercise.unit === "M" ? "CM" || exercise.unit === "CM" : "M"}:{" "}
              {exercise.unit === "M"
                ? answer * 100 + "CM" || exercise.unit === "CM"
                : (answer * 0.01).toFixed(3) + "M"}
              <sup>2</sup>
            </span>
          ) : (
            <span className="geometric_result">
               <strong> Answer in </strong>
              {exercise.unit === "M" ? "CM" || exercise.unit === "CM" : "M"}:{" "}
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

export default Triangle;
