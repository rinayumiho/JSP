import arrayAve from "./array_ave";
import arrayMed from "./array_med";

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
    });
    
    console.log(`After put some stuff, data is: ${data}`);
    // debugger
    const div = document.getElementById('info-show');
    div.innerHTML = "";
    for(const [key, val] of Object.entries(data)){
        const unit = "g";
        if(key === "Calories"){
            unit = "kcal";
        }
        const ul = document.createElement('ul');
        ul.textContent = `${key} (${unit})`

        const maxValue = Math.max(...val).toFixed(2).toString();
        const li1 = document.createElement('li');
        li1.textContent = `Max: ${maxValue}`
        ul.appendChild(li1);

        const minValue = Math.min(...val).toFixed(2).toString();
        const li2 = document.createElement('li');
        li2.textContent = `Min: ${minValue}`
        ul.appendChild(li2);

        const aveCalories = arrayAve(val);
        const li3 = document.createElement('li');
        li3.textContent = `Average: ${aveCalories}`
        ul.appendChild(li3);

        const medCalories = arrayMed(val);
        const li4 = document.createElement('li');
        li4.textContent = `Median: ${medCalories}`
        ul.appendChild(li4);

        div.appendChild(ul);
    }
}

export default getFoodData;