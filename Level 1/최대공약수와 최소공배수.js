function solution(n, m) {
    var answer = [];
    let maxPrime = [];

    for(i=1; i<=Math.min(m,n); i++){
        if((m % i == 0) && (n % i == 0)){
            maxPrime.push(i);
        }
    }

    answer[0] = Math.max(...maxPrime);
    answer[1] = m*n/answer[0];

    return answer;
}
