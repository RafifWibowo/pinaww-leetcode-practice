function getConcatenation(nums: number[]): number[] {
    const numLen = nums.length;
    for(let i=0; i<numLen; i++){
        nums.push(nums[i]);
    }
    return nums;
};