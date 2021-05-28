function runProgram(input) {
	// Write code here
    input=input.trim().split("\n")
    let tc=+input[0]
    let i=1
    while(tc > 0)
    {
        let n = +input[i++]
        let s = input[i++].trim().split("")       
        res = ""
        // console.log(n,s)        
        encrypt(s,n)
        console.log(res)
        tc--
    }  
}
function encrypt(s,n){
    if(n===1){                  // n is 0
        res += s.pop()
        return
    }
    else if(n % 2 === 0){           // n is even
        let left = s.splice(0,n/2)
        let right = s
        res += left.pop()
        // console.log(s.slice(0,n/2),s.slice(n/2,n),s)

        if(left.length === 0)
        encrypt(right,right.length)

        else if(left.length > 1 && right.length > 1)
        {
            encrypt(left,left.length)
            encrypt(right,right.length)
        }
        else if(left.length > 1)
        {
            encrypt(left,left.length)
            res += right.pop()
        }
        else if(right.length > 1)
        {
            res += left.pop()
            encrypt(right,right.length)
        }
        else if(right.length === 0)
            res += right.pop()
        // console.log(left,right,res)
        // res+=encrypt(left,left.length)+encrypt(right,right.length)
    }
    else                            // n is odd
    {
        let left = s.splice(0,n/2)
        let right = s
        res += right.shift()
        // console.log(left,right)
        if(left.length > 1 && right.length > 1){
            encrypt(left,left.length)
            encrypt(right,right.length)
        }
        else if(left.length === 1 && right.length === 1)
        {
            // encrypt(left,left.length)
            res += left.pop()
            res += right.pop()
        }
        // else if(left.length>1 && right.length>1)
        // {
        //     res+=left.pop()
        //     encrypt(right,right.length)
        // }
        // else if(right.length===0)
        // res+=right.pop()
        // console.log(s.slice(0,n),s.slice(n/2,1))
    }
}
if (process.env.USERNAME === "hp") {
	runProgram(`2
    3
    abc
    5
    abcde`);
} else {
	process.stdin.resume();
	process.stdin.setEncoding("ascii");
	let read = "";
	process.stdin.on("data", function (input) {
		read += input;
	});
	process.stdin.on("end", function () {
		read = read.replace(/\n$/, "");
		read = read.replace(/\n$/, "");
		runProgram(read);
	});
	process.on("SIGINT", function () {
		read = read.replace(/\n$/, "");
		runProgram(read);
		process.exit(0);
	});
}