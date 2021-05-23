Array.prototype.top = function (){
    this[this.length - 1] 
}

function runProgram(input)
{
    input = input.trim().split('\n')
    let tests = +input[0]
    let line =1

    while(tests--){
        let size = +input[line++]
        let arr = []

            for(let i=line; i<size+line; i++){
                arr.push(input[i].split(' ').map(Number))
            }
            console.log(arr)
            let x =[]
            for(let i=0; i<arr.length; i++){

                for(let j=0; j<arr.length; j++){
                    if(i ===  j){
                        x.push(arr[i][j])
                    }
                }

                
            }
        console.log(x)
        
        line +=size
       
    }
}

runProgram(`1
2
1 4
4 3`)