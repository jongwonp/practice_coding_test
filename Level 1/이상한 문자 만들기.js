function solution(s) {
    let arr = s.split(' ').map(v => {
        let temp = '';
        for(x=0; x<v.length; x++){
            if(x % 2 == 1){
                temp += v[x].toLowerCase();
            }
            else {
                temp += v[x].toUpperCase();
            }
        }
        return temp;
    })
    return arr.join(' ');
}