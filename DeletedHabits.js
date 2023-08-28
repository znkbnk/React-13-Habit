import React from "react";

const DeletedHabits = ({ deletedHabits, onClose }) => {
  return (
    <div className='deleted-habits-modal'>
      <div className='deleted-habits-content'>
        <h2>Deleted Habits</h2>
        <ul>
          {deletedHabits.map((habit, index) => (
            <li key={index}>{habit}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default DeletedHabits;
