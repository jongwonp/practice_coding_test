function solution(left, right) {
    let arr = [];
    for(i=0; i<right - left + 1; i++){
        arr[i] = left + i;
    }

    arr = arr.map(v => {
        if(Number.isInteger(Math.sqrt(v))) return -v;
        else return v;
    })

    return arr.reduce((acc,cur) => acc + cur);
}
