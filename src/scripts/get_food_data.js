import arrayAve from "./array_ave";
import arrayMed from "./array_med";
import getMostFiveContents from "./get_most_five_contents";
import chartNutrients from "./chart_nutrients";
import chartContents from "./chart_contents";

async function getFoodData(foodName){
    const api_url = "https://api.edamam.com/api/food-database/v2/parser?app_id=";
    const app_id = "c23279bf";
    const app_key = "bc1520f2990225fa3bdd349a5b10b459";
    const url = api_url + app_id + "&app_key=" + app_key + "&ingr=" + foodName;
    console.log(url);
    const rawData = await fetch(url);
    const jsonData = await rawData.json();
    const data = {};
    data["Calories"] = [];
    data["Protein"] = [];
    data["Fat"] = [];
    data["Carbohydrates"] = [];
    data["Fiber"] = [];
    console.log(data);
    const materials = {};
    jsonData.hints.forEach(ele => {
        if(ele.food.nutrients.ENERC_KCAL != undefined && ele.food.nutrients.ENERC_KCAL != "0"){
            data["Calories"].push(parseFloat(ele.food.nutrients.ENERC_KCAL));
        }
        if(ele.food.nutrients.PROCNT != undefined && ele.food.nutrients.PROCNT != "0"){
            data["Protein"].push(parseFloat(ele.food.nutrients.PROCNT));
        }
        if(ele.food.nutrients.FAT != undefined && ele.food.nutrients.FAT != "0"){
            data["Fat"].push(parseFloat(ele.food.nutrients.FAT));
        }
        if(ele.food.nutrients.CHOCDF != undefined && ele.food.nutrients.CHOCDF != "0"){
            data["Carbohydrates"].push(parseFloat(ele.food.nutrients.CHOCDF));
        }
        if(ele.food.nutrients.FIBTG != undefined && ele.food.nutrients.FIBTG != "0"){
            data["Fiber"].push(parseFloat(ele.food.nutrients.FIBTG));
        }
        if(ele.food.foodContentsLabel != undefined){
            const contents = ele.food.foodContentsLabel.split("; ");
            contents.forEach(c => {
                c = c.toLowerCase();
                if(!materials[c]){
                    materials[c] = 0;
                }
                materials[c] ++;
            });
        }
    });
    
    console.log(`After put some stuff, data is: ${data}`);
    // debugger

    const showValues = {};
    showValues["min"] = [];
    showValues["max"] = [];
    showValues["ave"] = [];
    showValues["med"] = [];

    const xLabels = [];
    for(const [key, val] of Object.entries(data)){
        // const unit = "g";
        // if(key === "Calories"){
        //     unit = "kcal";
        // }
        // const ul = document.createElement('ul');
        // ul.textContent = `${key} (${unit})`

        xLabels.push(key);

        const maxValue = Math.max(...val).toFixed(2).toString();
        // const li1 = document.createElement('li');
        // li1.textContent = `Max: ${maxValue}`
        // ul.appendChild(li1);
        showValues["max"].push(parseFloat(maxValue));

        const minValue = Math.min(...val).toFixed(2).toString();
        // const li2 = document.createElement('li');
        // li2.textContent = `Min: ${minValue}`
        // ul.appendChild(li2);
        showValues["min"].push(parseFloat(minValue));

        const aveValue = arrayAve(val);
        // const li3 = document.createElement('li');
        // li3.textContent = `Average: ${aveValue}`
        // ul.appendChild(li3);
        showValues["ave"].push(parseFloat(aveValue));

        const medValue = arrayMed(val);
        // const li4 = document.createElement('li');
        // li4.textContent = `Median: ${medValue}`
        // ul.appendChild(li4);
        showValues["med"].push(parseFloat(medValue));

        // div.appendChild(ul);
    }
    const calories = document.getElementById('calories');
    calories.innerHTML = "";
    const name = document.createElement('h2');
    const caloriesTitle = document.createElement('p');
    const caloriesValue = document.createElement('p');
    name.textContent = foodName.charAt(0).toUpperCase() + foodName.slice(1);
    caloriesTitle.textContent = `Calories: ${showValues["min"][0]} ~ ${showValues["max"][0]} kcal`;
    caloriesValue.textContent = `5 most frequently used contents:`;
    calories.appendChild(name);
    calories.appendChild(caloriesTitle);
    calories.appendChild(document.createElement('br'));
    calories.appendChild(caloriesValue);


    const mostFiveContents = getMostFiveContents(materials);
    // const p1 = document.createElement('p');
    // p1.textContent = "5 most frequently used contents:";
    // div.appendChild(p1);

    // const p2 = document.createElement('p');
    // p2.textContent = mostFiveContents.join(", ");
    // div.appendChild(p2);

    chartNutrients(xLabels, showValues);
    chartContents(materials, mostFiveContents);
}

export default getFoodData;