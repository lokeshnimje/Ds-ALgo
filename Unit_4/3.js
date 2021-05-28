let arr = [1,2,3,4,5,6,7,8]
let l = 1
let h = 3
let res = arr[l]
arr[l] = arr[h]
arr[h] = res
// [arr[l], arr[h]] = [arr[h], arr[l]

console.log(arr)