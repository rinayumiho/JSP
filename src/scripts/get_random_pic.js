
async function getRandomPic(foodName){
    
    // const nameForm = document.getElementById('categories');
    // nameForm.addEventListener('submit', event => {
    //     event.preventDefault();
    //     getFoodPic();
    // });

    const food_pic = document.getElementById('picture-show');
    // async function getFoodPic(){
    //     const foodNameInput = document.getElementById('foods');
    //     const foodName = foodNameInput.value;
    //     const url = `https://foodish-api.herokuapp.com/api/images/${foodName}`;
    //     const res = await fetch(url);
    //     const data = await res.json();
    //     food_pic.innerHTML = `<img src="${data.image}"/>`;

    // }

    const url = `https://foodish-api.herokuapp.com/api/images/${foodName}`;
    const res = await fetch(url);
    const data = await res.json();
    food_pic.innerHTML = `<img src="${data.image}"/>`;
}

export default getRandomPic;