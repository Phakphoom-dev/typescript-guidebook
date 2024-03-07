type obj = {
  [key: number]: number;
};

function twoSum(nums: number[], target: number): number[] {
  const hMap: obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in hMap) {
      return [hMap[target - nums[i]], i];
    }
    hMap[nums[i]] = i;
  }
  return [-1, -1];
}

// ---------------------------------------------------------------------------------------------

var twoSum2 = function (nums: number[], target: number) {
  let tmp = new Map();

  for (let i = 0; i < nums.length; ++i) {
    if (tmp.has(target - nums[i])) {
      return [tmp.get(target - nums[i]), i];
    }
    tmp.set(nums[i], i);
  }

  return [-1, -1];
};

// ---------------------------------------------------------------------------------------------
