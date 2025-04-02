# IdxHashMap

A JavaScript data structure providing **O(1)** insertion, deletion, numeric indexing, and key-based lookup at the cost of space complexity.

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
console.log(map.getByIndex(1));     // pruple

map.delete("name");

console.log(map.size());            // 1
```