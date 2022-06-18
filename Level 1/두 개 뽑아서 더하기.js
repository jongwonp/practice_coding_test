function solution(numbers) {
    var answer = [];

    numbers.forEach((v,i) => {
        for(x=1; x<numbers.length-i; x++){
            answer.push(v+numbers[i+x]);
        }
    })

    let rmDup = [];
    answer.forEach(v =>{
        if(!rmDup.includes(v)){
            rmDup.push(v);
        }
    })
    rmDup.sort((a,b) => a-b);

    return rmDup;
}