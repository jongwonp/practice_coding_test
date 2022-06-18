function solution(id_list, report, k) {
    var answer = [];

    for(i=0; i<id_list; i++){
        answer[i] = 0;
    }

    report = Array.from(new Set(report)); // 중복 신고 제거

    // 피신고자 배열
    const getReported = report.map(v => v.substr(v.indexOf(' ')+1)); 

    // report 배열을 신고자 이름만 남도록 함.
    report = report.map(v => v.substr(0, v.indexOf(' ')));

    const countReport = {}    //신고당한 횟수 적어넣을 객체

    getReported.forEach((x) => { 
        countReport[x] = (countReport[x] || 0)+1; 
    });

    //정지 당한 유저 배열 만들기.
    const banned = [];

    for(i=0; i<Object.keys(countReport).length; i++){
        if(Object.values(countReport)[i]>=k){
            banned.push(Object.keys(countReport)[i]);
        }
    }

    //메일 받은 유저 배열 만들기.
    const getMailed = [];

    getReported.forEach((v,i) => {
        if(banned.includes(v)){
            if(id_list.includes(report[i])){
                getMailed.push(report[i]);
            }
        } ;
    });

    //메일 받은 유저의 id_list 인덱스와 같은 answer 인덱스 증가.
    id_list.forEach((v,i) => {
        for(j=0; j<getMailed.length; j++){
            if(getMailed[j] == v){
                answer[i]++;
            }
        }
    });

    return answer;
}