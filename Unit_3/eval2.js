Array.prototype.top = function (){
    this[this.length - 1] 
}

function runProgram(input)
{
    input = input.trim().split('\n')
    let tests = +input[0]

    let line =1
    let obj ={}
    for(let i=0; i<10; i++)
    {
        obj[i] =null
    }
   
    while(tests--){
        let arr = input[++line].split(' ').map((el) => el)
            arr =arr[0]
        //console.log(arr)
        
        let a=[]

            for(j in obj){
                let count =0
                
                for(let i =0; i<arr.length; i++){
                    if(arr[i] === j )
                    {
                        count++
                    }
                }
                a.push(count)
            }
            console.log(a.join(' '))
        
        line++
       
    }
}

runProgram(`2
5
21321
6
235452`)