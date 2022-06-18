function solution(num) {
    var answer = 0;

    for(i=0; i<=501; i++){
        if(num == 1){
            answer = i;
            break;
        }
        if(i == 501){
            answer = -1;
            break;
        }
        num % 2 == 0 ? num = num / 2 : num = (num*3) + 1;
    }

    return answer;
}