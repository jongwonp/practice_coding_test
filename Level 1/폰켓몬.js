function solution(nums) {
    var answer = 0;
    const gettable = nums.length/2; //가질 수 있는 마릿 수

    newNums = nums.filter((v, i) => nums.indexOf(v) === i); // 중복 제거

    if(newNums.length >= gettable){
        answer = gettable;
    }
    else{
        answer = newNums.length;
    }

    return answer;
}