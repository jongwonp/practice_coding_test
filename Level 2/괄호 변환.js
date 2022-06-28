function solution(p) {
    const checkPerfect = (string) => {  // 올바른 괄호 문자열인지 확인해보는 함수
        let temp = string;

        while(1){   // 올바르게 짝이 맞는 괄호들 제거
            let before = temp.length;
            temp = temp.replace(new RegExp(/\(\)/,'g'), '');
            let after = temp.length;
            if(before == after) break;
        }
        return temp;
    }

    if(checkPerfect(p) == '') return p;    // 원래부터 올바른 문자열 이었다면 그대로 반환

    const divide = (string) =>{ // 문자열 분할하는 함수
        if(string == '') return '';

        let a = '';
        let b = '';
    
        while(1){   // 더 이상 짝이 맞는 문자열로 나누어 지지 않는 문자열 만들기
            if((a.match(/\(/g)!== null) && (a.match(/\)/g)!== null)){
                if(a.match(/\(/g).length == a.match(/\)/g).length) break;
            }
            a += p[0];
            p = p.slice(1,p.length);
        }
        b = p;  // 나머지 문자열들.

        if(checkPerfect(a) == ''){
            return a + divide(b);
        }
        else {
            let empty = '';
            let reverse = '';
            empty = '(' + divide(b) + ')';

            a = a.slice(1, a.length -1);
            
            for(i=0; i<a.length; i++){
                if(a[i] == '('){
                    reverse += ')';
                } 
                else {
                    reverse += '(';
                }
            }

            empty += reverse;
            return empty;
        }
    }
    return divide(p);
}