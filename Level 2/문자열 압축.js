function solution(s) {
    let arr = [];
    let compression = new Array();
    let min = s.length;
    let newS = '';

    for(i=1; i<=parseInt(s.length/2); i++){
        let count = 1;
        arr = s.match(new RegExp(`.{1,${i}}`,'g'));
        arr.forEach((value, index, array) => {
            if(value == array[index+1]){
                count++;
            } else {
                if(count !== 1){
                    compression.push(count+value);
                } else {
                    compression.push(value);
                }
                count = 1;
            }
        })
        newS = compression.join('');
        min = Math.min(newS.length, min);
        arr = [];
        compression = [];
    }
    return min;
}