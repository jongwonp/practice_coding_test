function solution(numbers) {
    let numArr = numbers.split('');
    let permuteArr = [];

    for(i=1; i<=numbers.length; i++){
        permuteArr.push(...getPermutations(numArr,i));
    }

    let set1 = new Set(permuteArr.map(v => {
        while(v[0] == '0') v.shift()
        return v.join('')
    }));

    let candidate = [...set1].filter(v => v !== '' && v !== '1').filter(v => isPrime(v) === 1);

    return candidate.length;
}

const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
      const permutations = getPermutations(rest, selectNumber - 1); 
      const attached = permutations.map((el) => [fixed, ...el]); 
      results.push(...attached); 
    });

    return results;
}

const isPrime = (num) => {
    let count = 0;
    for(i=1; i<=Math.sqrt(num); i++){
        if(num % i === 0) count++;
    }
    return count;
}