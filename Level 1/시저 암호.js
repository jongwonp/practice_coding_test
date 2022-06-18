function solution(s, n) {
    let a = [];

    for(i=0; i<s.length; i++){
        //대문자인 경우
        if((s.charCodeAt(i) >= 65) && (s.charCodeAt(i) <= 90)){
            if(s.charCodeAt(i)+n > 90){
               a.push(String.fromCharCode(s.charCodeAt(i)+n - 26))
            }
            else a.push(String.fromCharCode(s.charCodeAt(i)+n))
        }

        //소문자인 경우
        else if((s.charCodeAt(i) >= 97) && (s.charCodeAt(i) <= 122)){
            if(s.charCodeAt(i)+n > 122){
                a.push(String.fromCharCode(s.charCodeAt(i)+n - 26))
            }
            else a.push(String.fromCharCode(s.charCodeAt(i)+n))
        }
        
        else if(s[i] == ' '){
            a.push(s[i]);
        }
    }

    return a.join('');
}
