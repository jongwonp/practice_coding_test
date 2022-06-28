function solution(record) {
    let lastNicknameObj = {};   // 유저아이디와 닉네임 쌍 저장할 객체
    record = record.map(v => v.split(' ')); // 이용하기 쉽게 배열(record)의 요소(문자열)들을 배열로 만듬
    record.forEach(v => {if(v[2] !== undefined){lastNicknameObj[v[1]] = v[2]}}) // 닉네임 업데이트, Leave 인 경우 2번 인덱스가 없으니  Leave인 경우 제외.
    record.forEach(v => {v[2] = lastNicknameObj[v[1]]}) // 업데이트된 닉네임으로 교체하기
    let result = [];
    record.forEach(v => {
        if(v[0] == 'Enter'){
            result.push(`${v[2]}님이 들어왔습니다.`);
        }
        else if(v[0] == 'Leave'){
            result.push(`${v[2]}님이 나갔습니다.`);
        }
    })
    return result;
}