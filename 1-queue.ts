export class Queue<T> {
  #queue: T[];

  constructor() {
    this.#queue = [];
  }

  enqueue(element: T) {
    this.#queue.push(element);
  }

  dequeue() {
    return this.#queue.shift();
  }

  front() {
    return this.#queue[0];
  }

  isEmpty() {
    return this.#queue.length === 0;
  }

  size() {
    return this.#queue.length;
  }

  print() {
    for (let i = 0; i < this.#queue.length; i++) {
      process.stdout.write(
        `${this.#queue[i]} ${i !== this.#queue.length - 1 ? "<-" : " "} `
      );
    }
    console.log();
  }
}

// const queue = new Queue<number>(); // Create a queue that stores numbers
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.print(); // Output: 10 <- 20 <- 30
// console.log(queue.dequeue()); // 10
// console.log(queue.front()); // 20
// console.log(queue.size()); // 2
// console.log(queue.isEmpty()); // false
