function solution(fees, records) {
    let answer = [];
    let accumulatedTime = 0;

    records.sort((a,b) => a.match(/[0-9]{4}/)[0] - b.match(/[0-9]{4}/)[0])
    let currentNum = records[0].match(/[0-9]{4}/)[0];

    const calculate = (str) => {
        let [time, carNum, inOut] = str.split(' ');

        if(currentNum === carNum){
            if(inOut === 'IN'){
                accumulatedTime -= (time[0] + time[1]) * 60 + parseInt(time[3] + time[4]);
            } else {
                accumulatedTime += (time[0] + time[1]) * 60 + parseInt(time[3] + time[4]);
            }
        } else {
            if(accumulatedTime <= 0) accumulatedTime += 1439;
            if(accumulatedTime <= fees[0]){
                answer.push(fees[1])
            } else{
                answer.push(Math.ceil((accumulatedTime - fees[0]) / fees[2]) * fees[3] + fees[1]);
            }

            accumulatedTime = 0;
            currentNum = carNum;
            if(inOut === 'IN'){
                accumulatedTime -= (time[0] + time[1]) * 60 + parseInt(time[3] + time[4]);
            } else {
                accumulatedTime += (time[0] + time[1]) * 60 + parseInt(time[3] + time[4]);
            }
        }
    }
    records.forEach(x => calculate(x))
    if(accumulatedTime <= 0) accumulatedTime += 1439;
    if(accumulatedTime <= fees[0]){
        answer.push(fees[1])
    } else{
        answer.push(Math.ceil((accumulatedTime - fees[0]) / fees[2]) * fees[3] + fees[1]);
    }
    return answer
}

// 쉽게 풀어내긴 했는데 16문제중 2문제가 틀렸다고 나왔었다.
// 예외를 아무리 생각해도 도저히 생각이 안 나서 처음부터 다시 풀어보다보니 발견했다.
// 부등호를 사용하는 부분에서 등호를 포함시켜야 하는데 포함시키지 않았어서 틀린 것이었다.