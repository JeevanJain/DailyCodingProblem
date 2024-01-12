import LinkListNode from "../../LinkListNode.mjs";

const intersectingNode = new LinkListNode(8);
intersectingNode.next = new LinkListNode(10);

const headA = new LinkListNode(3);
headA.next = new LinkListNode(7);
headA.next.next = intersectingNode;

const headB = new LinkListNode(99);
headB.next = new LinkListNode(1);
headB.next.next = intersectingNode;

function findIntersection() {
    let pointerA = headA;
    let pointerB = headB;

    // Traverse both lists until they either intersect or reach the end
    while (pointerA !== pointerB) {
        pointerA = pointerA ? pointerA.next : headB;
        pointerB = pointerB ? pointerB.next : headA;
    }

    // Return the intersection node (or null if there is no intersection)
    return pointerA;
}

const intersectionNode = findIntersection(headA, headB);
console.log(intersectionNode?.val ?? null);  // Output: 8