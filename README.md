# IdxHashMap

A JavaScript data structure providing **O(1)** insertion, deletion, numeric indexing, and key-based lookup at the cost of space.
utilizes the pop and swap method for deletion, be careful if strict indexed order matters

## Installation

```bash
npm install indexed-hash-map
```

## Usage:
```javascript
const IdxHashMap = require('indexed-hash-map');

const map = new IdxHashMap();

map.set("name", "Ari");
map.set("color", "purple");

console.log(map.get("name"));        // Ari
console.log(map.idx(1));              // purple

console.log(map.includes("color"));   // true
console.log(map.indexOfKey("color")); // 1

map.forEach((val, idx) => console.log(idx, val)); // 0 Ari, 1 purple

const upperCaseValues = map.map(val => val.toUpperCase());
console.log(upperCaseValues); // ["ARI", "PURPLE"]

const filteredMap = map.filter((val) => val !== "Ari");
filteredMap.forEach((val, idx) => console.log(idx, val)); // 0 purple

for (const {value, key, idx} of map) {
  console.log(idx, key, value);          //(0, name, Ari), (1, color, purple)
}

map.del("name");

console.log(map.len());               // 1
console.log(map.length)               // 1

```