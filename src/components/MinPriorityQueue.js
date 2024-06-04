// MinPriorityQueue.js
class MinPriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element, priority) {
    const node = { element, priority };
    if (this.isEmpty()) {
      this.queue.push(node);
    } else {
      const index = this.queue.findIndex((x) => x.priority > priority);
      if (index === -1) {
        this.queue.push(node);
      } else {
        this.queue.splice(index, 0, node);
      }
    }
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

export default MinPriorityQueue;
