function solution(lottos, win_nums) {
    var answer = [];
    let countCorrectNum = 0;  //맞춘 번호 개수
    
    lottos.forEach(v => {
        if(win_nums.includes(v)){
            countCorrectNum++;
        }
    })

    //맞춘 번호 개수로 최저순위 정하기
    if(countCorrectNum == 0) answer[1] = 6;
    for(i=1; i<7; i++){
        if(countCorrectNum == i){
            answer[1] = 7-i;
        }
    }

    let count0 = 0;  // 안 보이는 번호 개수
    lottos.forEach(v => {
        if(v == 0) count0++;
    })

    if(count0 == 0) answer[0] = answer[1];
    for(i=1; i+countCorrectNum<7; i++){
        if(count0 == i){
            answer[0] = 7-(count0+countCorrectNum);
        }
    }

    return answer;
}