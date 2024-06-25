import React, { useState } from "react";
import "./App.css";

function BmiCalculator() {
  const [heightV, setheightV] = useState("");
  const [weightV, setweightV] = useState("");
  const [bmiV, setBmiV] = useState("");
  const [bmiMsg, setBmiMsg] = useState("");
  const calculateBmi = () => {
    if (heightV && weightV) {
      const heightinmetres = heightV / 100;
      const bmi = (weightV / (heightinmetres * heightinmetres)).toFixed(2);
      setBmiV(bmi);
      let msg = "";
      if (bmi < 18.5) {
        msg = "u are underweight! eat more";
      } else if (bmi >= 18.5 && bmi < 25) {
        msg = "u are normal weight!";
      } else if (bmi >= 25 && bmi < 30) {
        msg = "u are overweight";
      } else {
        msg = "u are obese";
      }
      setBmiMsg(msg);
    } else {
      setBmiV("");
      setBmiMsg("");
    }
  };
  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <div className="input-container">
        <label htmlFor="height">Enter ur height in (cm) :</label>
        <input
          type="number"
          id="height"
          value={heightV}
          onChange={(e) => setheightV(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="weight">Enter ur weight in (kgs) :</label>
        <input
          type="number"
          id="weight"
          value={weightV}
          onChange={(e) => setweightV(e.target.value)}
          S
        />
      </div>
      <button className="calculate-btn" onClick={calculateBmi}>
        Click to Calculate BMI
      </button>
      {bmiV && bmiMsg && (
        <div className="result">
          <p>
            Ur BMI : <span className="bmi-v">{bmiV}</span>
          </p>
          <p>
            Result : <span className="bmi-msg">{bmiMsg}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default BmiCalculator;
