function solution(new_id) {
    var answer = '';

    // 대문자 -> 소문자 치환
    new_id = new_id.toLowerCase();
    
    // 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
    new_id = new_id.replace(/[^-_.a-z0-9]/g,'')

    // .이 2개 이상 연속이면 하나로 치환
    new_id = new_id.replace(/(\.)\1+/g, '.');

    // .이 문장 맨 앞이나 맨 뒤에 위치하면 제거
    function deleteDot(){
        if(new_id.charAt(0) == '.')
        new_id = new_id.replace(/^./, '');

        if(new_id.charAt(new_id.length -1) == '.')
        new_id = new_id.replace(/.$/, '');
    }

    deleteDot();

    // 과정을 거친 아이디가 빈 문자열이면 a를 대입
    if(new_id == '') new_id = 'a';

    // 과정을 거친 아이디 길이가 16자 이상이면 15개의 문자를 제외한 나머지 제거
    if(new_id.length>=16) new_id = new_id.substr(0, 15);

    // 만약 마침표가 다시한번 맨 끝에 위치하면 제거
    deleteDot();

    // 과정을 거친 아이디가 2자 이하라면 마지막 문자를 길이가 3이 될때 까지 반복해서 붙임
    if(new_id.length <= 2) {
        while (new_id.length<3){
            new_id = new_id + new_id.substr(-1);
        }
    }

    answer = new_id;
    
    return answer;
}