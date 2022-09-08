class Queue {
  constructor() {
    this.element = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(value) {
    // add an element to our object
    `${this.element}.${value}`=value
  }
  dequeue() {
    // remove an element from our object and return the item removed
  }
  peak() {
    // return the item at the front of the queue
    return this.element[0]
  }
  get length() {
    // return the length of the queue
    return this.pancake.length
  }
  get isEmpty() {
  // return a true or false value if the queue is empty
    if (this.element=={}){
        return true;
      }
    return false;
  }
}

const myQueue = new Queue();
