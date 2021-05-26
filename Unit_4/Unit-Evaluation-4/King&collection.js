input = input.trim().split("\n")[1].split(" ").map(Number).sort((a,b) => a-b)
let sum = 0
let i=0
let j= input.length-1
while(i<=j){
    sum = sum+input[j]
    j--
    i++
}
console.log(sum)