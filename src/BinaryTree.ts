export class Node {
  left?: Node | undefined;
  right?: Node | undefined;
  value: number;

  constructor(value: number, children?: { left?: Node; right?: Node }) {
    this.left = children?.left ?? undefined;
    this.right = children?.right ?? undefined;
    this.value = value;
  }
}

export class BinaryTree {
  root: Node;

  constructor(root: Node) {
    this.root = root;
  }

  private countLeafNodes_internal(curr: Node | undefined): number | undefined {
    if (curr == null) {
      return undefined;
    }

    if (curr.left == null && curr.right == null) {
      return 1;
    }

    return (
      (this.countLeafNodes_internal(curr.left) ?? 0) +
      (this.countLeafNodes_internal(curr.right) ?? 0)
    );
  }

  countLeafNodes(): number {
    return this.countLeafNodes_internal(this.root) as number;
  }

  private longestBranch_internal(curr: Node | undefined): number {
    if (curr == null) {
      return 0;
    }

    return (
      Math.max(
        this.longestBranch_internal(curr.left),
        this.longestBranch_internal(curr.right)
      ) + 1
    );
  }

  longestBranch(): number {
    return this.longestBranch_internal(this.root);
  }

  private equal_internal(
    left: Node | undefined,
    right: Node | undefined
  ): boolean {
    if (left == null && right == null) return true;

    if (
      (left == null && right != null) ||
      (left != null && right == null) ||
      left!.value !== right!.value
    ) {
      return false;
    }

    return (
      this.equal_internal(left?.left, right?.left) &&
      this.equal_internal(left?.right, right?.right)
    );
  }

  equal(right: BinaryTree): boolean {
    return this.equal_internal(this.root, right.root);
  }
}
