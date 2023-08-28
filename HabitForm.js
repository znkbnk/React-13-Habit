import React, { useState } from "react";

const HabitForm = ({ addHabit }) => {
  const [habit, setHabit] = useState("");

  const handleHabitChange = (event) => {
    setHabit(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (habit.trim() !== "") {
      addHabit(habit);
      setHabit("");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type='text'
        value={habit}
        onChange={handleHabitChange}
        placeholder='Enter a new habit'
      />
      <button type='submit'>Add Habit</button>
    </form>
  );
};

export default HabitForm;
