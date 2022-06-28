function solution(arr1, arr2) {
    let answer = Array.from(Array(arr1.length),() => new Array(arr2[0].length).fill(0));    //행렬의 곱셈의 규칙에 맞춘 곱한 결과 행렬의 모양을 만듬

    for(i=0; i<answer.length; i++){
        for(j=0; j<answer[i].length; j++){
            for(k=0; k<arr2.length; k++){
                answer[i][j] += arr1[i][k]*arr2[k][j]   // 곱한 결과의 각 위치(1차원&2차원 인덱스)의 값은 arr1[i][k]*arr2[k][j] 들의 합이다.
            }                                           // 여기서 i는 arr1의 1차원 길이(행렬의 가로) 또는 arr2의 2차원 길이(행렬의 세로)이다.
        }                                               //       j는 arr1의 2차원 길이(행렬의 세로) 또는 arr2의 1차원 길이(행렬의 가로)이다.
    }                                                   //       k는 arr1의 1차원 길이(행렬의 가로) 또는 arr2의 2차원 길이(행렬의 세로)이다.
    return answer;                                      // i와 j는 한 위치의 값을 구할때는 고정값이지만 k는 인덱스가 늘어나기에 i와 k를 구별했다.
}