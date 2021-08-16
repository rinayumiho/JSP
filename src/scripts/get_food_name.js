function getFoodName(){
    const nameForm = document.getElementById('categories');
    nameForm.addEventListener('submit', event => {
        event.preventDefault();
        const foodNameInput = document.getElementById('foods');
        return foodNameInput.value;
    });
}

export default getFoodName;