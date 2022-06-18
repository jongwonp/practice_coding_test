function solution(n) {
    let arr = [];

    while(n>=3){
        arr.push(Math.floor(n%3));
        n = n/3;
    }
    arr.push(Math.floor(n))

    let m = 0;
    for(i=0; i<arr.length; i++){
        m += arr[i]*(3**((arr.length-1)-i))
    }

    return m
}