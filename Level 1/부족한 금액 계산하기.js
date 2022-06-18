function solution(price, money, count) {
    var answer = -1;

    let acc = 0;

    for(i=1; i<=count; i++){
        acc += i*price
    }

    if(money < acc){
        answer = acc - money;
    }
    else {
        answer = 0;
    }
    return answer;
}