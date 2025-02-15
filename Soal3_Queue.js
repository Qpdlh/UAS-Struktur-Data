class MyQueue {
    constructor() {
        this.stackIn = [];  // Stack untuk push
        this.stackOut = []; // Stack untuk pop
    }

    // Menambahkan elemen x ke belakang queue
    push(x) {
        this.stackIn.push(x);
    }

    // Menghapus dan mengembalikan elemen dari depan queue
    pop() {
        this.moveElements();
        return this.stackOut.pop();
    }

    // Mengembalikan elemen di depan queue tanpa menghapusnya
    peek() {
        this.moveElements();
        return this.stackOut[this.stackOut.length - 1];
    }

    // Mengembalikan True jika queue kosong, dan False jika tidak
    empty() {
        return this.stackIn.length === 0 && this.stackOut.length === 0;
    }

    // Memindahkan elemen dari stackIn ke stackOut jika stackOut kosong
    moveElements() {
        if (this.stackOut.length === 0) {
            while (this.stackIn.length > 0) {
                this.stackOut.push(this.stackIn.pop());
            }
        }
    }
}


const queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek()); // Output: 1
console.log(queue.pop());  // Output: 1
console.log(queue.empty()); // Output: false