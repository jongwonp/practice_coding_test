function solution(arr) {
    for(i=0; i<arr.length-1; i++){
       arr[i+1] = arr[i]*arr[i+1] / getGCD(arr[i],arr[i+1]);
    }
    return arr[arr.length-1];
}

const getGCD = (a,b) => { 
    if(a>b) return a % b == 0 ? b : getGCD(b, a % b)
    else return b % a == 0 ? a : getGCD(a, b % a);
}