function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let n = +input[0].trim()
    let arr = input[1].trim().split(' ').map(Number)
    // console.log(n)
    let low = 0;
    let high = arr.length-1
    // console.log(arr, low, high)
    partition(arr,low, high)
    // console.log(quickSort(low, high))
    // function partition(low, high){
    //     let i=low;
    //     let j=high;
    //     let piv = arr[low]
    //     while(i<j){
    //         while(arr[i]<= piv){
    //             i++
    //         }
    //         while(arr[j] > piv){
    //             j--
    //         }
    //         if(i < j){
    //             arr[i,j] = arr[j,i]
    //             // arr[j] = arr[i]
    //         //    swap(int at i and j)
    //         }
    //     }
    //     arr[low, high] = arr[high, low]
    //     // arr[high] = arr[low]
    //     console.log(piv)
    //     // return j
    // }
    // function quickSort(low, high){
    //     if(low < high){
    //         j = partition(low, high)
    //         quickSort(low, j)
    //         quickSort(j+1, high)
    //     }
    //     return low
    // }
   function partition(arr, low, high){
       let i=low;
       let j=high;
       let piv = arr[high]
       console.log(i, j)
       while(i<j){
           while(arr[j] >= piv && j>0){
               j--
           }
           while(arr[i]< piv && i<high){
               i++
           }
           if(i < j){
            let res = arr[i]
            arr[i] = arr[j]
            arr[j] = res
            //    arr[i,j] = arr[j,i]
            //    swap(int at i and j)
            }
        }
        // swap int at high and i
        arr[i, high] = arr[high, i]
        let res1 = arr[i]
        arr[i] = arr[high]
        arr[high] = res1
        // console.log(i)
        return i
   }
}
// worst case of quick sort is O(n2) if the array is already sorted
if(process.env.USERNAME === "hp"){
    runProgram(`5
    3 5 0 9 8`)
} else {
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});
}