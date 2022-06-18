function solution(priorities, location) {
    let queue = []; // 큐 생성
    let dup = new Array(priorities.length).fill(0); // priorities와 같은 길이의 배열 생성하고 0으로 채워놓음
    dup[location] = 1;  //  생성한 복제 배열의 location의 위치는 값을 1로 변경해서 표시해둠
    let queueDup = [];  // 복제 배열의 큐 생성

    while(priorities.length !== 0){ // priorities의 길이가 0이 될때 까지 반복
        if(priorities[0] == Math.max(...priorities)){   // priorities의 첫 파일의 우선순위가 가장 크다면
            queue.push(priorities[0]);  // 큐에 첫 파일 넣음
            priorities.shift(); // priorities에서는 첫 파일 제거
            queueDup.push(dup[0]);  // 복제 배열의 큐에도 복제배열의 첫 파일 넣음
            dup.shift();    // 복제배열에서는 첫 파일 제거
        }
        else {  // priorities의 첫 파일의 우선순위가 가장 크지 않다면
            priorities.push(priorities[0]); // 첫파일을 가장 끝 순서로 복사
            priorities.shift(); // 맨 뒤로 보냈으니 첫 파일 제거
            dup.push(dup[0]);   //복제 배열도 마찬가지로 가장 끝 순서로 보냄
            dup.shift();    // 마찬가지로 뒤로 보내놓았으니 맨 앞파일 삭제
        }
    }
    return queueDup.indexOf(1)+1;   // 우선순위대로 놓여진 큐에서 표시해놓은 1의 위치를 찾고, 순서는 0이 아닌 1부터 시작하니 1을 더해줌
}