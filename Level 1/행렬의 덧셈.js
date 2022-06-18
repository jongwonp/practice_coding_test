function solution(arr1, arr2) {
    var answer = new Array(arr1.length);
    arr1.forEach((v,i) => {
        answer[i] = new Array(v.length);
        for(x=0; x<v.length; x++){
            answer[i][x] = arr1[i][x] + arr2[i][x]
        }
    })

    return answer;
}