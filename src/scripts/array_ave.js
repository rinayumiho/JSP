function arrayAve(arr){
    let sum =  arr.reduce((acc, ele) => acc + ele);
    return (sum / arr.length).toFixed(2).toString();
}

export default arrayAve;