function solution(numbers, hand) {
    var answer = '';
    let leftNow = '*';
    let rightNow = '#';

    const priority2 = [[1,3,5],[4,6,8],[7,9,0],['*','#']];
    const priority5 = [[2,4,6,8],[1,3,7,9,0],['*','#']];
    const priority8 = [[5,7,9,0],[2,4,6,'*','#'],[1,3]];
    const priority0 = [[8,'*','#'],[5,7,9],[2,4,6],[1,3]];

    let answerArr = [];
    numbers.map(v => {
        if(v == 1 || v == 4 || v == 7){
            answerArr.push("L");
            leftNow = v;
        }
        else if(v == 3 || v == 6 || v == 9){
            answerArr.push("R");
            rightNow = v;
        }
        else {  // 2, 5, 8, 0 일 때 가까운 손가락을 사용하도록 하는 함수 실행
            if(v == 2) findPriority(priority2, v)
            else if(v == 5) findPriority(priority5, v)
            else if(v == 8) findPriority(priority8, v)
            else if(v == 0)findPriority(priority0, v)
        }
    })
    
    function findPriority(arr, numbersV){
        let endSome = 0;
        arr.some((v,i) => {
            if(endSome==0){
                if(arr[i].includes(leftNow) && arr[i].includes(rightNow)){
                    if(hand == 'left'){
                        leftNow = numbersV;
                        answerArr.push("L");
                        endSome = 1;       
                    }
                    else{
                        rightNow = numbersV;
                        answerArr.push("R");
                        endSome = 1;   
                    }
                }
                else if(arr[i].includes(leftNow) && !arr[i].includes(rightNow)){
                    leftNow = numbersV;
                    answerArr.push("L");
                    endSome = 1;                                
                }
                else if(!arr[i].includes(leftNow) && arr[i].includes(rightNow)){
                    rightNow = numbersV;
                    answerArr.push("R");
                    endSome = 1;
                }
            }            
        })
    }
    answer = answerArr.join('');
    return answer;
}