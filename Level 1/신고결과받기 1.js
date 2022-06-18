function solution(id_list, report, k) {
    var answer = [];

    report = Array.from(new Set(report)); //중복 신고 제거

    // report 배열에서 신고자와 피신고자를 따로 구분

    let reporter = [];
    let reported = [];

    for(i=0; i<report.length; i++){
        if(report[i].indexOf(' ')){
            reporter[i] = report[i].substr(0, report[i].indexOf(' '));
            reported[i] = report[i].substr(report[i].indexOf(' ')+1, );
        }
    }

    //reported 배열에 얼마나 이름이 등장하는가

    const countReport = {}    //신고당한 횟수 적어넣을 객체

    reported.forEach((x) => { 
        countReport[x] = (countReport[x] || 0)+1; 
    });

    // 피신고자 배열에서 중복 개수 확인 후 k값과 비교

    const banned = [];   // 피신고 한도 넘겨서 정지된 유저 배열

    for(i=0; i<Object.keys(countReport).length; i++){
        if(Object.values(countReport)[i]>=k){
            banned.push(Object.keys(countReport)[i]);
        }
    }   
    
    // 정지당한 유저를 신고한 유저에게 메일 / 메일 받은 횟수 return

    const getMailArr = []; // 메일 받을 때마다 이름이 적히는 배열

    for(i=0; i<reporter.length; i++){
        for(j=0; j<banned.length; j++){
            if(reported[i]==banned[j]){
                getMailArr.push(reporter[i]);
            } 
        }
    }

    const getMailObj = {}; // 메일 받은 횟수 적히는 객체

    getMailArr.forEach((x) => { 
        getMailObj[x] = (getMailObj[x] || 0)+1; 
    });

    const existInMail = Array.from(new Set(getMailArr)); // 메일 받은 유저 중복없는 배열

    // 메일 받지 못한 유저도 getMailObj에 이름이 들어가고 받은 횟수 0으로 만들기

    const notExist = id_list.filter(x => !existInMail.includes(x)); //메일 받지 못한 유저만 적히는 배열

    for(i=0; i<notExist.length; i++){
        getMailObj[notExist[i]] = 0;
    }

    for(i=0; i<id_list.length; i++){
        for(j=0; j<Object.keys(getMailObj).length; j++){
            if(id_list[i] == Object.keys(getMailObj)[j]){
                answer[i] = Object.values(getMailObj)[j];
            }
        }
    }

    return answer;
}