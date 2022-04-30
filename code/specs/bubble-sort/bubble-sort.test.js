/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

// const bubbleSort = (nums) => {
//   let isSwapped = true;

//   do {
//     let counter = 0;
//     for (let index = 0; index < nums.length; index++) {
//       const element1 = nums[index];
//       const element2 = nums[index + 1];

//       if (element1 > element2) {
//         nums[index + 1] = element1;
//         nums[index] = element2;
//         counter++;
//       }
//     }
//     if(counter === 0) {
//       isSwapped = false;
//     }
//   } while (isSwapped);
//   return nums;
// }

const bubbleSort = (nums) => {
  let isSwapped = false;

  do {
    isSwapped = false;
    for (let index = 0; index < nums.length; index++) {
      const element1 = nums[index];
      const element2 = nums[index + 1];

      if (element1 > element2) {
        nums[index + 1] = element1;
        nums[index] = element2;
        isSwapped = true;
      }
    }
  } while (isSwapped);
  return nums;
}

// unit tests
// do not modify the below code
test("bubble sort", () => {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
