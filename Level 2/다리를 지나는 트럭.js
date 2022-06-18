function solution(bridge_length, weight, truck_weights) {
    let onBridge = [];  // 다리
    let second = 0; // 시간
    let timeLog = [];   // 다리에 진입한 트럭의 소요시간 

    onBridge.push(truck_weights[0]);    // 다리에 첫 트럭 진입
    timeLog.push(0);    // 첫 트럭 경과시간 세팅
    weight -= truck_weights[0]; // 다리 최대 지지중량에서 트럭 중량 뺌
    truck_weights.shift();  // 첫 트럭은 대기목록에서 뺌
    second++;   // 1초 증가

    while((onBridge.length !== 0) || (truck_weights.length !== 0)){ // 다리 위 또는 대기열에 트럭이 있으면 반복
        timeLog = timeLog.map(v => v+1);    // 다리위에 있는 트럭들의 경과시간 1초 증가
        if(timeLog[0] == bridge_length){    // 다리 위에 있는 트럭 중 맨 앞 트럭의 경과시간이 다리의 길이와 같다면 (= 다리를 지날만큼 경과)
            weight +=onBridge[0];   // 줄어들었던 다리의 최대 지지중량에서 곧 빠져나가는 맨 앞트럭의 무게만큼 더해줌
            timeLog.shift();    // 경과시간이 다리를 지날만큼 경과했으니, 맨 앞 트럭의 경과시간을 목록에서 제거
            onBridge.shift();   // 맨 앞 트럭을 다리에서 내보냄
        }

        if(weight >= truck_weights[0]){ // 다리 최대 지지중량이 대기열의 맨 앞 트럭보다 크거나 같다면
            onBridge.push(truck_weights[0]);    // 대기열 맨 앞 트럭 다리로 진입
            timeLog.push(0);    // 경과시간도 새로 진입한 한 대분 늘림
            weight -= truck_weights[0]; // 다리 최대 지지중량에서 새로 진입한 트럭의 중량 만큼 뺌
            truck_weights.shift();  // 대기열에서 새로 진입한 트럭을 뺌
        }
        second++;   // 1초 증가
    }
    return second;  // 총 걸린 시간 반환
}