function solution(n) {
    const arr124 = [4,1,2]
    let rest =[];
    while(n !== 0){
        rest.unshift(arr124[n%3]);  // 먼저 나머지를 배열에 쌓아둠
        if(n % 3 == 0){
            n = parseInt((n/3)-1);  // 만약 n이 3의 배수라면 다음 순서에서 나눌 수(현재의 몫)는 n을 3으로 나눈 수에서 1을 뺀 수.
        }
        else {
            n = parseInt(n/3);  // 몫이 3의 배수가 아니면 다음 순서에서 나눌 수(현재의 몫)는 n을 3으로 나눈 수 그대로.
        }
    }
    return rest.join('');
}