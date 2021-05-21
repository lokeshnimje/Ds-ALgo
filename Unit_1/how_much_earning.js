// Noddy choosed a city for Advertising his company's product. 
// There are *S* streets in that city. Each day he travels one street.
// There are *N* buildings in a street which are located at points 1,2,3....N(respectively). 
// Each building has some height(Say h meters).
// Noddy stands at point 0. His height is 0.5m. Now he starts communicating with the
// people of each building. He can communicate with people of a particular building
// only if he can see that building. If he succeed to communicate with any particular
// building then his boss gives him R rupees. i.e. if he communicates with K buildings 
// in a day, then he will earn K times R rupees. Now Noddy wants to know his maximum 
// Earning for each day.


function runProgram(input) {
    input = input.trim().split("\n");
    var streets = Number(input.shift());

    for(let i=0 , j=0; i<streets; i++){
        let max = 0.5
        let [s, p] = input[j++].trim().split(' ').map(Number)
        let arr = input[j++].trim().split(' ').map(Number)
        let sum = 0
        // console.log(s,p, arr)
        for(let k=0; k<arr.length; k++){
            if(arr[k] > max){
                max = arr[k]
                sum += p
            }
        }
        console.log(sum)
    }
   
  }
  
  if (process.env.USERNAME === "LOKESH") {
    runProgram(`2
    6 3
    8 2 3 11 11 10
    5 12
    12 20 39 45 89`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
  
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  