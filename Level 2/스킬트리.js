function solution(skill, skill_trees) {
    let result = 0;
    let arr = Array.from(Array(skill_trees.length), () => []);  // skill_trees의 각 요소안에 있는 스킬 중 skill에 해당하는 스킬들의 인덱스를 나열할 배열
    skill_trees.forEach((value,index) => {
        for(i=0; i<skill.length; i++){
            arr[index].push(value.indexOf(skill[i]));           // arr에 skill에 해당하는 스킬의 인덱스를 채움
        }
    })

    arr.forEach((value,index) => {
        let count = 0;
        for(i=0; i<value.length-1; i++){
            if(!value.includes(-1)){                             // -1이 없는 배열 (skill에 있는 모든 스킬이 있는 경우)
                if(value[i]>value[i+1]){                         // skill에 있는 순서대로 배열되어 있지 않으면 count++
                    count++
                    break;
                }
            }
            else {                                               // -1이 있는 배열 (skill에 있는 모든 스킬이 있지는 않은 경우)
                if(value[i] >= 0 && value[i+1] >=0){             // 두 스킬의 인덱스가 양수인 경우 (선행 스킬들을 배웠지만)
                    if(value[i]>value[i+1]){                     // 인덱스가 내림차순인 경우 (선행 순서가 맞지 않는 경우) count++
                        count++
                        break;
                    }
                }
                else {                                           // 두 스킬의 인덱스 모두가 양수는 아닌 경우 (스킬을 배우긴 했지만)
                    if(value[i] <0 && value[i+1] >=0){           // 음수 인덱스가 양수 인덱스보다 선행한 경우 (선행 스킬을 배우지 않은 경우) count++
                        count++
                        break;
                    }
                }
            }
        }
        if(count ==0) result++; // count가 오르지 않은 요소라면 (선행스킬대로 차근차근 배운 경우) 결과값++
    })
    return result
}