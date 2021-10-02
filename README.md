# Food Nutrition Analysis

[Live Demo](https://rinayumiho.github.io/Food-Nutrition-Analysis/)
<a href="https://rinayumiho.github.io/Food-Nutrition-Analysis/" target="_blank">Live Demo</a>

## Background
Everyone loves delicious food. Today people would like to know what they actually eat in order to keep healthy. That’s why I am going to build this JavaScript Project about food nutrition analysis. This Project is a website that provides nutrition information about some representative food with a corresponding random food picture.

## Functionality & MVPs
The website has the following features: 

* The default page shows the picture of question mark made up by food.
* Each time clicked a random food picture will be present.
* The nutrition information includes calories, protein, fat, carbohydrates and fiber. 
* The 5 most frequently used contents of the food will be present.
* Allow users to register to save and review the information they searched (bonus).

## Wirefames


![wireframe](https://github.com/rinayumiho/Food-Nutrition-Analysis/blob/main/src/assets/jsp-wireframe.PNG "wireframe")
 
* Nav links include links to the project’s Github repo and my LinkedIn.
* The default page covers all the four boxes with a question mark picture
* Once button clicked, a random picture is inside top left box
* The name linked to the food’s wiki page and calories range are inside the top right box.
* A bar graph is inside the bottom left box, with minimum, maximum, average and media data of each nutrient.
* 5 most frequently used contents is inside the bottom right box with a form of donut graph.

## Technologies, Libraries, APIs
This project will be implemented with the following technologies:

* The Chart.js libary to render the materials of the food.
* The APIs “Edaman nutrition”, “Foodish” to handle food informations.
* The Webpack and Babel to bundle and transpile the source JavaScript code.

## Implementation Timeline
* Before Monday: Review the lectures during the JS curriculum. Setup project, including getting webpack up and running, set the board the box classes. Get familiar with APIs and the libraries.

* Monday: Set the default webpage appropriately. Implement the logic of screening food contents according to the frequency. Ensure that the library can be properly referred when doing the screening.

* Tuesday: make sure I can generate graphs appropriately and show the information of selected food contents can be shown appropriately once clicked. 

* Wednesday: focus on styling. Use the CSS animation to decorate the webpage and set the action of each element properly.

* Thursday: Deploy to GitHub pages. Rewrite this proposal as a production README.

* If time: Create the backend part such as user login and authentication.


