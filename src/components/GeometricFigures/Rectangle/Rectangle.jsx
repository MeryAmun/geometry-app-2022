import React, { useState } from "react";
import "./rectangle.css";
const data = {
  length: 0,
  width: 0,
  unit:'',
  dimension: "",
};
const Rectangle = () => {
  const [exercise, setExercise] = useState(data);
  const [answer, setAnswer] = useState(0);
  const [error, setError] = useState('')
  const [unit, setUnit] = useState('')


  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setExercise((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(exercise.dimension === ''){
      setError('Please choose the dimension you want to calculate')
    }
    e.preventDefault();
    if(exercise.unit === ''){
      setError('Please select the unit for calculation')
    }
    else{
    console.log(exercise);
    if (exercise.dimension === "Perimeter") {
      setAnswer((Number(exercise.length) + Number(exercise.width)) * 2);
    } else if (exercise.dimension === "Area") {
      setAnswer((Number(exercise.length)) *  Number(exercise.width),exercise.unit);
      setUnit(exercise.unit)
    }
  }
    setExercise({
      length:0,
     width:0,
     dimension:'',
    unit:''
    });

   
  };
  return (
    <div className="app__figure_container">
      <div className="app__figure__header">
        <h3>Find the Area and Perimeter of A rectangle</h3>
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
            <input
              type="number"
              name="width"
              onChange={onChangeHandler}
              placeholder="Enter Width"
            />
            <span className="error">{error}</span>
          </div>
          <div className="form-group">
            <select name="unit" onChange={onChangeHandler}>
            <option>Select unit (e.g M for Meters or CM for centimeters)</option>
            <option value="Meters">Meters</option>
            <option value="Centimeters">Centimeters</option>
          </select>
          <span className="error">{error}</span>
          </div>
          <div className="form-group">
            <button className="btn__custom" type="submit">
              {exercise.dimension === "Perimeter"
                ? " Calculate " + exercise.dimension
                :exercise.dimension === "Area" ? " Calculate " + exercise.dimension : 'Calculate'}
            </button>
          </div>
        </form>
        <div className="app__result_container">
          <span className="geometric_result">Answer {exercise.unit} in  {unit}: {answer} {unit}</span>
          <span className="geometric_result">Answer in  {exercise.unit === 'Meters'? 'Centimeters' || exercise.unit === 'Centimeters' : 'Meters' }: {
            exercise.unit === 'Centimeters' ? answer / 100 || exercise.unit === 'Meters' : answer * 100 
          }</span>
        </div>
      </div>
    </div>
  );
};

export default Rectangle;
