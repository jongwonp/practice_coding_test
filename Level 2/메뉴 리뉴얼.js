function solution(orders, course) { // ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"]
    let candidate = [];
    let result = [];

    const getcombination = (array, num) => {    // 조합 뽑아내는 함수
        let combiArr = [];
        if(num === 1) return array.map(v => [v]);
        array.forEach((value, index, origin) => {
            const rest = origin.slice(index+1);
            const combinations = getcombination(rest, num-1);
            const attatched = combinations.map(v => [value,...v]);
            combiArr.push(...attatched);
        })
        return combiArr;
    }

    course.forEach(numOfFood => {
        let temp = orders.filter(menu => menu.length >= numOfFood); // numOfFood보다 메뉴가 적은 단품조합들은 getcombination에 들어가지 않게 하기.
        let mostCombiArr = [];

        temp.forEach(v => { // 해당 numOfFood개로 이루어진 음식 조합 담는 과정
            mostCombiArr.push(...getcombination(Array.from(v),numOfFood).map(v => v.join(''))); // ["AB", "AC", "AC", "AC", "AC", ...]
        })
        mostCombiArr.map((v,i) => { // AB와 BA가 다른 단품조합으로 인식하는 것을 막기 위해 정렬
            mostCombiArr[i] = v.split('').sort().join('');
            return v
        });

        let mostCombiObj = {}    // mostCombiArr 배열에 있는 요소 중 가장 많이 중복된 요소 뽑기위해 객체 생성
        mostCombiArr.forEach(v => {    // 객체에서 key는 요소, value는 개수
            mostCombiObj[v] = (mostCombiObj[v] | 0)+1;
        })

        const max = Math.max(...Object.values(mostCombiObj));   // 가장 많이 있는 단품조합의 수
        if(max > 1){    // '최소 2명 이상의 손님으로부터 주문된 단품메뉴 조합에 대해서만'
            for(i=0; i<Object.values(mostCombiObj).length; i++){    // max와 같은 수의 단품조합을 발견하면 result에 넣는 반복문
                if(Object.values(mostCombiObj)[i] == max){
                    result.push(Object.keys(mostCombiObj)[i]);
                }
            }
        }
    })
    result.sort();
    return result;
}
