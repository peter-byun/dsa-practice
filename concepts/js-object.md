JavaScript objects look simple on the surface—just key-value pairs—but under the hood, engines like **V8** (Chrome/Node.js) use clever optimizations to make them fast.

Here are the 4 concepts to understand:

## **1. Property Lookup & the Prototype Chain**

When you access a property (obj.key), the JS engine performs a **lookup process**:

1. Check if the property exists directly on the object.
2. If not, look at the object’s **prototype** (obj.**proto**).
3. Continue walking the chain until either:
   - The property is found, or
   - The chain reaches null (end).

Example:

```jsx
const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;

console.log(dog.barks); // own property → true
console.log(dog.eats); // found in prototype → true
console.log(dog.toString); // found in Object.prototype
```

This is called **prototype inheritance**, and it allows objects to share behavior without copying.

---

## **2. Hidden Classes & Performance**

If objects were plain hash maps, every property lookup (obj.x) would mean hashing the string "x" and probing a table → relatively slow.

Instead, **V8 assigns a hidden class (blueprint)** to each object shape.

A hidden class maps property names → **fixed memory offsets**.

### **Why It’s Faster**

- First time: V8 builds a hidden class.
- Next time: property access is just a memory offset lookup (LOAD base + offset) → as fast as C structs.
- This is combined with **inline caching** so repeated lookups are almost free.

### **Example A: Consistent Shape = Fast**

```jsx
function Point(x, y) {
  this.x = x;
  this.y = y;
}

const p1 = new Point(1, 2);
const p2 = new Point(3, 4);

// Same hidden class → "x" always at offset 0 → fast
```

### **Example B: Different Shapes = Slow**

```jsx
const a = {};
a.x = 10;
a.y = 20;

const b = {};
b.y = 20; // added in different order
b.x = 10;

// Different hidden classes → cache misses → slower
```

### **Example C: Hidden Class Transitions**

```jsx
const obj = {};
obj.a = 1; // Empty → {a}
obj.b = 2; // {a} → {a,b}
```

Each added property transitions to a new hidden class.

If objects follow the same order, V8 can reuse transitions across them.

### **Example D: Deleting Properties Deoptimizes**

```jsx
const obj = { a: 1, b: 2 };
delete obj.b; // breaks optimization
```

Deleting forces fallback to **dictionary mode** → property lookup reverts to slower hash table access.

**Takeaways**:

- Add properties in the same order across similar objects.
- Avoid deleting properties.
- Consistent shapes → better performance.

---

## **3. Property Descriptors**

Each property isn’t just a key/value—it has **hidden metadata** (a descriptor):

- **value** → the stored value.
- **writable** → can it be changed?
- **enumerable** → does it show up in loops?
- **configurable** → can it be deleted/modified?

Example:

```jsx
const obj = {};
Object.defineProperty(obj, "x", {
  value: 42,
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(obj.x); // 42
obj.x = 100; // ignored
```

This system powers **Object.freeze()**, **Object.seal()**, and custom immutability rules.

---

## **4. Objects vs Maps**

Both objects and maps store key/value pairs, but they serve different purposes:

- **Objects**
  - Keys are strings (or symbols).
  - Best for structured records (like user, product).
  - Prototype chain comes along “for free.”
- **Maps**
  - Keys can be any type (numbers, objects, functions).
  - Preserves insertion order.
  - Optimized for frequent adds/deletes/lookups at large scale.

Example:

```jsx
const obj = { name: "Alice" };
obj[123] = "number key"; // actually stored as "123"

const map = new Map();
map.set(123, "number key"); // number stays a number
map.set(obj, "object key"); // objects can be keys
```
