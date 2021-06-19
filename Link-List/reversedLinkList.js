
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
  let after = null;
  let before = null;
  let current = head;
  while(current != null){
    after = current.next;
    current.next = before;
    before = current;
    current = after;
  }
  head = before
    return head
}

