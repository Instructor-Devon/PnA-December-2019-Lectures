class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
    isEmpty() {
        return this.head === null;
    }
    addFront(val) {
        // add new nodes to the front!
        // 1) construct the new node
        var newNode = new Node(val);

        // 2) attach new node's next to current head
        newNode.next = this.head;

        // 3) attach the head to the node
        this.head = newNode;
    }
    // remove first node
    removeFirst() {
        // remove and return value of head node
        var valToReturn = this.head.value;
        // move head forward (deleting old head)
        this.head = this.head.next;
        return valToReturn;
    }
    displayValues() {
        var current = this.head;
        while(current !== null) {
            console.log(current.value);            
            current = current.next;
        }
    }
    length(node=this.head) {
        if(node === null) {
            // don't count null!
            return 0;
        }
        // count node
        return 1 + this.length(node.next);

    }
    sum() {
        var sum = 0;
        var current = this.head;
        // loop through list
        while(current !== null) {
            // increment a 'sum' by each value
            sum += current.value;            
            current = current.next;
        }
        return sum;
    }
    rSum(node=this.head) {
        if(node.next === null) {
            return node.value;
        }
        return node.value + this.rSum(node.next);
    }
    rDisplayValues(node=this.head) {
        if(node.next === null) {
            console.log(node.value);
            return;
        }
        console.log(node.value);
        this.rDisplayValues(node.next);
    }

    addBack(value) {
        var newNode = new Node(value);
        var current = this.head;

        // edge case: empty list
        if(this.isEmpty()) {
            this.addFront(value);
            return;
        }
        while(current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }
}

var myList = new SinglyLinkedList();
// myList.addFront(5);
// myList.addFront(10);
myList.addBack(1);
myList.addBack(3);
myList.addBack(3);
var result = myList.rSum();
var size = myList.length();
console.log(size);
