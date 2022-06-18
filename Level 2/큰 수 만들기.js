function solution(number, k) {
    let arr = number.split('');
    let result =[arr[0]];
    for(i=1; i<arr.length; i++){
        if(k == 0){
            result.push(arr[i]);
        }
        else {
            if(arr[i] > result[result.length-1]){
                while(arr[i] > result[result.length-1]){
                    result.pop();
                    k = k-1;
                    if(k == 0) break
                }
                result.push(arr[i]);
            }
            else if(arr[i] < result[result.length-1]){
                result.push(arr[i]);
            }
            else {
                result.push(arr[i]);
            }
        }
    }
    if(k !== 0){
        while(k !== 0){
            result.pop();
            k-=1
        }
    }
    return result.join('');
}