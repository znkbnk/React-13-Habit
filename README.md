We added features such as the ability to delete habits from
Favorites page, mark habits as favorites, and display
favorite habits in a modal.

Step 1: Setting Up State

- Import the necessary hooks by adding the following at the
top of your App.js file.
- Inside your App component, set up the state variables. 
For example: (showDeletedHabits, setShowDeletedHabits, 
showFavoriteHabits, setShowFavoriteHabits,
favoriteHabits, setFavoriteHabits).

Step 2: Implement Habit Deletion from Favorites page.

- Check if the deleted habit exists in the favoriteHabits array 
using the includes method. If it does, remove it from the
favoriteHabits array using the filter method.

Step 3: Implement Favorite Habits

- Create a new function named toggleFavorite.
- This function should accept the index of the habit as a parameter.
- Use the habitToFavorite variable to store the habit at
the specified index.
- Check if favoriteHabits includes the habit. If not, add it using
setFavoriteHabits, and if it does, remove it using the filter method.

Step 4: Show Favorite Habits Modal

- In your App.js file, find the section where you're rendering
the navigation menu.
- Add a new button to show the favorite habits modal.
- Inside the modal content:
- List the habits from the favoriteHabits array.
- Add a button to close the modal by toggling showFavoriteHabits.

Step 5: Styling and Testing

- Style your components using CSS to make them visually appealing.
- You can apply your desired styling to the various elements,
such as buttons, lists, and modals.

Step 6: Test the application:

- Add new habits to ensure they appear in the list as expected.
- Delete habits and verify they are removed from favorites if needed.
- Mark habits as favorites and confirm they are added to the favorites list.
- Open and close the favorite habits modal to ensure the list
- displays correctly and closes when expected.
