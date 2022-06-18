function solution(sizes) {
    let max = 0;
    sizes.forEach(v => {
        if(Math.max(...v) > max){
            max = Math.max(...v);
        };
    })
    
    let arr = [];
    sizes.forEach(v => {
        arr.push(Math.min(...v));
    })

    const second = Math.max(...arr);

    return max*second;
}