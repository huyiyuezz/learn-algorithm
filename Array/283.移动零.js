var moveZeroes = function(nums) {
    let slow = 0,
        fast = 0
    while (fast < nums.length){
        if (nums[fast]){
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
            slow++
        }
        fast++
    }
}
