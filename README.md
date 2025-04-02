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

console.log(map.get("name"));      // Ari
console.log(map.idx(1));     // pruple

map.del("name");

console.log(map.len());            // 1
```