var limit = 100; //문제 수.  최대는 10000문제까지
var answers = [];


//무작위로 정답 만들기
function makeAnswers(array) {
    for(i=0; i<limit; i++){
        array[i] = Math.ceil(Math.random()*5);
    }
    return array;
}

makeAnswers(answers);

//인원
var sp1 = {
    name:1,
    answer:[],
    counter:0
};
var sp2 = {
    name:2,
    answer:[],
    counter:0
};
var sp3 = {
    name:3,
    answer:[],
    counter:0
};

//각 수포자들 답안 찍는 패턴 입력
function answerSp1(array) {
    for(i=0;i<limit/5; i++){
        array[5*i] = 1;
        array[5*i+1] = 2;
        array[5*i+2] = 3;
        array[5*i+3] = 4;
        array[5*i+4] = 5;
    }
    return array;
}

answerSp1(sp1.answer);

function answerSp2(array) {
    for(i=0; i<limit/8; i++){
        array[8*i+1] = 1;
        array[8*i+3] = 3;
        array[8*i+5] = 4;
        array[8*i+7] = 5;
    }
    for(i=0; i<limit/2; i++){
        array[2*i] = 2;
    }
    return array;
}

answerSp2(sp2.answer);

function answerSp3(array) {
    for(i=0; i<limit/10; i++){
        array[10*i] =3;
        array[10*i+1] =3;
        array[10*i+2] =1;
        array[10*i+3] =1;
        array[10*i+4] =2;
        array[10*i+5] =2;
        array[10*i+6] =4;
        array[10*i+7] =4;
        array[10*i+8] =5;
        array[10*i+9] =5;
    }
    return array;
}

answerSp3(sp3.answer);



//제출답안 채점
function correctSp(object) {
    for(i=0; i<limit; i++){
        if(answers[i]==object.answer[i]){
            object.counter++;
        }
    }
    return object;
}

correctSp(sp1);
correctSp(sp2);
correctSp(sp3);

console.log("1이 맞춘 문제 수는",sp1.counter, "문제 입니다.");
console.log("2가 맞춘 문제 수는",sp2.counter, "문제 입니다.");
console.log("3이 맞춘 문제 수는",sp3.counter, "문제 입니다.");

//가장 높은점수 맞은 사람 출력
function solution(answers) {
    var answer = [];

    if((sp1.counter==sp2.counter)&&(sp1.counter>sp3.counter)){
        answer = [sp1.name,sp2.name];
    }
    else if((sp1.counter==sp3.counter)&&(sp1.counter>sp2.counter)){
        answer = [sp1.name,sp3.name];
    }
    else if((sp2.counter==sp3.counter)&&(sp2.counter>sp1.counter)){
        answer = [sp2.name, sp3.name];
    }
    else if((sp1.counter==sp2.counter)&&(sp1.counter==sp3.counter)){
        answer = [sp1.name, sp2.name, sp3.name];
    }
    else {
        var winner = Math.max(sp1.counter, sp2.counter, sp3.counter);
        if(winner==sp1.counter){
            answer = [sp1.name];
        }
        else if(winner==sp2.counter){
            answer = [sp2.name];
        }
        else answer = [sp3.name];
    }
    
    answer.sort();

    return answer;
}
