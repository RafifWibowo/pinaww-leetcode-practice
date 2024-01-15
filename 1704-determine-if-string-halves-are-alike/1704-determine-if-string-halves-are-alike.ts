function halvesAreAlike(s: string): boolean {
    const vowel: string = "aiueoAIUEO";
    let countl = 0;
    let countr = 0;
    let l = 0;
    let r = s.length - 1;
    while (l<r){
        if(vowel.includes(s[l])){
            countl++
        }
        if(vowel.includes(s[r])){
            countr++
        }
        l++;
        r--;
    }
    return countl == countr;
};