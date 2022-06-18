function solution(absolutes, signs) {
    var answer = 0;

    absolutes.forEach((v,i) => {
        if(signs[i] == false){
            v = -v;
        }
        answer +=v;
    })

    return answer;
}