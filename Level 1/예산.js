function solution(d, budget) {
    let sum = d.reduce((acc, cur) => acc +cur);
    let count = [];
    d.sort((a,b) => b-a);

    for(i=0; i<d.length; i++){
        if(sum<=budget){
            break;
        }
        else {
            count.push(i);
            sum -= d[i];
        }
    }
    return d.length - count.length;
}
