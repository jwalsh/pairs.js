// Multiarity
const pair = (first, rest) => z => z(first, rest);
// Single arity
// const pair2 = first => rest => z => z(first)(rest);
const first = pair => pair((first, rest) => first);
const rest = pair => pair((first, rest) => rest);

// Utilities
const print = pair => pair((first, rest) => console.log(`(${first} ${rest})`));

// Lists
const list = (first, ...rest) => {
  console.log(first, rest);
  if (typeof first !== "number") {
    return null;
  } else {
    return pair(first, list.apply(null, rest));
  }
};

const listRef = (items, n) => {
  if (n === 0) {
    return first(items);
  } else {
    return listRef(rest(items), n - 1);
  }
};

// Aliases
const caar = pair => first(first(pair));
const cadr = pair => first(rest(pair));
const cdar = pair => rest(first(pair));
const cddr = pair => rest(rest(pair));

const caaar = pair => first(first(first(pair)));
const caadr = pair => first(first(rest(pair)));
const cadar = pair => first(rest(first(pair)));
const caddr = pair => first(rest(rest(pair)));
const cdaar = pair => rest(first(first(pair)));
const cdadr = pair => rest(first(rest(pair)));
const cddar = pair => rest(rest(first(pair)));
const cdddr = pair => rest(rest(rest(pair)));

// Association lists

// Hashmaps

// Testing
let simple = pair(1, 2);
print(simple);

let list1 = pair(1, pair(2, pair(3, pair(4, pair(5, null)))));
console.log(first(list1));
console.log(first(rest(list1)));
console.log(listRef(list1, 3));

let nested = pair(pair(2, pair(3, pair(4, pair(5, null)))), null);
console.log(cadar(nested));

let list2 = list(1, 2, 3, 4, 5);
print(list2);
console.log(first(list2));
console.log(listRef(list2, 3));
console.log(first(rest(rest(rest(list2)))));

// Conditionals and boolean
let T = x => y => x;
let F = x => y => y;
let cond = (bool, t, f) => bool(t)(f);

// Testing
cond(T, console.log("T"), console.log("F"));

cond(F, console.log("T"), console.log("F"));

// Encoding
let I = x => x;
