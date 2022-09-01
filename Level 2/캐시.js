function solution(cacheSize, cities) {
    const cache = [];
    let count = 0;

    if(cacheSize === 0){
        return cities.length * 5;
    }

    for(i=0; i<cities.length; i++){
        if(cache.includes(cities[i].toLowerCase())){
            cache.splice(cache.indexOf(cities[i].toLowerCase()),1);
            cache.push(cities[i].toLowerCase())
            count++;
        } else {
            if(cache.length === cacheSize){
                cache.shift();
            }
            cache.push(cities[i].toLowerCase());
            count += 5;
        }
    }
    return count
}

// 무난하게 풀었다.