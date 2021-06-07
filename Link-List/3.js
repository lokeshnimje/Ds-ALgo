
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// entering at Tail
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
//Entering at head
function insertNodeAtHead(head, data) {
    let node  = new LinkedListNode(data);
    if(!head){
      head = node;
      tail = node;
    } else {
      head.next = node;
      head = node;
    }
    return head
}
//ionsert at specific position
function insertNodeAtPosition(head, data, position) {
    let node  = new LinkedListNode(data);
    if(!head){
      head = node;
    } else {
      node.next = head;
      head = node;
    }
    return head
}

function getLength(){
  let curr = this.head;
  let count = 0
    while(curr !== null){
      count++;
      curr = curr.next;
    }
  return count;
}
console.log(getLength());




