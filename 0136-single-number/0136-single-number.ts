function singleNumber(nums: number[]): number {
    if(nums.length == 1) return nums[0];
    let res = 0;
    for(const num of nums){
        res ^= num;
    }
    return res;
};