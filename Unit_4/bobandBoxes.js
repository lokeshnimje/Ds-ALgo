
function runProgram(input) {
	// Write code here
    let i = +input.trim()
    // console.log(i)
    console.log(bobBoxes(i))
    
}
function bobBoxes(stairs){
	var count = 0;
	var start = 0;
	function jump(start){
		if(start === stairs){
			count += 1
		}
		else if(start > stairs)
			return null
		else{
			return jump(start + 5) || jump(start + 3) || jump(start + 1)
		}
	}
	jump(start);
	return count;
}

if(process.env.USERNAME === "hp"){
    runProgram(`7`)
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