import { BinaryTree, Node } from "./BinaryTree.js";

const providedTree = new BinaryTree(
  new Node(5, {
    left: new Node(3, { left: new Node(2), right: new Node(5) }),
    right: new Node(7, {
      left: new Node(1),
      right: new Node(0, {
        left: new Node(2),
        right: new Node(8, { right: new Node(5) }),
      }),
    }),
  })
);
