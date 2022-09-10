function solution(k, dungeons) {
    let spareK = k;
    const arr = new Array(dungeons.length).fill(0).map((v,i) => i);
    const cases = getPermutations(arr, dungeons.length)
    let answer = [];

    cases.forEach(x => {
        let count = 0;
        x.forEach(y => {
                if(spareK >= dungeons[y][0]){
                    spareK -= dungeons[y][1]
                    count++
                }
        })
        answer.push(count);
        spareK = k
    })

    return Math.max(...answer);
}

const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)]
      const permutations = getPermutations(rest, selectNumber - 1);
      const attached = permutations.map((el) => [fixed, ...el]);
      results.push(...attached);
    });

    return results;
}

// 단순하게 순열 이용해서 풀어봤는데 역시나 시간이 오래걸린다.
// dfs를 이용해서 푸는게 나을 것 같다.