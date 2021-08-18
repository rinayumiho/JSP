function getMostFiveContents(obj){
    let keys = Object.keys(obj);
    let res = mergeSort(keys, obj);
    return res.slice(0, Math.min(res.length, 5));
}

function mergeSort(keys, obj){
    let n = keys.length;
    if(n < 2){
        return keys;
    }
    let m = Math.floor((n - 1) / 2);
    let left = mergeSort(keys.slice(0, m + 1), obj);
    let right = mergeSort(keys.slice(m + 1), obj);
    return merge(left, right, obj);
}

function merge(left, right, obj){
    let res = [];
    let i = 0;
    let j = 0;
    while(i < left.length && j < right.length){
        if(obj[left[i]] < obj[right[j]]){
            res.push(right[j ++]);
        }else{
            res.push(left[i ++]);
        }
    }
    while(i < left.length){
        res.push(left[i ++]);
    }
    while(j < right.length){
        res.push(right[j ++]);
    }
    return res;
}

export default getMostFiveContents;