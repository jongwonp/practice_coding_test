function solution(clothes) {
    let typeOfClothes = [];
    clothes.forEach(v => {
        if(!typeOfClothes.includes(v[1])){
            typeOfClothes.push(v[1]);
        }
    })

    let sortedArr = Array.from(Array(typeOfClothes.length), () => new Array());

    clothes.forEach((v,i) => {
        for(x=0; x<typeOfClothes.length; x++){
            if(v[1] == typeOfClothes[x]){
                sortedArr[x].push(v[0]);
            }
        }
    })
    
    for(i=0; i<sortedArr.length; i++){
        sortedArr[i].push('not_choose');
    }

    let count = 1;
    sortedArr.forEach(v => {count *= v.length})

    return count-1;
}
