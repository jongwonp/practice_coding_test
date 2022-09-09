function solution(n, k) {
    const array = new Array(n).fill(1).map((v,i) => v+i);
    let answer = [];
    let denominator = n - 1;
    let [q,r] = divide(k-1, denominator);

    while(1){
        answer.push(array[q]);
        array.splice(q,1);
        if(r !== 0){
            denominator--;
            [q,r] = divide(r, denominator);
        } else break;
    }
    answer.push(...array);

    return answer
}

const factorial = (n) => {
    let fac = n;
    let result = 1;
    while(fac !== 1){
        result *= fac;
        fac--;
    }

    return result
}

const divide = (numerator, denominator) => {
    let quotient = Math.floor(numerator / factorial(denominator));
    let remainder = numerator % factorial(denominator);

    return [quotient, remainder];
}