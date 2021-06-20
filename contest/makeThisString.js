// find all the elements of second string is present in first string.
function runProgram(input) {
	// Write code here
    input = input.trim().split("\n")
    let test = +input[0].trim()
    for(let i=0, j=1; i<test; i++){
        let x = input[j++].trim().split("")
        let y = input[j++].trim().split("")
        // console.log(x,y)
        let objx = {}
        let objy = {}
        for(let i=0;i<x.length; i++){
            let el= x[i]
            objx[el] = objx[el] === undefined ? 1 : ++objx[el]
        }
        for(let i=0;i<y.length; i++){
            let el= y[i]
            objy[el] = objy[el] === undefined ? 1 : ++objy[el]
        }
        // console.log(objx, objy)
        let flag = false
        for( k in objy){
            if(objx[k] === undefined){
                flag = true
            }
        }
        if(flag){
            console.log("No")
        }else {
            console.log("Yes")
        }
    }
    
    // input = input.trim().split("\n")
    // for (let i = 1; i < input.length; i += 2) {
    //     let str1 = input[i].trim().split("")
    //     let str2 = input[i + 1].trim().split("")
    //     // console.log(str1,str2);
    //     let ustr1 = str1.filter((item, i, ar) => ar.indexOf(item) === i)
    //     let ustr2 = str2.filter((item, i, ar) => ar.indexOf(item) === i)
    //     let flag = 0;
    //     for (let j = 0; j < ustr2.length; j++) {
    //         if (ustr1[j] !== ustr2[j]) {
    //             flag = 1;
    //             break
    //         }
    //     }
    //     if (flag) {
    //         console.log("No");
    //     }
    //     else {
    //         console.log("Yes");
    //     }
    // }


}

if(process.env.USERNAME === "hp"){
    runProgram(`3
    aac
    aaabab
    abcdef
    abcdef
    abcxyz
    abcxyababcxyzcxyzzabcxyz`)
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