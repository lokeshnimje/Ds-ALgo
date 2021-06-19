// find if there is cycle in link list or not
// 1 3 1 2 3 -1// false

const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    while(slow !== null && fast !== null && fast.next !== null){
      slow = slow.next;
      fast = fast.next.next;
      if(slow === fast){
        return true
        }
    }
    return false
};

