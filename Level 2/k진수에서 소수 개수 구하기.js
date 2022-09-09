function solution(n, k) {
    return n.toString(k).match(/[1-9]+/g).filter(x => x !== '1').filter(x => {
        for(let i = 2; i<=Math.sqrt(x); i++){
            if(x % i === 0){
                return 0
            }
        }
        return x
    }).length
}

// 가볍게 풀었다. 다만 효율성테스트는 없었지만 효율성이 그리 좋지는 못한 것 같다.