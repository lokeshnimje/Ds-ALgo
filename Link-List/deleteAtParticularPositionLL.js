

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function deleteNode(head, position) {
  var i=0
  var curr=head
  var prev,nxt
    while(i<=position){
      i++
      if(i==position){
        prev=curr
        curr=curr.next
        curr=curr.next
        break
      }
      curr=curr.next
    }
    prev.next=curr
    return head
      
}