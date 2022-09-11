function solution(msg) {
    let answer = [];

    let alphabet = [];                              // A-Z가 담긴 배열을 만든다.
    for(let i = 65; i <= 90; i++){
        alphabet.push(String.fromCharCode(i));    
    }

    let map = new Map();                            // map에 A-Z를 각각 key로, 인덱스+1을 값으로 넣어준다.
    for(const char of alphabet){
        map.set(char,alphabet.indexOf(char) + 1)
    }

    let temp = '';                                  // 문자열 msg에서 한 글자씩 저장해볼 변수 선언
    for(let i = 0; i < msg.length + 1; i++){
        if(map.has(temp + msg[i])){                 // temp에 현재 순번의 한 글자를 합친 글자(msg[i])가 map에 있으면 그대로 temp에 현재 순번의 글자를 합침.
            temp += msg[i]
        } else {                                    // 그게 아니라면 map에 있는 temp를 answer배열에 넣고, temp + msg[i]를 map에 새롭게 집어 넣음. 마지막으로 temp를 msg[i]로 설정
            answer.push(map.get(temp))
            map.set(temp + msg[i], map.size +1);
            temp = msg[i];
        }
    }
    return answer
}

// 문제에서 하라는대로 해보는 것만으로도 쉽게 풀었다.
// 공부만 해놓고 안쓰던 map을 처음으로 써봤다.