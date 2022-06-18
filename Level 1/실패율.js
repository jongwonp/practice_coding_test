function solution(N, stages) {
    var answer = [];

    const wholeStage = {};
    for(i=1; i<N+2; i++){
        wholeStage[i] = 0;
    }
    const wholeStageNum = Object.keys(wholeStage);
    const reachedPeople = Object.values(wholeStage);

    stages.forEach(v => {
        for(i=0; i<wholeStageNum.length; i++){
            if(wholeStageNum[i] == v){
                reachedPeople[i]++;
            }
        }
    })
    let wholePeople = 0;
    for(i=0; i<reachedPeople.length; i++){
        wholePeople += reachedPeople[i]
    }
    let probArr = [];
    reachedPeople.forEach((v,i) => {
        let probability = 0;
        let notReached = 0;
        for(x=0; x<i; x++){
            notReached += reachedPeople[x];
        }

        probability = v / ((wholePeople) - (notReached));
        probArr.push(probability);
    })

    wholeStageNum.pop(); // [1,2,3,..., N]
    probArr.pop();  // [0.125, 0.4~~,]

    let Arr = [];
    for(i=0; i<probArr.length; i++){
        Arr[i] = {stage:wholeStageNum[i], prob:probArr[i]};
    }

    Arr.sort((a,b) => b.prob - a.prob);

    Arr.forEach(v => {
        answer.push(parseInt(v.stage))
    })

    return answer;
}