(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var every = _interopRequire(require("./every"));

module.exports = every;

},{"./every":12}],2:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var some = _interopRequire(require("./some"));

module.exports = some;

},{"./some":36}],3:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var all = _interopRequire(require("./all"));

var any = _interopRequire(require("./any"));

var chunk = _interopRequire(require("./chunk"));

var compact = _interopRequire(require("./compact"));

var concat = _interopRequire(require("./concat"));

var contains = _interopRequire(require("./contains"));

var drop = _interopRequire(require("./drop"));

var dropWhile = _interopRequire(require("./dropWhile"));

var each = _interopRequire(require("./each"));

var every = _interopRequire(require("./every"));

var filter = _interopRequire(require("./filter"));

var first = _interopRequire(require("./first"));

var find = _interopRequire(require("./find"));

var findIndex = _interopRequire(require("./findIndex"));

var findWhere = _interopRequire(require("./findWhere"));

var forEach = _interopRequire(require("./forEach"));

var enumerate = _interopRequire(require("./enumerate"));

var get = _interopRequire(require("./get"));

var head = _interopRequire(require("./head"));

var includes = _interopRequire(require("./includes"));

var indexOf = _interopRequire(require("./indexOf"));

var initial = _interopRequire(require("./initial"));

var last = _interopRequire(require("./last"));

var map = _interopRequire(require("./map"));

var none = _interopRequire(require("./none"));

var nth = _interopRequire(require("./nth"));

var pluck = _interopRequire(require("./pluck"));

var range = _interopRequire(require("./range"));

var reject = _interopRequire(require("./reject"));

var repeat = _interopRequire(require("./repeat"));

var rest = _interopRequire(require("./rest"));

var size = _interopRequire(require("./size"));

var slice = _interopRequire(require("./slice"));

var some = _interopRequire(require("./some"));

var tail = _interopRequire(require("./tail"));

var take = _interopRequire(require("./take"));

var takeWhile = _interopRequire(require("./takeWhile"));

var tap = _interopRequire(require("./tap"));

var thru = _interopRequire(require("./thru"));

var without = _interopRequire(require("./without"));

var where = _interopRequire(require("./where"));

function chain(xs) {
    return (function () {
        var _ref = {

            //returns a generator
            chain: function () {
                return chain(xs);
            },
            chunk: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return chain(chunk.apply(undefined, [xs].concat(args)));
            },
            compact: function () {
                return chain(compact(xs));
            },
            concat: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return chain(concat.apply(undefined, [xs].concat(args)));
            },
            drop: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return chain(drop.apply(undefined, [xs].concat(args)));
            },
            dropWhile: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return chain(dropWhile.apply(undefined, [xs].concat(args)));
            },
            each: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return chain(each.apply(undefined, [xs].concat(args)));
            },
            enumerate: function () {
                return chain(enumerate(xs));
            },
            filter: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return chain(filter.apply(undefined, [xs].concat(args)));
            },
            forEach: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return chain(forEach.apply(undefined, [xs].concat(args)));
            },
            initial: function () {
                return chain(initial(xs));
            },
            map: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return chain(map.apply(undefined, [xs].concat(args)));
            },
            pluck: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return chain(pluck.apply(undefined, [xs].concat(args)));
            },
            range: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return chain(range.apply(undefined, args));
            },
            repeat: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return chain(repeat.apply(undefined, [xs].concat(args)));
            },
            reject: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return chain(reject.apply(undefined, [xs].concat(args)));
            },
            rest: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return chain(rest.apply(undefined, [xs].concat(args)));
            },
            slice: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return chain(slice.apply(undefined, [xs].concat(args)));
            },
            tap: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return chain(tap.apply(undefined, [xs].concat(args)));
            },
            tail: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return chain(tail.apply(undefined, [xs].concat(args)));
            },
            take: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return chain(take.apply(undefined, [xs].concat(args)));
            },
            takeWhile: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return chain(takeWhile.apply(undefined, [xs].concat(args)));
            },
            thru: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return chain(thru.apply(undefined, [xs].concat(args)));
            },
            without: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return chain(without.apply(undefined, [xs].concat(args)));
            },
            where: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return chain(where.apply(undefined, [xs].concat(args)));
            },

            //returns a value
            all: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return all.apply(undefined, [xs].concat(args));
            },
            any: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return any.apply(undefined, [xs].concat(args));
            },
            contains: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return contains.apply(undefined, [xs].concat(args));
            },
            every: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return every.apply(undefined, [xs].concat(args));
            },
            first: function () {
                return first(xs);
            },
            find: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return find.apply(undefined, [xs].concat(args));
            },
            findIndex: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return findIndex.apply(undefined, [xs].concat(args));
            },
            findWhere: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return findWhere.apply(undefined, [xs].concat(args));
            },
            get: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return get.apply(undefined, [xs].concat(args));
            },
            head: function () {
                return head(xs);
            },
            includes: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return includes.apply(undefined, [xs].concat(args));
            },
            indexOf: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return indexOf.apply(undefined, [xs].concat(args));
            },
            last: function () {
                return last(xs);
            },
            none: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return none.apply(undefined, [xs].concat(args));
            },
            nth: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return nth.apply(undefined, [xs].concat(args));
            },
            size: function () {
                return size(xs);
            },
            some: function () {
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                return some.apply(undefined, [xs].concat(args));
            },

            //iterates and returns
            toArray: function toArray() {
                var arr = [];

                for (var _iterator = xs[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
                    var x = _step.value;

                    arr.push(x);
                }

                return arr;
            },

            toMap: function toMap() {
                return new Map(xs);
            },

            toSet: function toSet() {
                return new Set(xs);
            },

            toString: function toString() {
                var str = "";

                for (var _iterator = xs[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
                    var x = _step.value;

                    str += x;
                }

                return str;
            } };
        _ref[Symbol.iterator] = regeneratorRuntime.mark(function callee$2$0() {
            var _iterator, _step, x;

            return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
                while (1) switch (context$3$0.prev = context$3$0.next) {
                    case 0:
                        _iterator = xs[Symbol.iterator]();

                    case 1:
                        if ((_step = _iterator.next()).done) {
                            context$3$0.next = 7;
                            break;
                        }

                        x = _step.value;
                        context$3$0.next = 5;
                        return x;

                    case 5:
                        context$3$0.next = 1;
                        break;

                    case 7:
                    case "end":
                        return context$3$0.stop();
                }
            }, callee$2$0, this);
        });
        return _ref;
    })();
}

module.exports = chain;

//iterator

},{"./all":1,"./any":2,"./chunk":4,"./compact":5,"./concat":6,"./contains":7,"./drop":8,"./dropWhile":9,"./each":10,"./enumerate":11,"./every":12,"./filter":13,"./find":14,"./findIndex":15,"./findWhere":16,"./first":17,"./forEach":18,"./get":19,"./head":20,"./includes":21,"./indexOf":23,"./initial":24,"./last":25,"./map":26,"./none":27,"./nth":28,"./pluck":29,"./range":30,"./reject":31,"./repeat":32,"./rest":33,"./size":34,"./slice":35,"./some":36,"./tail":37,"./take":38,"./takeWhile":39,"./tap":40,"./thru":41,"./where":42,"./without":43}],4:[function(require,module,exports){
"use strict";

var chunk = regeneratorRuntime.mark(function chunk(xs, n) {
    var result, _iterator, _step, x;

    return regeneratorRuntime.wrap(function chunk$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                result = [];

                if (n < 1) {
                    n = 1;
                }

                _iterator = xs[Symbol.iterator]();

            case 3:
                if ((_step = _iterator.next()).done) {
                    context$1$0.next = 12;
                    break;
                }

                x = _step.value;

                if (!(result.length === n)) {
                    context$1$0.next = 9;
                    break;
                }

                context$1$0.next = 8;
                return result;

            case 8:
                result = [];

            case 9:

                result.push(x);

            case 10:
                context$1$0.next = 3;
                break;

            case 12:
                context$1$0.next = 14;
                return result;

            case 14:
            case "end":
                return context$1$0.stop();
        }
    }, chunk, this);
});
module.exports = chunk;

},{}],5:[function(require,module,exports){
"use strict";

var compact = regeneratorRuntime.mark(function compact(xs) {
    var _iterator, _step, x;

    return regeneratorRuntime.wrap(function compact$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                _iterator = xs[Symbol.iterator]();

            case 1:
                if ((_step = _iterator.next()).done) {
                    context$1$0.next = 8;
                    break;
                }

                x = _step.value;

                if (!x) {
                    context$1$0.next = 6;
                    break;
                }

                context$1$0.next = 6;
                return x;

            case 6:
                context$1$0.next = 1;
                break;

            case 8:
            case "end":
                return context$1$0.stop();
        }
    }, compact, this);
});
module.exports = compact;

},{}],6:[function(require,module,exports){
"use strict";

var concat = regeneratorRuntime.mark(function concat() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var _iterator, _step, xs, _iterator2, _step2, x;

    return regeneratorRuntime.wrap(function concat$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                _iterator = args[Symbol.iterator]();

            case 1:
                if ((_step = _iterator.next()).done) {
                    context$1$0.next = 12;
                    break;
                }

                xs = _step.value;
                _iterator2 = xs[Symbol.iterator]();

            case 4:
                if ((_step2 = _iterator2.next()).done) {
                    context$1$0.next = 10;
                    break;
                }

                x = _step2.value;
                context$1$0.next = 8;
                return x;

            case 8:
                context$1$0.next = 4;
                break;

            case 10:
                context$1$0.next = 1;
                break;

            case 12:
            case "end":
                return context$1$0.stop();
        }
    }, concat, this);
});
module.exports = concat;

},{}],7:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var includes = _interopRequire(require("./includes"));

module.exports = includes;

},{"./includes":21}],8:[function(require,module,exports){
"use strict";

var drop = regeneratorRuntime.mark(function drop(xs, n) {
    var i, _iterator, _step, x;

    return regeneratorRuntime.wrap(function drop$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                i = 0;
                _iterator = xs[Symbol.iterator]();

            case 2:
                if ((_step = _iterator.next()).done) {
                    context$1$0.next = 10;
                    break;
                }

                x = _step.value;

                if (!(i >= n)) {
                    context$1$0.next = 7;
                    break;
                }

                context$1$0.next = 7;
                return x;

            case 7:

                i += 1;

            case 8:
                context$1$0.next = 2;
                break;

            case 10:
            case "end":
                return context$1$0.stop();
        }
    }, drop, this);
});
module.exports = drop;

},{}],9:[function(require,module,exports){
"use strict";

var dropWhile = regeneratorRuntime.mark(function dropWhile(xs, predicate, thisArg) {
    var drop, fn, i, _iterator, _step, x;

    return regeneratorRuntime.wrap(function dropWhile$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                drop = true;
                fn = thisArg ? predicate.bind(thisArg) : predicate;
                i = 0;
                _iterator = xs[Symbol.iterator]();

            case 4:
                if ((_step = _iterator.next()).done) {
                    context$1$0.next = 13;
                    break;
                }

                x = _step.value;

                if (drop) {
                    drop = fn(x, i, xs);
                }

                if (drop) {
                    context$1$0.next = 10;
                    break;
                }

                context$1$0.next = 10;
                return x;

            case 10:

                i += 1;

            case 11:
                context$1$0.next = 4;
                break;

            case 13:
            case "end":
                return context$1$0.stop();
        }
    }, dropWhile, this);
});
module.exports = dropWhile;

},{}],10:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var forEach = _interopRequire(require("./forEach"));

module.exports = forEach;

},{"./forEach":18}],11:[function(require,module,exports){
"use strict";

var enumerate = regeneratorRuntime.mark(function enumerate(xs) {
    var i, _iterator, _step, x;

    return regeneratorRuntime.wrap(function enumerate$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                i = 0;
                _iterator = xs[Symbol.iterator]();

            case 2:
                if ((_step = _iterator.next()).done) {
                    context$1$0.next = 9;
                    break;
                }

                x = _step.value;
                context$1$0.next = 6;
                return [i, x];

            case 6:

                i += 1;

            case 7:
                context$1$0.next = 2;
                break;

            case 9:
            case "end":
                return context$1$0.stop();
        }
    }, enumerate, this);
});
module.exports = enumerate;

},{}],12:[function(require,module,exports){
"use strict";

function every(xs, predicate, thisArg) {
    var result = true;
    var fn = thisArg ? predicate.bind(thisArg) : predicate;
    var i = 0;

    for (var _iterator = xs[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
        var x = _step.value;

        result = fn(x, i, xs);

        if (!result) {
            if (_iterator["return"]) _iterator["return"]();

            break;
        }

        i += 1;
    }

    return !!result;
}

module.exports = every;

},{}],13:[function(require,module,exports){
"use strict";

var filter = regeneratorRuntime.mark(function filter(xs, predicate, thisArg) {
    var fn, i, _iterator, _step, x;

    return regeneratorRuntime.wrap(function filter$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                fn = thisArg ? predicate.bind(thisArg) : predicate;
                i = 0;
                _iterator = xs[Symbol.iterator]();

            case 3:
                if ((_step = _iterator.next()).done) {
                    context$1$0.next = 11;
                    break;
                }

                x = _step.value;

                if (!fn(x, i, xs)) {
                    context$1$0.next = 8;
                    break;
                }

                context$1$0.next = 8;
                return x;

            case 8:

                i += 1;

            case 9:
                context$1$0.next = 3;
                break;

            case 11:
            case "end":
                return context$1$0.stop();
        }
    }, filter, this);
});
module.exports = filter;

},{}],14:[function(require,module,exports){
"use strict";

function find(xs, predicate, thisArg) {
    var fn = thisArg ? predicate.bind(thisArg) : predicate;
    var i = 0;

    for (var _iterator = xs[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
        var x = _step.value;

        if (fn(x, i, xs)) {
            return x;
        }

        i += 1;
    }
}

module.exports = find;

},{}],15:[function(require,module,exports){
"use strict";

function findIndex(xs, predicate, thisArg) {
    var fn = thisArg ? predicate.bind(thisArg) : predicate;
    var i = 0;

    for (var _iterator = xs[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
        var x = _step.value;

        if (fn(x, i, xs)) {
            return i;
        }

        i += 1;
    }

    return -1;
}

module.exports = findIndex;

},{}],16:[function(require,module,exports){
"use strict";

function findWhere(xs, query) {
    var props = Object.getOwnPropertyNames(query);

    for (var _iterator = xs[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
        var x = _step.value;

        var match = true;

        for (var _iterator2 = props[Symbol.iterator](), _step2; !(_step2 = _iterator2.next()).done;) {
            var prop = _step2.value;

            if (query[prop] !== x[prop]) {
                match = false;

                if (_iterator2["return"]) _iterator2["return"]();
                break;
            }
        }

        if (match) {
            return x;
        }
    }
}

module.exports = findWhere;

},{}],17:[function(require,module,exports){
"use strict";

function first(xs) {
    for (var _iterator = xs[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
        var x = _step.value;

        return x;
    }
}

module.exports = first;

},{}],18:[function(require,module,exports){
"use strict";

function forEach(xs, predicate, thisArg) {
    var fn = thisArg ? predicate.bind(thisArg) : predicate;
    var i = 0;

    for (var _iterator = xs[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
        var x = _step.value;

        if (fn(x, i, xs) === false) {
            return;
        }

        i += 1;
    }
}

module.exports = forEach;

},{}],19:[function(require,module,exports){
"use strict";

function get(xs) {
    var n = arguments[1] === undefined ? 0 : arguments[1];

    var i = 0;

    for (var _iterator = xs[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
        var x = _step.value;

        if (i === n) {
            return x;
        }

        i += 1;
    }
}

module.exports = get;

},{}],20:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var first = _interopRequire(require("./first"));

module.exports = first;

},{"./first":17}],21:[function(require,module,exports){
"use strict";

function includes(xs, v) {
    if (v !== v) {
        //NaN
        for (var _iterator = xs[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
            var x = _step.value;

            if (x !== x) {
                return true;
            }
        }
    } else {
        for (var _iterator2 = xs[Symbol.iterator](), _step2; !(_step2 = _iterator2.next()).done;) {
            var x = _step2.value;

            if (x === v) {
                return true;
            }
        }
    }

    return false;
}

module.exports = includes;

},{}],22:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var all = _interopRequire(require("./all.js"));

var any = _interopRequire(require("./any.js"));

var chain = _interopRequire(require("./chain.js"));

var chunk = _interopRequire(require("./chunk.js"));

var compact = _interopRequire(require("./compact.js"));

var concat = _interopRequire(require("./concat.js"));

var contains = _interopRequire(require("./contains.js"));

var drop = _interopRequire(require("./drop.js"));

var dropWhile = _interopRequire(require("./dropWhile.js"));

var each = _interopRequire(require("./each.js"));

var enumerate = _interopRequire(require("./enumerate.js"));

var every = _interopRequire(require("./every.js"));

var filter = _interopRequire(require("./filter.js"));

var find = _interopRequire(require("./find.js"));

var findIndex = _interopRequire(require("./findIndex.js"));

var findWhere = _interopRequire(require("./findWhere.js"));

var first = _interopRequire(require("./first.js"));

var forEach = _interopRequire(require("./forEach.js"));

var get = _interopRequire(require("./get.js"));

var head = _interopRequire(require("./head.js"));

var includes = _interopRequire(require("./includes.js"));

var indexOf = _interopRequire(require("./indexOf.js"));

var initial = _interopRequire(require("./initial.js"));

var last = _interopRequire(require("./last.js"));

var map = _interopRequire(require("./map.js"));

var none = _interopRequire(require("./none.js"));

var nth = _interopRequire(require("./nth.js"));

var pluck = _interopRequire(require("./pluck.js"));

var range = _interopRequire(require("./range.js"));

var reject = _interopRequire(require("./reject.js"));

var repeat = _interopRequire(require("./repeat.js"));

var rest = _interopRequire(require("./rest.js"));

var size = _interopRequire(require("./size.js"));

var slice = _interopRequire(require("./slice.js"));

var some = _interopRequire(require("./some.js"));

var tail = _interopRequire(require("./tail.js"));

var take = _interopRequire(require("./take.js"));

var takeWhile = _interopRequire(require("./takeWhile.js"));

var tap = _interopRequire(require("./tap.js"));

var thru = _interopRequire(require("./thru.js"));

var where = _interopRequire(require("./where.js"));

var without = _interopRequire(require("./without.js"));

window.lax = {
	all: all,
	any: any,
	chain: chain,
	chunk: chunk,
	compact: compact,
	concat: concat,
	contains: contains,
	drop: drop,
	dropWhile: dropWhile,
	each: each,
	enumerate: enumerate,
	every: every,
	filter: filter,
	find: find,
	findIndex: findIndex,
	findWhere: findWhere,
	first: first,
	forEach: forEach,
	get: get,
	head: head,
	includes: includes,
	indexOf: indexOf,
	initial: initial,
	last: last,
	map: map,
	none: none,
	nth: nth,
	pluck: pluck,
	range: range,
	reject: reject,
	repeat: repeat,
	rest: rest,
	size: size,
	slice: slice,
	some: some,
	tail: tail,
	take: take,
	takeWhile: takeWhile,
	tap: tap,
	thru: thru,
	where: where,
	without: without
};

},{"./all.js":1,"./any.js":2,"./chain.js":3,"./chunk.js":4,"./compact.js":5,"./concat.js":6,"./contains.js":7,"./drop.js":8,"./dropWhile.js":9,"./each.js":10,"./enumerate.js":11,"./every.js":12,"./filter.js":13,"./find.js":14,"./findIndex.js":15,"./findWhere.js":16,"./first.js":17,"./forEach.js":18,"./get.js":19,"./head.js":20,"./includes.js":21,"./indexOf.js":23,"./initial.js":24,"./last.js":25,"./map.js":26,"./none.js":27,"./nth.js":28,"./pluck.js":29,"./range.js":30,"./reject.js":31,"./repeat.js":32,"./rest.js":33,"./size.js":34,"./slice.js":35,"./some.js":36,"./tail.js":37,"./take.js":38,"./takeWhile.js":39,"./tap.js":40,"./thru.js":41,"./where.js":42,"./without.js":43}],23:[function(require,module,exports){
"use strict";

function indexOf(xs, v) {
    var i = 0;

    if (v !== v) {
        //NaN
        for (var _iterator = xs[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
            var x = _step.value;

            if (x !== x) {
                return i;
            }

            i += 1;
        }
    } else {
        for (var _iterator2 = xs[Symbol.iterator](), _step2; !(_step2 = _iterator2.next()).done;) {
            var x = _step2.value;

            if (x === v) {
                return i;
            }

            i += 1;
        }
    }

    return -1;
}

module.exports = indexOf;

},{}],24:[function(require,module,exports){
"use strict";

var initial = regeneratorRuntime.mark(function initial(xs) {
    var iter, curr, next;
    return regeneratorRuntime.wrap(function initial$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                iter = xs[Symbol.iterator]();
                curr = iter.next();
                next = iter.next();

            case 3:
                if (next.done) {
                    context$1$0.next = 10;
                    break;
                }

                context$1$0.next = 6;
                return curr.value;

            case 6:

                curr = next;
                next = iter.next();
                context$1$0.next = 3;
                break;

            case 10:
            case "end":
                return context$1$0.stop();
        }
    }, initial, this);
});
module.exports = initial;

},{}],25:[function(require,module,exports){
"use strict";

function last(xs) {
    var iter = xs[Symbol.iterator]();
    var curr = iter.next();
    var next = iter.next();

    while (!next.done) {
        curr = next;
        next = iter.next();
    }

    return curr.value;
}

module.exports = last;

},{}],26:[function(require,module,exports){
"use strict";

var map = regeneratorRuntime.mark(function map(xs, predicate, thisArg) {
    var fn, i, _iterator, _step, x;

    return regeneratorRuntime.wrap(function map$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                fn = thisArg ? predicate.bind(thisArg) : predicate;
                i = 0;
                _iterator = xs[Symbol.iterator]();

            case 3:
                if ((_step = _iterator.next()).done) {
                    context$1$0.next = 10;
                    break;
                }

                x = _step.value;
                context$1$0.next = 7;
                return fn(x, i, xs);

            case 7:
                i += 1;

            case 8:
                context$1$0.next = 3;
                break;

            case 10:
            case "end":
                return context$1$0.stop();
        }
    }, map, this);
});
module.exports = map;

},{}],27:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var some = _interopRequire(require("./some"));

function none(xs, predicate, thisArg) {
    return !some(xs, predicate, thisArg);
}

module.exports = none;

},{"./some":36}],28:[function(require,module,exports){
"use strict";

function nth(xs, n) {
    var i = 0;

    for (var _iterator = xs[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
        var x = _step.value;

        if (i === n) {
            return x;
        }

        i += 1;
    }
}

module.exports = nth;

},{}],29:[function(require,module,exports){
"use strict";

var pluck = regeneratorRuntime.mark(function pluck(xs, prop) {
    var _iterator, _step, x;

    return regeneratorRuntime.wrap(function pluck$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                _iterator = xs[Symbol.iterator]();

            case 1:
                if ((_step = _iterator.next()).done) {
                    context$1$0.next = 7;
                    break;
                }

                x = _step.value;
                context$1$0.next = 5;
                return x[prop];

            case 5:
                context$1$0.next = 1;
                break;

            case 7:
            case "end":
                return context$1$0.stop();
        }
    }, pluck, this);
});
module.exports = pluck;

},{}],30:[function(require,module,exports){
"use strict";

var range = regeneratorRuntime.mark(function range() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var start, stop, step, i;
    return regeneratorRuntime.wrap(function range$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                start = 0;
                stop = args[0];
                step = args[2] || 1;

                if (args.length > 1) {
                    start = args[0];
                    stop = args[1];
                }

                i = start;

            case 5:
                if (!(i < stop)) {
                    context$1$0.next = 11;
                    break;
                }

                context$1$0.next = 8;
                return i;

            case 8:
                i += step;
                context$1$0.next = 5;
                break;

            case 11:
            case "end":
                return context$1$0.stop();
        }
    }, range, this);
});
module.exports = range;

},{}],31:[function(require,module,exports){
"use strict";

var reject = regeneratorRuntime.mark(function reject(xs, predicate, thisArg) {
    var fn, i, _iterator, _step, x;

    return regeneratorRuntime.wrap(function reject$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                fn = thisArg ? predicate.bind(thisArg) : predicate;
                i = 0;
                _iterator = xs[Symbol.iterator]();

            case 3:
                if ((_step = _iterator.next()).done) {
                    context$1$0.next = 11;
                    break;
                }

                x = _step.value;

                if (fn(x, i, xs)) {
                    context$1$0.next = 8;
                    break;
                }

                context$1$0.next = 8;
                return x;

            case 8:

                i += 1;

            case 9:
                context$1$0.next = 3;
                break;

            case 11:
            case "end":
                return context$1$0.stop();
        }
    }, reject, this);
});
module.exports = reject;

},{}],32:[function(require,module,exports){
"use strict";

var repeat = regeneratorRuntime.mark(function repeat(v, n) {
    var i;
    return regeneratorRuntime.wrap(function repeat$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                i = 0;

            case 1:
                if (!(i < n)) {
                    context$1$0.next = 7;
                    break;
                }

                context$1$0.next = 4;
                return v;

            case 4:
                i++;
                context$1$0.next = 1;
                break;

            case 7:
            case "end":
                return context$1$0.stop();
        }
    }, repeat, this);
});
module.exports = repeat;

},{}],33:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var slice = _interopRequire(require("./slice"));

function rest(xs) {
    var n = arguments[1] === undefined ? 1 : arguments[1];

    return slice(xs, n);
}

module.exports = rest;

},{"./slice":35}],34:[function(require,module,exports){
"use strict";

function size(xs) {
    var iter = xs[Symbol.iterator]();
    var x = iter.next();
    var i = 0;

    while (!x.done) {
        i += 1;
        x = iter.next();
    }

    return i;
}

module.exports = size;

},{}],35:[function(require,module,exports){
"use strict";

var slice = regeneratorRuntime.mark(function slice(xs) {
    var start = arguments[1] === undefined ? 0 : arguments[1];
    var stop = arguments[2] === undefined ? null : arguments[2];
    var iter, i, x;
    return regeneratorRuntime.wrap(function slice$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                iter = xs[Symbol.iterator]();
                i = 0;
                x = iter.next();

                while (i < start && !x.done) {
                    x = iter.next();
                    i += 1;
                }

            case 4:
                if (!(!x.done && (i < stop || stop === null))) {
                    context$1$0.next = 11;
                    break;
                }

                context$1$0.next = 7;
                return x.value;

            case 7:

                x = iter.next();
                i += 1;
                context$1$0.next = 4;
                break;

            case 11:
            case "end":
                return context$1$0.stop();
        }
    }, slice, this);
});
module.exports = slice;

},{}],36:[function(require,module,exports){
"use strict";

function some(xs, predicate, thisArg) {
    var iter = xs[Symbol.iterator]();
    var result = false;
    var fn = thisArg ? predicate.bind(thisArg) : predicate;

    for (var i = 0, x = iter.next(); !x.done && !result; x = iter.next(), i++) {
        result = fn(x.value, i, xs);
    }

    return result;
}

module.exports = some;

},{}],37:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var rest = _interopRequire(require("./rest"));

module.exports = rest;

},{"./rest":33}],38:[function(require,module,exports){
"use strict";

var take = regeneratorRuntime.mark(function take(xs, n) {
    var i, _iterator, _step, x;

    return regeneratorRuntime.wrap(function take$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                i = 0;
                _iterator = xs[Symbol.iterator]();

            case 2:
                if ((_step = _iterator.next()).done) {
                    context$1$0.next = 12;
                    break;
                }

                x = _step.value;

                if (!(i === n)) {
                    context$1$0.next = 7;
                    break;
                }

                if (_iterator["return"]) _iterator["return"]();
                return context$1$0.abrupt("break", 12);

            case 7:
                context$1$0.next = 9;
                return x;

            case 9:

                i += 1;

            case 10:
                context$1$0.next = 2;
                break;

            case 12:
            case "end":
                return context$1$0.stop();
        }
    }, take, this);
});
module.exports = take;

},{}],39:[function(require,module,exports){
"use strict";

var takeWhile = regeneratorRuntime.mark(function takeWhile(xs, predicate, thisArg) {
    var fn, i, _iterator, _step, x;

    return regeneratorRuntime.wrap(function takeWhile$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                fn = thisArg ? predicate.bind(thisArg) : predicate;
                i = 0;
                _iterator = xs[Symbol.iterator]();

            case 3:
                if ((_step = _iterator.next()).done) {
                    context$1$0.next = 15;
                    break;
                }

                x = _step.value;

                if (!fn(x, i, xs)) {
                    context$1$0.next = 10;
                    break;
                }

                context$1$0.next = 8;
                return x;

            case 8:
                context$1$0.next = 12;
                break;

            case 10:
                if (_iterator["return"]) _iterator["return"]();
                return context$1$0.abrupt("break", 15);

            case 12:

                i += 1;

            case 13:
                context$1$0.next = 3;
                break;

            case 15:
            case "end":
                return context$1$0.stop();
        }
    }, takeWhile, this);
});
module.exports = takeWhile;

},{}],40:[function(require,module,exports){
"use strict";

var tap = regeneratorRuntime.mark(function tap(xs, predicate, thisArg) {
    var fn, i, _iterator, _step, x;

    return regeneratorRuntime.wrap(function tap$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                fn = thisArg ? predicate.bind(thisArg) : predicate;
                i = 0;

                for (_iterator = xs[Symbol.iterator](); !(_step = _iterator.next()).done;) {
                    x = _step.value;

                    fn(x, i, xs);
                    i += 1;
                }

                context$1$0.next = 5;
                return xs;

            case 5:
            case "end":
                return context$1$0.stop();
        }
    }, tap, this);
});
module.exports = tap;

},{}],41:[function(require,module,exports){
"use strict";

var thru = regeneratorRuntime.mark(function thru(xs, predicate, thisArg) {
    var fn, i, _iterator, _step, x;

    return regeneratorRuntime.wrap(function thru$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                fn = thisArg ? predicate.bind(thisArg) : predicate;
                i = 0;
                _iterator = xs[Symbol.iterator]();

            case 3:
                if ((_step = _iterator.next()).done) {
                    context$1$0.next = 10;
                    break;
                }

                x = _step.value;
                context$1$0.next = 7;
                return fn(x, i, xs);

            case 7:
                i += 1;

            case 8:
                context$1$0.next = 3;
                break;

            case 10:
            case "end":
                return context$1$0.stop();
        }
    }, thru, this);
});
module.exports = thru;

},{}],42:[function(require,module,exports){
"use strict";

var where = regeneratorRuntime.mark(function where(xs, query) {
    var props, _iterator, _step, x, match, _iterator2, _step2, prop;

    return regeneratorRuntime.wrap(function where$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                props = Object.getOwnPropertyNames(query);
                _iterator = xs[Symbol.iterator]();

            case 2:
                if ((_step = _iterator.next()).done) {
                    context$1$0.next = 19;
                    break;
                }

                x = _step.value;
                match = true;
                _iterator2 = props[Symbol.iterator]();

            case 6:
                if ((_step2 = _iterator2.next()).done) {
                    context$1$0.next = 14;
                    break;
                }

                prop = _step2.value;

                if (!(query[prop] !== x[prop])) {
                    context$1$0.next = 12;
                    break;
                }

                match = false;

                if (_iterator2["return"]) _iterator2["return"]();
                return context$1$0.abrupt("break", 14);

            case 12:
                context$1$0.next = 6;
                break;

            case 14:
                if (!match) {
                    context$1$0.next = 17;
                    break;
                }

                context$1$0.next = 17;
                return x;

            case 17:
                context$1$0.next = 2;
                break;

            case 19:
            case "end":
                return context$1$0.stop();
        }
    }, where, this);
});
module.exports = where;

},{}],43:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var without = regeneratorRuntime.mark(function without(xs) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    var _iterator, _step, x;

    return regeneratorRuntime.wrap(function without$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                _iterator = xs[Symbol.iterator]();

            case 1:
                if ((_step = _iterator.next()).done) {
                    context$1$0.next = 8;
                    break;
                }

                x = _step.value;

                if (includes(args, x)) {
                    context$1$0.next = 6;
                    break;
                }

                context$1$0.next = 6;
                return x;

            case 6:
                context$1$0.next = 1;
                break;

            case 8:
            case "end":
                return context$1$0.stop();
        }
    }, without, this);
});

var includes = _interopRequire(require("./includes"));

module.exports = without;

},{"./includes":21}]},{},[22]);