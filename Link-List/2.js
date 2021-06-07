
class Node{
    constructor(element){
        this.element = element
        this.next = null
    } 
}
class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    add(element){
        var node = new Node(element)
        // if the linked list is empty
        if(!this.head){
            this.head = node
        } else {
            var current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.size++
    }
    insertAtTail(element, index){
        if(index > this.size || index < 0 && this.size){
            return false
        }
        var node  = new Node(element)
        var current  = this.head
        var prev = null
        var i=0
        if(index === 0){
            node.next = current
            this.head = node
        } else {
            while(i<index){
                prev = current
                current = current.next
                i++
            }
            prev.next = node
            prev = prev.next
            prev.next = current
            this.size++
        }
    }
    printList(){
        var current = this.head
        var res = []
        while(current){
            res.push(current.element)
            current = current.next
        }
        console.log(res.join(" "))
    }
}

function runProgram(input){
    // Write code here
   input = input.trim().split('\n')
   let n = +input.shift()
   let list = new LinkedList()
    //console.log(list.size)
   for(let i=0; i<n; i++){
       let  elem = +input[i]
       list.add(elem)
       list.printList()
   }
}

if(process.env.USERNAME === "hp"){
    runProgram(`3
    1
    2
    3`)
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