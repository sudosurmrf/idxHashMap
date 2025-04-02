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

  idx(index) { 
    return this.indexToNode[index]?.value;
  }

  del(key) {
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

  len() {
    return this.indexToNode.length;
  }

  includes(key) {
    return key in this.keyToNode;
  }

  indexOfKey(key) {
    const node = this.keyToNode[key];
    if (!node) return -1;
    return this.indexToNode.indexOf(node);
  }

  forEach(callback) {
    this.indexToNode.forEach((node, idx) => callback(node.value, idx));
  }

  map(callback) {
    return this.indexToNode.map((node, idx) => callback(node.value, idx));
  }

  filter(callback) {
    const result = new IdxHashMap();
    this.indexToNode.forEach((node, idx) => {
      if (callback(node.value, idx)) {
        result.set(node.key, node.value);
      }
    });
    return result;
  }

  *[Symbol.iterator]() {
    for (let idx = 0; idx < this.indexToNode.length; idx++) {
      const node = this.indexToNode[idx];
      yield { value: node.value, key: node.key, idx };
    }
  }

  get length() {
    return this.indexToNode.length;
  }

  find(arg) {
    if (typeof arg === 'string' || typeof arg === 'number') {
      if (arg in this.keyToNode) return this.keyToNode[arg].value;
    }
    if (typeof arg === 'function') {
      for (let idx = 0; idx < this.indexToNode.length; idx++) {
        const node = this.indexToNode[idx];
        if (arg(node.value, idx, node.key)) return node.value;
      }
    }
    return undefined;
  }
}

module.exports = IdxHashMap;
