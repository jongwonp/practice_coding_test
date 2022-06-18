function solution(name) {
    const changeAlphabet = [['A'],['B','Z'],['C', 'Y'],['D', 'X'],['E', 'W'],['F', 'V'],['G', 'U'],['H', 'T'],['I', 'S'],['J', 'R'],['K', 'Q'],['L', 'P'],['M', 'O'],['N']]

    let count = 0;
    for(i=0; i<name.length; i++){
        for(j=0; j<changeAlphabet.length; j++){
            if(changeAlphabet[j].includes(name[i])){
                count += j;
            }
        }
    }

    const arrOfA = name.match(/A+/g); //연속적인 A가 담긴 배열
    let maxOfA = '';    //가장 긴 A
    let lengthOfMax = 0;    //가장 긴 A의 길이

    if(arrOfA !== null){
        for(i=0; i<arrOfA.length; i++){
            if(lengthOfMax < arrOfA[i].length){
                lengthOfMax = arrOfA[i].length;
            }
        }
        for(i=0; i<arrOfA.length; i++){
            if(arrOfA[i].length == lengthOfMax){
                maxOfA = arrOfA[i];
                break;
            }
        }
    }

    let indexOfMax = name.indexOf(maxOfA);  //가장 긴 A가 있는 시작 인덱스

    const nonALength = name.length - lengthOfMax;

    if(arrOfA !== null){
        if((lengthOfMax+1 > indexOfMax) || (lengthOfMax+1 == indexOfMax)){  // 역방향이 빠르다.
            return count + (nonALength - 1) + (indexOfMax - 1);
        }
        else {  // 정방향이 빠르다
            return count + (name.length - 1);
        }
    }
    else {
        return count + (name.length - 1);
    }

}

