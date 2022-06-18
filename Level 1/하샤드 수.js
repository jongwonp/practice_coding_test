function solution(x) {
    return x % (x+'').split('').reduce((a,c) => a*1 + c*1) ? false : true; 
}