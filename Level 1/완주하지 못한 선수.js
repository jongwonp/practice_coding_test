function solution(participant, completion) {
    var answer = '';
    
    participant.forEach((v,i) => {
        for(j=0; j<completion.length; j++){
            if(participant[i] == completion[j]){
                participant.splice(i,1,0);
                completion.splice(j,1);
            }
        }
    })
    for(i=0; i<participant.length; i++){
        if(participant[i] !== 0){
            answer = participant[i];
        }
    }

    return answer;
}



function solution(participant, completion) {
    participant.sort();
    completion.sort();
    participant = participant.filter(v => {
        if(completion.length == 0){
            return v;
        }
        for(i=0; i<completion.length; i++){
            if(v == completion[i]){
                completion.splice(i,1);
                break
            }
            if((i == completion.length -1) && (v !== completion[completion.length -1])){
                return v;
            }
        }
    })
    return participant[0];
}
// 더 빨라지긴 했으나 여전히 느리다고 함

// 정답을 보니 일단 정렬을 해야 효율성이 확실히 올라간다고 한다.
// 정렬까진 맞고 정렬 이후 코드를 고쳐야함.
// 대부분이 정렬 후 두 배열의 같은 인덱스를 가진 각각의 값이 같으면 넘어가고 다를 경우 그 다른 값이 된 참가자 배열의 값을 반환시켜서 통과함



function solution(participant, completion) {
    participant.sort();
    completion.sort();
    return participant.filter((v,i) => v !==completion[i])[0];
}

// 생각해보니 정답대로 해도 당연하지만 허점이 없음.
// 여러가지 방법으로 생각해볼 때 정답대로 생각해 봤었지만 허점이 있다고 생각했었는데 정답인걸 보고 나서 다시 생각해보니 허점이 없음
// 사실 filter를 쓰는 것 보다는 길어져도 for문에다가 break 쓰는게 빠르기는 더 빠름. 겉멋으로 filter 씀
// filter()에다가 [0]을 안붙이는 find()도 있었다.






// 이 문제의 카테고리는 해쉬 였고, Key-Value쌍으로 데이터를 빠르게 찾아보세요. 라고도 쓰여있다.


var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1))

//이렇게 쓴 사람이 있다.

//보기 좋게 쓰면

var solution=(participant,completion)=>participant.find(name=>!completion[name]--,completion.map(name=>completion[name]=(completion[name]|0)+1))

// 대략적인 해석은 완주자 배열을 {이름:완주자 배열에 등장하는 횟수}로 만들고 참가자 이름을 한번씩 대입해서 횟수를 떨어뜨리고 0이 되면 해당 참가자를 반환한다는듯.

//find메서드는 find(콜백, 콜백에서 this로 쓰일 객체) 형태로 사용한다.


//풀어서 쓰면 아래와 같은 식이 된다.

var solution = (participant,completion) => { 
    completion.map(name => completion[name] = (completion[name]|0)+1); 
    return participant.find((name) => !completion[name]--); 
}; 

// 배열에서도 배열[값] 을 해서 배열내부에 값으로써 '값:횟수' 라고 추가할 수 있다는것이 중요
// 실행해서 확인해보니 ["이름1","이름2",...] 에서 이 함수를 쓰면 ["이름1","이름2",..., 이름1: 1, 이름2: 1,...] 처럼 값이 추가가 되는데,
// 기존에 있던 값이야 당연히 string 형식인데 추가된 값들은 undefined로 나온다. 문자열도 아니고 숫자도 아닌 값이다.


// 더 알기 쉽게 completion배열 뒤에 이름:1 이렇게 넣지 않고 객체를 하나 추가해서 객체에 이름:1 을 추가 하도록 했다.



function solution(participant, completion) { const completeObj = {} 
// 완주자 명단 만들기 
    completion.forEach(name => { 
    // 명단에 없는 이름이면 { 이름: 1 } 
        if (!completeObj[name]) completeObj[name] = 1 
    // 이미 올라간 이름이면 등장횟수++ 
        else completeObj[name]++ 
    }) 
    // 참가자와 완주자 명단 비교 
    return participant.find(name => { 
        // 현 참가자가 완주자 명단에 있고, 값이 0이 아니면 값-- 
    if (completeObj[name]) completeObj[name]-- // 명단에 없거나 값이 0이면 리턴 else return name }) 
    })
}