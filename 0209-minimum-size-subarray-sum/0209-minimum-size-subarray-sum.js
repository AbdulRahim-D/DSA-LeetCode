/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
let minLength = Infinity;
  let start = 0,
    end = 0,
    size = 1;
  let sum = nums[start];
  while (end < nums.length && start < nums.length) {
    if (sum >= target) {
      minLength = Math.min(size, minLength);
      sum -= nums[start++];
      size--;
    } else {
      size++;
      end++;

if (end < nums.length) {
    sum += nums[end];
}
    }
  }
  return minLength === Infinity ? 0 : minLength;
};