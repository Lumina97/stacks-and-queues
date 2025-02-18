export class Stack<T> {
  #stack: T[];

  constructor() {
    this.#stack = [];
  }

  push(element: T) {
    this.#stack.push(element);
  }

  pop() {
    return this.#stack.pop();
  }

  peek() {
    return this.#stack[this.#stack.length - 1];
  }

  isEmpty() {
    return this.#stack.length === 0;
  }

  size() {
    return this.#stack.length;
  }

  print() {
    for (let i = 0; i < this.#stack.length; i++) {
      process.stdout.write(
        `${this.#stack[i]} ${i === this.#stack.length - 1 ? " " : "|"} `
      );
    }
    console.log();
  }
}

// const stack = new Stack<number>(); // Create a stack that stores numbers
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.print(); // Output: 10 | 20 | 30
// console.log(stack.pop()); // 30
// console.log(stack.peek()); // 20
// console.log(stack.size()); // 2
// console.log(stack.isEmpty()); // false
