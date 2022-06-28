function solution(s, arr = []){
    while(s.length !== 0){
        if(arr[arr.length-1] === '(' && s[0] === ')'){
            arr.pop();
            s = s.slice(1)
        }
        else{
            arr.push(s[0])
            s = s.slice(1);
        }
    }
    return arr.length === 0 ? true : false
}