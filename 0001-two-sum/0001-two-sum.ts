function twoSum(nums: number[], target: number): number[] {
    let checkMap = new Map();
    for(let i=0; i<nums.length; i++){
        const temp = target-nums[i];
        if(checkMap.has(temp)){
            return [checkMap.get(temp), i]
        } else {
            checkMap.set(nums[i], i);
        }
    }
};