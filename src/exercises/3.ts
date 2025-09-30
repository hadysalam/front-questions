export function LinkedListTask() {
  // define a linked list's node class
  class LNode {
    val: number;
    next: LNode | null = null;
    constructor(v: number) {
      this.val = v;
    }
  }

  // define linked list class
  class LinkedList {
    head: LNode | null = null;

    // add new node
    addNode(v: number) {
      // create a new node and insert it at the end of the list 
      const n = new LNode(v);
      if (!this.head) {
        this.head = n;
        return;
      }
      let cur = this.head;
      while (cur.next) cur = cur.next;
      cur.next = n;
    }

    // view all nodes within a linked list
    view(): number[] {
      // loop through list and push retrieved values into a nb array
      const res: number[] = [];
      let cur = this.head;
      while (cur) {
        res.push(cur.val);
        cur = cur.next;
      }
      return res;
    }

    // remove all nodes having nb greater than given limit
    removeNodes(limit: number) {
      // loop through each head's value and goes to next one
      while (this.head && this.head.val > limit) {
        this.head = this.head.next;
      }
      let cur = this.head;
      while (cur && cur.next) {
        if (cur.next.val > limit) {
          cur.next = cur.next.next;
        } else {
          cur = cur.next;
        }
      }
    }
  }

  // quick test
  const list = new LinkedList();

  list.addNode(10);
  list.addNode(5);
  list.addNode(12);
  list.addNode(7);
  list.addNode(3);
  list.addNode(9);
  list.addNode(10);
  console.log(list.view()); // [ 10, 5, 12, 7, 3, 9, 10 ]
  list.removeNodes(10);
  console.log(list.view()); // [ 10, 5, 7, 3, 9, 10 ]
  list.removeNodes(7);
  console.log(list.view()); // [ 5, 7, 3 ]
  list.addNode(20);
  list.addNode(5);
  console.log(list.view()); // [ 10, 5, 7, 3, 9, 10, 20, 5 ]
}