
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtHead(head, data) { // head is head of list and data is element which we add to head
    let node  = new LinkedListNode(data)
 	if(!head){
      head = node
      }else {
      let curr = node;
      while(!curr.next){
        curr.next = head
        }
      head = curr;
    }
  return head
}
// input 
// 3
// 1
// 2
// 3

//op
// 1
// 2 1
// 3 2 1

