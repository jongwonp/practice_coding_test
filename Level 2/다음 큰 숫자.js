function solution(n) {
    const numOf1 = n.toString(2).split('').filter(v => v==1).length;
    n++;
    while(1){
        if(n.toString(2).split('').filter(v => v==1).length == numOf1){
            return n;
        }
        n++;
    }
}