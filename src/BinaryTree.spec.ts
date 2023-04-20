import { BinaryTree, Node } from "./BinaryTree.js";

const BT = new BinaryTree(
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

describe("Node", () => {
  it("Create empty Node", () => {
    const node = new Node(0);
    expect(node.left).toBeUndefined();
    expect(node.right).toBeUndefined();
    expect(node.value).toBe(0);
  });

  it("Create node with left child", () => {
    const node = new Node(0, { left: new Node(1) });
    expect(node.left).toBeDefined();
    expect(node.right).toBeUndefined();
    expect(node.value).toBe(0);

    expect(node.left?.value).toBe(1);
  });

  it("Create node with right child", () => {
    const node = new Node(0, { right: new Node(1) });
    expect(node.left).toBeUndefined();
    expect(node.right).toBeDefined();
    expect(node.value).toBe(0);

    expect(node.right?.value).toBe(1);
  });

  it("Create node with both children", () => {
    const node = new Node(0, { left: new Node(1), right: new Node(2) });
    expect(node.left).toBeDefined();
    expect(node.right).toBeDefined();
    expect(node.value).toBe(0);

    expect(node.left?.value).toBe(1);
    expect(node.right?.value).toBe(2);
  });
});

describe("Binary Tree", () => {
  it("Create rooted tree", () => {
    const tree = new BinaryTree(new Node(0));

    expect(tree).toBeDefined();
    expect(tree.root).toBeDefined();
  });

  it("Count leaf nodes", () => {
    expect(BT.countLeafNodes()).toBe(5);
  });

  it("Count leaf nodes on empty tree", () => {
    expect(new BinaryTree(new Node(0)).countLeafNodes()).toBe(1);
  });

  it("Longest branch length", () => {
    expect(BT.longestBranch()).toBe(5);
  });

  it("Longest branch length on empty tree", () => {
    expect(new BinaryTree(new Node(0)).longestBranch()).toBe(1);
  });

  it("Longest edge chain", () => {
    expect(BT.longestEdgeChain()).toBe(4);
  });

  it("Longest edge chain on empty tree", () => {
    expect(new BinaryTree(new Node(0)).longestEdgeChain()).toBe(0);
  });

  it("Compare to self", () => {
    expect(BT.equal(BT)).toBeTruthy();
  });

  it("Compare with tree of the same structure but different values", () => {
    const anotherTree = new BinaryTree(
      new Node(5, {
        left: new Node(3, { left: new Node(2), right: new Node(5) }),
        right: new Node(7, {
          left: new Node(1),
          right: new Node(0, {
            left: new Node(2),
            right: new Node(8, { right: new Node(2) }),
          }),
        }),
      })
    );

    expect(BT.equal(anotherTree)).toBeFalsy();
  });

  it("Compare with tree of different structure", () => {
    const anotherTree = new BinaryTree(
      new Node(5, {
        left: new Node(3, { left: new Node(2), right: new Node(5) }),
        right: new Node(7, {
          left: new Node(1),
          right: new Node(0, {
            left: new Node(2),
          }),
        }),
      })
    );

    expect(BT.equal(anotherTree)).toBeFalsy();
  });
});
