import { ListNode } from "../linkedLists/linkedlist";


function checkCycle(head: ListNode | null): boolean{

    if (!head || !head.next) return false;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow.next!;
        fast = fast.next.next;

        if (slow === fast) return true;
    }

    return false;
}


const node1 = new ListNode(2);
const node2 = new ListNode(-1);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(45);
const node6 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node3;

const head: ListNode = node1;
console.log(checkCycle(head));

export {};