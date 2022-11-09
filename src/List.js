import data from "./data";
import { useState } from "react";

export const List = () => {
  const [celebrants, setCelebrants] = useState(data);
  const removeAll = () => {
    setCelebrants((prevState) => {
      return (prevState = []);
    });
  };

  const removePerson = (id) => {
    setCelebrants((prevState) => {
      return prevState.filter((person) => person.id !== id);
    });
  };
  return (
    <div>
      <h2>{celebrants.length} Birthdays Today</h2>
      {celebrants.map(({ id, name, age, image }) => {
        return (
          <div key={id} className="items">
            <img src={image}></img>
            <div>
              <h3>{name}</h3>
              <p>{age} years Old</p>
            </div>
            <button
              className="btn-delete"
              onClick={() => {
                removePerson(id);
              }}
            >
              X
            </button>
          </div>
        );
      })}
      <button className="btn-clear" onClick={removeAll}>
        Clear All
      </button>
    </div>
  );
};
