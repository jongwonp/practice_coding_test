function solution(nums) {
    var answer = 0;

    for(i=0; i<nums.length; i++){
        for(j=i+1; j<nums.length; j++){
            for(k=j+1; k<nums.length; k++){
                let a = nums[i] + nums[j] + nums[k];
                let notPrime = 0;
                for(x=2; x<=Math.sqrt(a); x++){
                    if(a % x == 0){
                        notPrime++;
                    }
                }
                if(notPrime == 0){
                    answer++;
                }
            }
        }
    }
    
    return answer;
}