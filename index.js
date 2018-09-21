const pair = (_first, _rest) => (_) => _(_first, _rest);
const first = (_pair) => _pair((_first, _rest) => _first);
const rest = (_pair) => _pair((_first, _rest) => _rest);

const caar = (pair) => first(first(pair));
const cadr = (pair) => first(rest(pair));
const cdar = (pair) => rest(first(pair));
const cddr = (pair) => rest(rest(pair));

const caaar = (pair) => first(first(first(pair)));
const caadr = (pair) => first(first(rest(pair)));
const cadar = (pair) => first(rest(first(pair)));
const caddr = (pair) => first(rest(rest(pair)));
const cdaar = (pair) => rest(first(first(pair)));
const cdadr = (pair) => rest(first(rest(pair)));
const cddar = (pair) => rest(rest(first(pair)));
const cdddr = (pair) => rest(rest(rest(pair)));

let list = pair(1, pair(2, pair(3, pair(4, pair(5, null)))));
console.log(first(list));
console.log(first(rest(list)));

let nested = pair(pair(2, pair(3, pair(4, pair(5, null)))), null);
console.log(cadar(nested));
