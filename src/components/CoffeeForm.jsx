import React from 'react'
import {coffeeOptions} from "../utils/index.js"
import { useState } from 'react';
import Authentication from './Authentication.jsx';
import Modal from './Modal.jsx';
function CoffeeForm(props) {
  const {isAuthenticated} =props
  const [showModal,setShowModal]=useState(false)
  const [coffeeSelection,setCoffeeSelection] =useState(null)
   const[showCoffeeTypes,setShowCoffeeTypes]=useState(false)
   const[coffeeCost,serCoffeeCost] =useState(0)
   const[hrs,setHrs]=useState(0)
   const[mins,setMins]=useState(0)
   function handleSubmit(){
    if(!isAuthenticated){
      setShowModal(true)
      return
    }
console.log(coffeeSelection,coffeeCost,hrs,mins)

   }
  return (
    <>
      {showModal && (
        <Modal
          handleCloseModal={() => {
            setShowModal(false);
          }}
        >
          <Authentication />
        </Modal>
      )}
      <div className="section-header">
        <i className="fa-solid fa-pencil" />
        <h2>Start Tracking Today</h2>
      </div>
      <h4>Select coffee type</h4>
      <div className="coffee-grid">
        {coffeeOptions.slice(0, 5).map((option, optionIndex) => {
          return (
            <button
              onClick={() => {
                setCoffeeSelection(option.name);
                setShowCoffeeTypes(false);
              }}
              className={
                "button-card" +
                (option.name == coffeeSelection ? "coffee-button-selected" : "")
              }
              key={optionIndex}
            >
              <h4>{option.name}</h4>
              <p>{option.caffeine}</p>
            </button>
          );
        })}
        <button
          onClick={() => {
            setShowCoffeeTypes(true);
            setCoffeeSelection(null);
          }}
          className={
            "button-card" +
            (showCoffeeTypes == coffeeSelection ? "coffee-button-selected" : "")
          }
        >
          <h4>Others</h4>
          <p>N/A</p>
        </button>
      </div>
      {showCoffeeTypes && (
        <select id="coffee-list" name="coffe-list">
          <option value={null}>---- Select Type ----</option>
          {coffeeOptions.map((option, optionIndex) => {
            return (
              <option value={option.name} kaey={optionIndex}>
                {option.name} ( {option.caffeine} mg )
              </option>
            );
          })}
        </select>
      )}
      <h4>Add the Cost ($)</h4>
      <input
        className="w-full"
        type="number"
        value={coffeeCost}
        placeholder="100"
        onChange={(e) => serCoffeeCost(e.target.value)}
      />
      <h4>Time Since Consumption</h4>
      <div className="time-entry">
        <div>
          <h6>Hours</h6>
          <select
            onChange={(e) => {
              setHrs(e.target.value);
            }}
            id="hours-select"
          >
            {[
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19, 20, 21, 22, 23,
            ].map((hour, hoursIndex) => {
              return (
                <option key={hoursIndex} value={hour}>
                  {hour}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <h6>Mins</h6>
          <select
            onChange={(e) => {
              setMins(e.target.value);
            }}
            id="mins-select"
          >
            {[0, 5, 10, 15, 30, 45].map((min, minIndex) => {
              return (
                <option key={minIndex} value={min}>
                  {min}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <button onClick={handleSubmit}>
        <p>Add Entry</p>
      </button>
    </>
  );
}

export default CoffeeForm