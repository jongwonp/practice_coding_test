function solution(n) {
    let count = 0;                //연속 합이 n이되는 조합이 생기면 1씩 올릴 변수
    for(i=1; i<=n; i++){             // 연속 합을 시작할 숫자를 올리는  for문
        let sum = 0;                 //연속 합을 누적할 변수
        for(j=i; j<=n; j++){              //연속할 숫자부터 1씩 올리면서 값을 더해나갈 for문
            sum += j;
            if(sum>=n){                 //연속 합이 n과 같으면 count 올림
                if(sum == n)count++;
                break;
            }
        }
    }
    return count;
}