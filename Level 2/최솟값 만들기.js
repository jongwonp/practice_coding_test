function solution(A,B){
    let [maxA,maxB,minA,minB,sum] = [0,0,0,0,0];
    while(A.length !==0){
        maxA = Math.max(...A);
        console.log('maxA ',maxA);
        maxB = Math.max(...B);
        console.log('maxB ', maxB);
        minA = Math.min(...A);
        console.log('minA ', minA);
        minB = Math.min(...B);
        console.log('minB ', minB);
        if(A.length > 1){
            sum = sum + maxA*minB + minA*maxB;
            A.splice(A.indexOf(maxA),1)
            A.splice(A.indexOf(minA),1)
            B.splice(B.indexOf(maxB),1)
            B.splice(B.indexOf(minB),1)
        }
        else {
            sum = sum + maxA*minB
            A.splice(A.indexOf(maxA),1);
            B.splice(B.indexOf(maxB),1);
        }

    }
    return sum;
}