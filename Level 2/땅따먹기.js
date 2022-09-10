function solution(land) {
    for(let i = 1; i < land.length; i++){
        for(let j = 0; j < 4; j++){
            land[i][j] += Math.max(...land[i-1].slice(0,j), ...land[i-1].slice(j+1))
        }
    }
    return Math.max(...land[land.length - 1])
}

// land의 길이가  최대 100,000 이기에 dp를 제외한 다른 방법으로 풀어보기에는 용량이 너무 커진다.
// 각 행에 이전 행에서 열이 다른 수들 중 최대값을 더해가도록 하여서 마지막 행에서의 최대값이 정답이 되도록 하였다.