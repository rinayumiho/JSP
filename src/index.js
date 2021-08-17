import getRandomPic from "./scripts/get_random_pic";
import getFoodData from "./scripts/get_food_data";


document.addEventListener("DOMContentLoaded", () => {

  console.log("Hello World");
  let foodName = "";
  const nameForm = document.getElementById('categories');
  nameForm.addEventListener('submit', event => {
    console.log("User submitted!")
    event.preventDefault();
    const foodNameInput = document.getElementById('foods');
    foodName = foodNameInput.value;
    getRandomPic(foodName);
    getFoodData(foodName);
    
  });
});
