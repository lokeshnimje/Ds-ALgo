//Accepted



const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtPosition(head, data, position) {
  let i=0;
  var node = new LinkedListNode(data);
  var curr=head
  var prev,nxt
    if(position==0)
    {
      node.next=head
        head=node
    }
  else{
     while(i<position){
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








const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtPosition(head, data, position) {
  let i=0;
  var node = new LinkedListNode(Number(data));
  var curr=head
  var prev,nxt
  if(head === null){
    head = node;
} else {
  while(i<position)
  {
      i++
      prev=curr
      curr=curr.next
  }
  prev.next=node
  node.next=curr
    return head
}
}




const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtPosition(head, data, position) {
   let i=0;
  var node = new LinkedListNode(Number(data));
  var curr=head
  var prev,nxt
  var length=0
  if(position==0){
    node.next=curr
	head=node
    return head
    }
  else
  {
       
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

