function solution(n, t, m, p) {
    let arr = [];
    let answer = [];
    let count = 0;

    while(arr.length < t*m){                                // t(미리 구해둘 숫자의 개수) * m(인원) 번째까지만 구하면 된다.
        for(let i = 0; i < count.toString(n).length; i++){  // 0부터 1씩 숫자를 올려가며 그 숫자를 n진법으로 고치고 각 자리수들을 모두 배열에 집어넣기 위한 반복문
            arr.push(count.toString(n)[i])
        }
        count++
    }

    arr.forEach((value, index) => {
        if(((index + 1) - p) % m === 0){                    // p + m*N (N은 0과 자연수)번째마다 숫자를 외침. 따라서 (index+1)에서 p를 빼고 m으로 나눈게 나누어 떨어질 때가 외칠 순서.
            answer.push(value.toUpperCase());
        }
    })
    answer.splice(t);                                       // 0부터 t-1번째 인덱스까지만 구하면 되므로 t번째 인덱스부터는 잘라냄
    return answer.join('')
}


// 조금만 생각하면 쉽게 풀 수 있는 문제