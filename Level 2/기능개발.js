function solution(progresses, speeds) {
    let release = [];   // 한번에 배포될 기능의 개수를 적어둘 배열
    while(progresses.length !== 0){ // 남은 작업들의 개수가 없어질 때 까지 반복
        while(progresses[0] < 100){ // 처음으로 배포되어야 할 기능의 진행도가 100 될 때까지 반복
            progresses = progresses.map((value, index) => {
                value += speeds[index]; // 각 기능별로 개발 속도만큼 진행도에 추가
                return value;
            })
        }

        let count = 0;  // 배포될 기능의 개수를 셀 변수

        while(progresses[0] >= 100){    // 처음으로 배포되어야할 기능의 진행도가 100이면 반복
            count++;    //  배포될 기능의 수 1 증가
            progresses.shift(); // 처음으로 배포되어야할 기능의 진행도가 100이 되었으니 작업목록에서 제거
            speeds.shift(); // 개발속도 목록에서도 제거
        }
        release.push(count);    // 이번에 배포될 기능의 개수를 기록
    }
    return release;
}