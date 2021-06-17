
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function deleteNode(head, position) {
     if(position){
       let current = head
       let prev;
       let j=0;
       while(j<position && current){
           prev = current
           current = current.next
           j++
       }
       current = current.next
       prev.next = current
        return head;
     }  
}
//input 	output
// 8		20 6 2 7 4 15 9		
// 20
// 6
// 2
// 19
// 7
// 4
// 15
// 9
// 3

