function solution(dartResult) {
    let arr1 = dartResult.match(/\d+[A-Z]/g).map(v => {
        if(v.search(/\d[S]/) !== -1){
            v = v.replace(/[S]/, '')**1
        }
        else if(v.search(/\d[D]/) !== -1){
            v = v.replace(/[D]/, '')**2
        }
        else if(v.search(/\d[T]/) !== -1){
            v = v.replace(/[T]/, '')**3
        }
        return v;
    })

    let arr2 = dartResult.split(/\d+[A-Z]/g);
    arr2.shift();

    arr2.forEach((v,i) => {
        if(v == '#'){
            arr1[i] = -arr1[i];
        }
        else if(v == '*'){
            arr1[i] = 2*arr1[i];
            if(i !== 0){
                arr1[i-1] = 2*arr1[i-1];
            }
        }
    })

    return arr1.reduce((a,c) => a+c);
}
