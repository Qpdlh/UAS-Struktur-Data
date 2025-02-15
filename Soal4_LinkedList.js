class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseList(head) {
    let prev = null; // Node sebelumnya
    let current = head; // Node saat ini

    while (current !== null) {
        let nextTemp = current.next; // Simpan node berikutnya
        current.next = prev; // Balikkan arah pointer
        prev = current; // Pindahkan prev ke node saat ini
        current = nextTemp; // Pindahkan current ke node berikutnya
    }

    return prev; // prev sekarang adalah head dari linked list yang sudah dibalik
}

// Membangun linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// Membalikkan linked list
const reversedHead = reverseList(head);

// Menampilkan hasil
let current = reversedHead;
while (current !== null) {
    console.log(current.val); // Output: 5, 4, 3, 2, 1
    current = current.next;
}