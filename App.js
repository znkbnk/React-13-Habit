import React, { useState, useEffect } from "react";
import HabitForm from "./HabitForm";
import HabitList from "./HabitList";
import DeletedHabits from "./DeletedHabits";
import FavoriteHabits from "./FavoriteHabits";

function App() {
  const [habits, setHabits] = useState([]);
  const [deletedHabits, setDeletedHabits] = useState([]);
  const [showDeletedHabits, setShowDeletedHabits] = useState(false);
  const [showFavoriteHabits, setShowFavoriteHabits] = useState(false); // Controls the modal
  const [favoriteHabits, setFavoriteHabits] = useState([]); // List of favorite habits

  useEffect(() => {
    const storedHabits = JSON.parse(localStorage.getItem("habits")) || [];
    setHabits(storedHabits);
  }, []);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = (habit) => {
    setHabits([...habits, habit]);
  };

  const updateHabit = (index, updatedHabit) => {
    const updatedHabits = [...habits];
    updatedHabits[index] = updatedHabit;
    setHabits(updatedHabits);
  };

  const deleteHabit = (index) => {
    const deletedHabit = habits[index];
    const updatedHabits = habits.filter((_, i) => i !== index);
    setHabits(updatedHabits);
    setDeletedHabits([...deletedHabits, deletedHabit]);

    // Remove the deleted habit from favoriteHabits if it exists
    if (favoriteHabits.includes(deletedHabit)) {
      const updatedFavoriteHabits = favoriteHabits.filter(
        (habit) => habit !== deletedHabit
      );
      setFavoriteHabits(updatedFavoriteHabits);
    }
  };

   const toggleDeletedHabits = () => {
     setShowDeletedHabits(!showDeletedHabits);
   };

  const toggleFavorite = (index) => {
    const habitToFavorite = habits[index];
    if (!favoriteHabits.includes(habitToFavorite)) {
      setFavoriteHabits([...favoriteHabits, habitToFavorite]);
    } else {
      const updatedFavoriteHabits = favoriteHabits.filter(
        (habit) => habit !== habitToFavorite
      );
      setFavoriteHabits(updatedFavoriteHabits);
    }
  };

  return (
    <div className='app-container'>
      <div className='nav-menu'>
        <button onClick={() => setShowDeletedHabits(!showDeletedHabits)}>
          Deleted Habits
        </button>
        <button onClick={() => setShowFavoriteHabits(!showFavoriteHabits)}>
          Favorite Habits
        </button>
      </div>
      <h1>Habit Tracker</h1>
      <HabitForm addHabit={addHabit} />
      <HabitList
        habits={habits}
        favoriteHabits={favoriteHabits}
        updateHabit={updateHabit}
        deleteHabit={deleteHabit}
        toggleFavorite={toggleFavorite}
      />
      {showDeletedHabits && (
        <DeletedHabits
          deletedHabits={deletedHabits}
          onClose={toggleDeletedHabits}
        />
      )}
      {showFavoriteHabits && (
        <FavoriteHabits
          favoriteHabits={favoriteHabits}
          setShowFavoriteHabits={setShowFavoriteHabits}
        />
      )}
    </div>
  );
}

export default App;
