import React, { useState } from "react";

const HabitList = ({
  habits,
  favoriteHabits,
  updateHabit,
  deleteHabit,
  toggleFavorite,
}) => {
  const [editableHabitIndex, setEditableHabitIndex] = useState(-1);

  const handleEditClick = (index) => {
    setEditableHabitIndex(index);
  };

  const handleEditChange = (event, index) => {
    updateHabit(index, event.target.value);
  };

  const handleEditSave = (index) => {
    setEditableHabitIndex(-1);
  };

  return (
    <ul>
      {habits.map((habit, index) => (
        <li key={index}>
          {editableHabitIndex === index ? (
            <div>
              <input
                type='text'
                value={habit}
                onChange={(e) => handleEditChange(e, index)}
              />
              <button onClick={() => handleEditSave(index)}>Save</button>
            </div>
          ) : (
            <div>
              {habit}
              <button onClick={() => handleEditClick(index)}>Edit</button>
              <button onClick={() => deleteHabit(index)}>Delete</button>
              <button
                className={
                  favoriteHabits.includes(habit)
                    ? "favorite-button favorite"
                    : "favorite-button"
                }
                onClick={() => toggleFavorite(index)}
              >
                Favorite
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default HabitList;
