import React from 'react'

const FavoriteHabits = ({ favoriteHabits, setShowFavoriteHabits }) => {
  return (
    <div className='favorite-habits-modal'>
      <div className='favorite-habits-content'>
        <h2>Favorite Habits</h2>
        <ul>
          {favoriteHabits.map((habit, index) => (
            <li key={index}>{habit}</li>
          ))}
        </ul>
        <button onClick={() => setShowFavoriteHabits(false)}>Close</button>
      </div>
    </div>
  );
};

export default FavoriteHabits;
