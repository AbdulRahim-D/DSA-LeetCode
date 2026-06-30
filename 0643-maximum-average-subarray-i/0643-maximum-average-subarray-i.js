/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let max = -Infinity;
  let sum;
  let j = k - 1;
  for (let i = 0; i <= nums.length-k ; i++) {
    let l = i;
    sum = 0;
    while (l <= j) {
      sum += nums[l];
      l++;
    }
  max=Math.max(max,sum/k)
    if (j < nums.length) j++;
  }
return max
};