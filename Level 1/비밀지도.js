function solution(n, arr1, arr2) {
    let decryption1 = [];
    let decryption2 = [];

    const decrypt = (encryp, decryp) => {
        encryp.forEach(v => {
            let tempArr =[];
            for(i=1; i<n; i++){
                if(i !== n-1){
                    tempArr.push(v % 2)
                    v = parseInt(v/2)
                }
                else {
                    tempArr.push(v % 2)
                    tempArr.push(parseInt(v/2));
                }
            }
            decryp.push(tempArr.reverse().map(v => v == 0 ? " " : "#"));
        })    
    }

    decrypt(arr1, decryption1);
    decrypt(arr2, decryption2);

    decryption1 = decryption1.map((v,i) => {
        for(x=0; x<v.length; x++){
            if((v[x] == " ") && (decryption2[i][x] == " ")) {
                v[x] = " ";
            }
            else {
                v[x] = "#";
            }
        }
        return v.join("");
    })
    
    return decryption1;
}