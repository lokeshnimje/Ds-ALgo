
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
  let node  = new LinkedListNode(data);
  if(!head){
    head = node;
    tail = node;
  } else {
    tail.next = node;
    tail = node;
  }
  return head
}
//input
// 3
// 1
// 2
// 3

//op
// 1
// 1 2
// 1 2 3