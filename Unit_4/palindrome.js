// find the Palindrome

// let input = 'racerecar'
// let arr = input.trim().split('')
// let len = arr.length
// // console.log(arr, len)
// let count = 0
// let start = 0
// function palin(arr, len, start){
//     if(arr[start] !== arr[len-1]){
//         count++
//         return
//     } else
//     if(len==1){
//         return count;
//     } else {
//         return palin(arr, len-1, start+1)
//     }
// }
// palin(arr, len, start)
// console.log(count > 0 ? "Not Palin" : "Palin" )


let input = 'naman'
let arr = input.trim().split('')
let end = arr.length-1
let start = 0

function palin(arr, end, start){
    if(start > end){
        return true
    }
    if(arr[start] !== arr[end]){
        return false
    } 
    return palin(arr, end-1, start+1)
}

console.log(palin(arr, end, start))