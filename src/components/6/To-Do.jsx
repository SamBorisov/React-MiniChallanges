import { useState } from "react";
import React from "react";

export default function ToDo() {
  const [notes, setNotes] = React.useState([]);
  const [note, setNote] = React.useState("");

  function handleChange(event) {
    const value = event.target.value;
    setNote(value);
  }

//   // not exacly right
//   function handleClick(event) {
//     setNote(notes.push(note));
//   }

  function addItem(event){
    setNotes( prev => {
        return[...prev, note];
    })
    setNote("")
  }

  function deleteItem(id) {
    setNotes(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  // add line to cross elements (not not using becouse of the delete function)
  const [isDone, setIsDone] = React.useState(false)

  function lineAsDone() {
    setIsDone( prev => !prev )}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={note} onChange={handleChange} type="text" />
        <button onClick={addItem} type="submit">
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {notes.map((todo, index) => (
                <li onClick={() => deleteItem(index)}
                style={{textDecoration: isDone ? "line-through" : null}}>
                {todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

