// reverse the array.
let inp = ['s','k','y',' ','i','s',' ','b','l','u','e']
// let opt = ['b','l','u','e',' ','i','s',' ','s','k','y']
let newArr = []
let temp = []
for(let i=inp.length-1; i>=0; i--){
    if(inp[i] !== " "){
        temp.push(inp[i])
    }else {
        temp.reverse()
        temp.push(' ')
        newArr.push(...temp)
        temp = []
    }
}
temp.reverse()
newArr.push(...temp)
console.log(newArr)
// timecomplexity = O(N)