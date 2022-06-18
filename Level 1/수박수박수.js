function solution(n) {
    let arr = new Array(n).fill('수').map((v,i) => i % 2 == 1 ? '박' : '수')

    return arr.join('');
}
