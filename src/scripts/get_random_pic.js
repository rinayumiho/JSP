
function getRandomPic(){
    const food_pic = document.getElementById('get-from-api');
    const submit_btn = document.getElementById('selection-submit');

    submit_btn.addEventListener('click', getFoodPic);
    async function getFoodPic(){
        const foodNameInput = document.getElementById('foods');
        const foodName = foodNameInput.value;
        const url = `https://foodish-api.herokuapp.com/api/images/${foodName}`;
        const res = await fetch(url);
        const data = await res.json();
        food_pic.innerHTML = `<img src="${data.image}"/>`;

    }
}

export default getRandomPic;