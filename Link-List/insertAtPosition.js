
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtPosition(head, data, position) {
    let i=0;
    let node = new LinkedListNode(data);
    let curr=head
    let prev
      if(position==0)
      {
        node.next=head
          head=node
      }
    else{
     while(i<position)
      {
          i++
          prev=curr
          curr=curr.next
      }
      node.next=curr
      prev.next=node
        return head
      }
  return head
}

