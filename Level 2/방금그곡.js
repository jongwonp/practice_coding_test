function solution(m, musicinfos) {
    const transSharp = new RegExp(/[A-Z]\#/,'g');
    m = m.replace(transSharp, x => x[0].toLowerCase());

    let answer = '';
    // musicinfos의 요소를 [playTime, title, score, fullScore] 형식으로 만들기
    musicinfos = musicinfos.map(x => x.split(',')).map(x => {
        let [startTime, endTime, title, score] = x;

        score = score.replace(transSharp, x => x[0].toLowerCase());

        startTime = (startTime[0] + startTime[1]) * 60 + parseInt(startTime[3] + startTime[4])
        endTime = (endTime[0] + endTime[1]) * 60 + parseInt(endTime[3] + endTime[4])
        let playTime = endTime - startTime;
        let fullScore = '';

        fullScore = score.repeat(Math.floor(playTime / score.length)) + score.substring(0, playTime % score.length);

        return [playTime, title, score, fullScore]
    })

    let musicList = []; // 조건에 맞는 음악을 넣을 배열
    let musicLength = [];   // 조건에 맞는 음악의 재생 길이를 넣을 배열
    musicinfos.forEach(x => {
        const [playTime, title, score, fullScore] = x;

        if(fullScore.includes(m)){
            musicList.push([title, fullScore])
            musicLength.push(fullScore.length)
        }
    })

    musicList = musicList.filter(x => x[1].length === Math.max(...musicLength));    // 조건에 맞는 음악중 가장 재생 길이가 긴 음악만 선별함

    if(musicList.length === 0){
        answer = '(None)'
    } else {
        answer = musicList[0][0]
    }

    return answer
}

// 대문자 + '#' 로 이루어진 길이 2의 단어를 소문자 한 글자로 바꾸어서 처리하는 방식으로 답을 맞추었다.
