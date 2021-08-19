import getRandomPic from "./scripts/get_random_pic";
import getFoodData from "./scripts/get_food_data";


document.addEventListener("DOMContentLoaded", () => {
  
  console.log("Hello World");
  let foodName = "";
  const nameForm = document.getElementById('categories');
  const links = {
    "biryani": "https://en.wikipedia.org/wiki/Biryani",
    "burger": "https://en.wikipedia.org/wiki/Hamburger",
    "butter-chicken": "https://en.wikipedia.org/wiki/Butter_chicken",
    "dessert": "https://en.wikipedia.org/wiki/Dessert",
    "dosa": "https://en.wikipedia.org/wiki/Dosa",
    "idly": "https://en.wikipedia.org/wiki/Idli",
    "pasta": "https://en.wikipedia.org/wiki/Pasta",
    "pizza": "https://en.wikipedia.org/wiki/Pizza",
    "rice": "https://en.wikipedia.org/wiki/Rice",
    "samosa": "https://en.wikipedia.org/wiki/Samosa"
  }
  nameForm.addEventListener('submit', event => {
    event.preventDefault();
    const mainDiv = document.getElementById('main');
    mainDiv.style.backgroundImage= "none";
    const foodNameInput = document.getElementById('foods');
    foodName = foodNameInput.value;
    getRandomPic(foodName);
    getFoodData(foodName, links);
    
  });
});
