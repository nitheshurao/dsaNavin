import { ListNode } from "../linkedLists/linkedlist";


function checkCycle(head: ListNode | null): ListNode | null {

    if (!head || !head.next) return null;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow.next!;
        fast = fast.next.next;

        if (slow === fast) return slow;
    }
    return null;
}

function getCycleStartingNode (head: ListNode | null): ListNode | null {
    if (!head || !head.next) return null;

    const collidedNode: ListNode | null = checkCycle(head);
    
    if (!collidedNode) return null;

    let slow: ListNode = head;
    let fast: ListNode = collidedNode;

    while (slow !== fast) {
        slow = slow.next!;
        fast = fast.next!;
    }
    return slow;
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
node6.next = node4;

const head: ListNode = node1;
console.log(getCycleStartingNode(head));

export {};