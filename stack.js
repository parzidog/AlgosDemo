class Stack {
  constructor() {
    this.pancake = [];
  }
  push(value) {
    // add an item to the stack
    this.pancake.push(value)
  }
  pop() {
    // remove and return an item from the stack
    return this.pancake.pop();
  }
  isempty = () => {
    // return a true or false value if empty
    if (this.pancake.isempty){
      return true;
    }
    return false;
  };

  size = () => {
    // return the length of the stack
    return this.pancake.length
  };
}
const myStack = new Stack();
