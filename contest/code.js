// function power(z){
//     while(z%2 == 0){
//         z = z/2
//         console.log(z)
//     }
//     if(z==1){
//         console.log("power")
//     }else {
//         console.log("not power")
//     }
// }
// power(32)

//------------find duplicate in array by O(N) TC
// let array = [1,3,3,2,4]
// console.log(findDuplicates(array))

// function findDuplicates(array){
//     let S1 = 0
//     for (let i=0;i<array.length;i++) {
//         S1 += array[i] 
//     }
//     let n = array.length - 1   //4

//     let S2 = [n * (n + 1)]/2  
//     let ans = S1 - S2
//     return ans
// }


//-----------Queue Using Two Stacks 
// let arr = [1, 2, 1, 3, 2, 1, 4, 2, 1, 4, 2]  
// let queue = []
// res = ""
// for(let i=0; i<arr.length;){
//     if(arr[i] == 1){
//         queue.push(arr[i+1])
//         console.log(queue,i)
//         i = i+ 2
//     }else if (arr[i] == 2){
//         res += queue.shift() + " "
//         i++
//     }
// }
// console.log(res.trim())


// sort array from 0, 1, 2 , first calculate amount of 0,1,2 // TC O(N) SC O(1)
// let x=2, y=5, z=3;
// let arr= []
// let i=0
// while(x>0){
//     arr[i++] = 0
//     x--
// }
// while(y>0){
//     arr[i++] = 1 
//     y--
// }
// while(z>0){
//     arr[i++] = 2
//     z--
// }
// console.log(arr)




