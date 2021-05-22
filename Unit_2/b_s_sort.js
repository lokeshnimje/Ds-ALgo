var a = [5, 3, 4, 8, 2]   //4


function selectionSort(inputArr) { 
    let n = inputArr.length;  //5
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            // console.log(j)
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    console.log(inputArr);
}

selectionSort(a)

// var a = [5, 3, 4, 8, 2] // 4

let bubbleSort = (inputArr) => {
    let len = inputArr.length;  //5

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len-i-1; j++) {
            // console.log(j)
            if (inputArr[j] > inputArr[j + 1]) {
                [inputArr[j] ,inputArr[j + 1]] = [inputArr[j + 1], inputArr[j]];
            }
        }
    }
    console.log(inputArr)
};

bubbleSort(a)