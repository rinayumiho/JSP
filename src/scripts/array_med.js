function arrayMed(arr){
    arr.sort();
    let n = arr.length;
    let m = Math.floor(n / 2);
    if(n % 2 === 1){
        return arr[m].toFixed(2).toString();
    }
    return ((arr[m - 1] + arr[m]) / 2).toFixed(2).toString();
}

export default arrayMed;