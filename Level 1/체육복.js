function solution(n, lost, reserve) {
    reserve.forEach((v,i) => {              // lost랑 reserve 중복값 있으면 lost는 해당요소제거 reserve는 해당요소 0으로 만들기
        if(lost.includes(v)){
            lost = lost.filter(x => x !== v);
            reserve[i] = 0;
        }
    })
    reserve = reserve.filter(x => x!==0);  // 0으로 만든 요소 제거

    var answer = n - lost.length;  // 체육시간 참여 가능한 최소인원 정의
    lost.sort((a,b)=> a-b);
    reserve.sort((a,b)=> a-b);

    reserve.forEach(v => {      // 앞 또는 뒷 번호가 여분 체육복 있으면 체육시간 참여 인원 +1
        if(lost.includes(v-1)){
            answer++;
            lost = lost.filter(x => x !== v-1);
        }
        else if(lost.includes(v+1)){
            answer++;
            lost = lost.filter(x => x !== v+1);
        }
    })

    return answer;
}

