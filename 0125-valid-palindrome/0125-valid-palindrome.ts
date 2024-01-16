function isPalindrome(s: string): boolean {
    const text = s.replace(/\s/g, "").toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '');
    let l = 0;
    let r = text.length - 1
    while (l<r){
        if(text[l] !== text[r]) return false
        l++
        r--
    }
    return true;
};