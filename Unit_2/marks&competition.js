// You have the marks of students in the form of an array, where arr[i] represents the marks of the ith student.
// Since you are a curious kid, you want to find all the marks that are not smaller than those on its right side in the array.

function runProgram(input){
    // Write code here
    input = input.trim().split("\n");
    var len = +input[0].trim()
    var arr = input[1].trim().split(" ").map(Number)
    // console.log(arr)
    let res = ""
    for(let i=0;i<len-1;i++){
       let flag = true
        for(let j=i+1;j<len;j++){
            if(arr[i]<=arr[j] ){
                flag = false
                break
            } 
        }
        if(flag){
            res += arr[i] + " "
        }
    }
    console.log(res + arr[len-1])

    // other approach to do this problem by O(N)

    // let res = arr[len-1]    
    // let max = arr[len-1]
    // for(let i = len-2; i >= 0; i--){
    //     if(arr[i] >= max){
    //         max = arr[i]
    //         res = arr[i] + " " + res    // adding in reverse order
    //     }
    //  }
    //  console.log(res)


}
if(process.env.USERNAME === "hp"){
    runProgram(`6
    16 17 4 3 5 2`)
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