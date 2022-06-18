function solution(arr){
    var answer = [];

    arr.map((v,i) => {
        if(v !== arr[i+1]){
            answer.push(v);
        }
    })

    return answer;
}