function solution(s) {
    const LENGTH = s.length;
    let correctString = 0;
    
    for(i=0; i<LENGTH; i++){
        correctString = checkString(s,correctString);
        s = turnBracket(s);
    }

    return correctString;
}

const checkString = (string, n) => {
    let stackArr =[];
    let stringArr = string.split('');

    while(stringArr.length !== 0){
        if(stackArr.length === 0){
            if(stackArr[0] == ')' || stackArr[0] == '}' || stackArr[0] == ']') break;
            stackArr.push(stringArr[0]);
            stringArr.shift();
        }
        if(stringArr.length == 0) break;
        if(stringArr[0].charCodeAt(0) - (stackArr[stackArr.length-1].charCodeAt(0))<=2 && stringArr[0].charCodeAt(0) - (stackArr[stackArr.length-1].charCodeAt(0))>0){
            stackArr.pop();
            stringArr.shift();
        }
        else{
            if(stackArr[0] == ')' || stackArr[0] == '}' || stackArr[0] == ']') break;
            stackArr.push(stringArr[0]);
            stringArr.shift();
        }
    }
    return stackArr.length == 0 ? n+1 : n
}

const turnBracket = (string) => {
    string += string[0];
    string = string.slice(1);
    return string;
}
