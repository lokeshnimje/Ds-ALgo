Array.prototype.top = function (){
    this[this.length - 1] 
}

function runProgram(input)
{
    input = input.trim().split('\n')
    let tests = +input[0]

    let line =1

    while(tests--){
        const arr = input[++line].split(' ').map((el) => +el)

        let stack=[]
        let ans=[]
        let x =[]
        for(let i=arr.length-1; i>=0; i--){

            while(stack.length !==0 && stack[stack.length-1] <= arr[i])
            {
                stack.pop()
            }

            if(stack.length ===0 )
            {
                ans.push(-1)
            }
            else {

                if(stack[stack.length-1] % 2 !==0)
                {
                    ans.push(stack[stack.length-1])
                    x.push(arr[i])
                }
                
            }
            stack.push(arr[i])
        }
        //console.log(ans.reverse())
        console.log(x.reduce((a,c)=> a+c))
        line++
        //console.log(arr)
    }
    
}

runProgram(`1
5
2 3 5 8 3`)