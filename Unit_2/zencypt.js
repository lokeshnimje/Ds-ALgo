function runProgram(input){
    // Write code here
    input = input.trim().split('\n')
    let s = input[0].trim().split('')
    let k = +input[1]
    // console.log(s, k)
    let capital = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let small = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let num = ['1','2','3','4','5','6','7','8','9','0'];
    // console.log(capital,small, num)
    let res = ""
    for(let i=0; i<capital.length; i++){
        for(let j=0; j<s.length; j++){
            if(capital[i] == s[j]){
                res += capital[i+k]
            } 
        }
    }
  console.log(res)

}

if(process.env.USERNAME === "hp"){
    runProgram(`All-convoYs-9-be:Alert1.
    4`)
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