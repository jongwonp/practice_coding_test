function solution(n) {
    let arr = new Array(n+1).fill(0).map((v,i) => i);
    arr[0] = 0;
    arr[1] = 0;

    for(i=2; i<=Math.sqrt(n); i++){
        if(arr[i]==0) continue; 
        for(j=2; i*j<=n; j++){
            arr[i*j] = 0;
        }
    }

    arr = arr.filter(v => v !== 0);

    return  arr.length;
}
