function solution(people, limit) {
    let count = 0;
    let newPeople = people.filter(v => v <= limit - 40);    // 최저 무게는 40이고 만약 한도에서 40 뺀것보다 큰 인원은 혼자 탐
    count = people.length - newPeople.length;

return count
}
