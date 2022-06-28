function solution(n, words) {
    let check1 = 0;
    let check2 = 0;

    for(i=0; i<words.length; i++){  // 끝말 안 이어진 사람 탈락
        if(i+1<words.length){
            if(words[i][words[i].length-1] !== words[i+1][0]){
                check1 = i+1;
                break;
            }
        }
    }

    for(i=0; i<words.length; i++){  // 중복된 단어 말한 사람 탈락
        for(j=0; j<words.length; j++){
            if(i !== j && i<j){
                if(words[i] === words[j]){
                    if(check2 !== 0){
                        check2 = Math.min(j,check2);
                    }
                    else check2 = j;
                    break;
                }
            }
        }
    }

    let fail = 0;   // 탈락자 인덱스 넣을 변수
    if(check1 !==0 && check2 !== 0){    // 탈락하는 두가지 경우가 모두 발생했을 때는 일찍 탈락한 사람이 탈락자
        fail = Math.min(check1,check2);
    }
    if(check1 == 0 || check2 == 0){     // 한명만 탈락했음.
        fail = Math.max(check1,check2)
    }

    let numOfFail = 0;  //탈락자 번호 넣을 변수
    if((fail+1) % n !== 0) numOfFail = (fail+1) % n
    else numOfFail = n;

    return check1 === 0 && check2 === 0 ? [0,0] : [numOfFail, Math.ceil((fail+1) / n)];
}
