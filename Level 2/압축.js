function solution(msg) {
    let answer = [];

    let alphabet = [];
    for(let i = 65; i <= 90; i++){
        alphabet.push(String.fromCharCode(i));    
    }

    let map = new Map();
    for(const char of alphabet){
        map.set(char,alphabet.indexOf(char) + 1)
    }

    let temp = '';
    for(let i = 0; i < msg.length + 1; i++){
        if(map.has(temp + msg[i])){
            temp += msg[i]
        } else {
            answer.push(map.get(temp))
            map.set(temp + msg[i], map.size +1);
            temp = msg[i];
        }
    }
    return answer
}

// 문제에서 하라는대로 해보는 것만으로도 쉽게 풀었다.
// 공부만 해놓고 안쓰던 map을 처음으로 써봤다.