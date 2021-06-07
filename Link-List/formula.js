class Node{
    constructor(element){
        this.element = element
        this.next = null
    } 
}

const node = new Node(5)
// console.log("lks",node)


class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
    add(element){
        var node = new Node(element)    // create node
        // if the linked list is empty
        if(!this.head){
            this.head = node        // if empty then add node to first positn
        } else {
            var current = this.head     // take current
            while(current.next){        // if next refrence is available means its not null.
                current = current.next  // move to end of list
            }
            current.next = node         // put node at end of list
        }
        this.size++                    // increse size
    }
    insertAt(element, index){
        // if index is greater than size or index is negative, or size is=0 then it is invalid
        if(index > this.size || index < 0 && this.size){
            return false
        }
        var node  = new Node(element)
        var current  = this.head
        var prev = null
        var i=0
        if(index === 0){
            node.next = current
            this.head = node
        } else {
            while(i<index){
                prev = current
                current = current.next
                i++
            }
            //insert at the index
            prev.next = node
            //move to the inserted node
            prev = prev.next
            // add the rest of the current to the inserted node
            prev.next = current
            // increment size
            this.size++
        }
    }
    
    removeElement(element){
        var current  = this.head
        var prev = null
        while(current){
            if(current.element === element){
                // if prev is null then remove first value
                if(prev === null){
                    this.head = current.next
                } else {
                    prev.next = current.next    // replace the prev ref to next ref so we skip one element
                }
                this.size--
                console.log("remove element: ", element)
                return true
            }
            prev = current
            current = current.next
        }
    }
    
    isEmpty() {
        return this.size === 0 ? true : false
    }
    
    sizeOfLL() {
        return this.size
    }
    
    printList(){
        var current = this.head
        var index = 0
    
        while(current){
            console.log("Element: ", current.element, "Index: ", index++)
            current = current.next
        }
    }
}


var list = new LinkedList()
list.add(1)
list.add(2)
list.insertAt(5,1)
list.removeElement(5)
list.printList()
console.log(list.sizeOfLL())