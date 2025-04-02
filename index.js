class IdxHashMap {
  constructor() {
    this.keyToNode = Object.create(null);
    this.indexToNode = [];
  }

  set(key, value) {
    if (key in this.keyToNode) {
      this.keyToNode[key].value = value;
      return;
    }
    const node = { key, value };
    this.keyToNode[key] = node;
    this.indexToNode.push(node);
  }

  get(key) {
    return this.keyToNode[key]?.value;
  }

  getByIndex(index) {
    return this.indexToNode[index]?.value;
  }

  delete(key) {
    const node = this.keyToNode[key];
    if (!node) return false;

    const idx = this.indexToNode.indexOf(node);
    const lastNode = this.indexToNode[this.indexToNode.length - 1];

    this.indexToNode[idx] = lastNode;
    this.indexToNode.pop();
    this.keyToNode[lastNode.key] = lastNode;

    delete this.keyToNode[key];

    return true;
  }

  size() {
    return this.indexToNode.length;
  }
}

module.exports = IdxHashMap;
