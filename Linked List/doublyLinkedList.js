/*Informacion general: 
La diferencia entre un Doubly Linked List y un Singly Linked List es que el Doubly Linked List tiene 3 datos: el valor, el valor siguiente y el valor previo, mientras que el Singly Linked List solo tiene dos datos: el valor y el valor siguiente 
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class MyDoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;

    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;

    return this;
  }
}

let myDoublyLinkedList = new MyDoublyLinkedList(1);
