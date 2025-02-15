class DoublyListNode {
    constructor(val, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

function removeElements(head, val) {
    let current = head;

    // Menghapus node dari awal jika head memiliki nilai yang sama dengan val
    while (current !== null && current.val === val) {
        head = current.next; // Memperbarui head
        if (head !== null) {
            head.prev = null; // Memperbarui prev dari head baru
        }
        current = head; // Melanjutkan ke node berikutnya
    }

    // Menghapus node di tengah atau akhir
    while (current !== null) {
        if (current.val === val) {
            // Menghapus current dari linked list
            if (current.prev !== null) {
                current.prev.next = current.next; // Memperbarui next dari prev
            }
            if (current.next !== null) {
                current.next.prev = current.prev; // Memperbarui prev dari next
            }
        }
        current = current.next; // Melanjutkan ke node berikutnya
    }

    return head; // Mengembalikan head yang sudah dimodifikasi
}

// Membangun double linked list: 1 <-> 2 <-> 3 <-> 2 <-> 4
const head = new DoublyListNode(1);
head.next = new DoublyListNode(2, head);
head.next.next = new DoublyListNode(3, head.next);
head.next.next.next = new DoublyListNode(2, head.next.next);
head.next.next.next.next = new DoublyListNode(4, head.next.next.next);

// Menghapus node dengan nilai 2
const newHead = removeElements(head, 2);

// Menampilkan hasil
let current = newHead;
while (current !== null) {
    console.log(current.val); // Output: 1, 3, 4
    current = current.next;
}