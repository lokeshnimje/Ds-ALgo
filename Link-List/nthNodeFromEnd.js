const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head,n){
  	let current = head
    let init = head
    let j = 0
    while(current.next){
      current = current.next 
        j++
      }
  	let k = j - n
    let a = 0
    let prev 
    while(a <= k && init){
      init = init.next
        a++
      }
  	return init.data
     //   let first = head;
 //   let second = head;
 // 	while(n>0){
 //     first = first.next
 //     n--
 //   }
 //   while(first !== null && first.next !== null){
 //     second = second.next;
 //     first = first.next;
 //     if(first.next === null){
 //      return first.data
 //       }
 //   }
  //
}
