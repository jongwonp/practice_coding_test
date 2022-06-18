function solution(brown, yellow) {
    for(i=1;i<=Math.max(brown,yellow); i++){
        for(j=1; j<=i; j++){
            if((i*j == yellow) && (i+j == (brown-4)/2)){
                return [i+2,j+2];
            }
        }
    }
}

// 일단 brown에서 -4 해야 yellow랑 맞닻는 개수임.

// 4개 뺀 수로 가로 ,세로를 잘 만들어서 yellow의 가로x세로가 되도록 해야함

//그냥 a,b 로 해서

// a*b = yellow  2(a+b)+4 = brown 해야할듯

// (brown-4)/2 = a+b
// yellow = a*b

