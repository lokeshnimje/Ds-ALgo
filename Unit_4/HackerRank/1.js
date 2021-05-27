let path = 'DDUUDDUDUUUD'
countingValleys(12, path)
function countingValleys(steps, path) {
    // Write your code here
    let up = 0;
    let down = 0
    let count = 0
    let total = 0
    for(let i=0; i<steps; i++){
        if(path[i] === "U"){
            if(count > 0){
                up++
                count = count-1
            }
        } else if (path[i] === "D"){
            down++
            count = count+1
        }
        if((up - down) === 0) {
            total++
        }
        console.log(count)
    }
    return total
    // console.log(total)
}
