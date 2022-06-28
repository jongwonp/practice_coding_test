function solution(n,a,b){
    let count = 1;
    const half = (num) => {return (num%2) == 1 ? (num+1)/2 : num/2 }
    
    while(a !== b){
        a = half(a);
        b = half(b);
        count ++;
    }
    return count-1
}