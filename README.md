# IdxHashMap

A JavaScript data structure providing **O(1)** insertion, deletion, numeric indexing, and key-based lookup at the cost of space complexity. 

## Installation

npm install indexed-hash-map


## usage: 
const IdxHashMap = require('indexed-hash-map');

const map = new IdxHashMap();

map.set("fruit", "banana");
map.set("color", "blue");

console.log(map.get("fruit"));      // banana
console.log(map.getByIndex(1));     // blue

map.delete("fruit");

console.log(map.size());            // 1
