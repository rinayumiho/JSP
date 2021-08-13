# JSP Final Proposal
Background
Everyone loves delicious food but having a healthy meal plain in a day is also important to us. That’s why I am going to build this JavaScript Project about food introduction and recommendation. This Project is a website that provides information about the food all over the world, and the recommendation daily meal plan for users based on their preference.

Functionality & MVPs
The website has the following features: 

1)  The default page shows the information of a random food every 30 seconds.
2)  Each food has a link to its recipe through its name.
3)  Allow users to build their own today’s recipe based on their preference. 
4)  The recipe includes breakfast, lunch and dinner.
5)  Allow users to register to save and review the information they created(bonus).

Wirefames
https://wireframe.cc/Rf28Mz

1)  Nav links include links to the project’s Github repo and my LinkedIn.
2)  The preference box in the left include region, flavor, material, calories selections, and submit button.
3)  The region, flavor and material are optional, but the calories are required. If user doesn’t input properly the webpage will raise an alert.
4)  The right box includes daily meal plan lists after users submit the request. The information of the selected food in the plan will be shown in the middle.
5)  The middle up box shows the picture of the selected food with a linked name to its recipe.
6)  The middle bottom box shows the picture and the name of the materials of the selected food.
7)  If no food is selected, the middle boxes will show the information of a random food.

Technologies, Libraries, APIs
This project will be implemented with the following technologies:

1)  The Canvas API to render the materials of the food.
2)  The libraries “Edaman nutrition”, “Open Food Facts”, “The MealDB” to handle food informations.
3)  The Webpack and Babel to bundle and transpile the source JavaScript code.

Implementation Timeline
Before Monday: Review the lectures during the JS curriculum. Setup project, including getting webpack up and running, set the board the box classes. Get familiar with Canvas API and the libraries.

Monday: Set the default webpage appropriately. Implement the logic of screening foods according to user’s preference. Ensure that the library can be properly referred when doing the screening.

Tuesday: make sure I can generate the meal plan appropriately and show the information of selected food and materials can be shown appropriately once clicked. 

Wednesday: focus on styling. Use the CSS animation to decorate the webpage, and set the action of each element properly.

Thursday: Deploy to GitHub pages. Rewrite this proposal as a production README.

If time: Create the backend part such as user login and authentication.

