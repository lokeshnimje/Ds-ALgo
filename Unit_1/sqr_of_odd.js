var items = [1, 2, 3, 4, 5];
var odd = items.filter(function(element){
    return (element % 2 == 1)
})
// console.log(odd.length)
var arr = []
for (var i=0; i<odd.length; i++){
    arr.push((odd[i]) + 1)
}
// console.log(arr)
var square = []
arr.forEach(function(el){
    square.push(el ** 2)
})
// console.log(square)
var sum  = 0
for (var i = 0; i < square.length; i++){
    sum += square[i]
}
console.log(sum)