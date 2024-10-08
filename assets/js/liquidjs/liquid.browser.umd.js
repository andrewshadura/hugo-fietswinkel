/*
 * liquidjs@9.42.1, https://github.com/harttle/liquidjs
 * (c) 2016-2022 harttle
 * Released under the MIT License.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.liquidjs = {}));
})(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    }

    var Drop = /** @class */ (function () {
        function Drop() {
        }
        Drop.prototype.liquidMethodMissing = function (key) {
            return undefined;
        };
        return Drop;
    }());

    var toString$1 = Object.prototype.toString;
    var toLowerCase = String.prototype.toLowerCase;
    var hasOwnProperty = Object.hasOwnProperty;
    function isString(value) {
        return typeof value === 'string';
    }
    // eslint-disable-next-line @typescript-eslint/ban-types
    function isFunction(value) {
        return typeof value === 'function';
    }
    function isPromise(val) {
        return val && isFunction(val.then);
    }
    function isIterator(val) {
        return val && isFunction(val.next) && isFunction(val.throw) && isFunction(val.return);
    }
    function escapeRegex(str) {
        return str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    }
    function stringify(value) {
        value = toValue(value);
        if (isString(value))
            return value;
        if (isNil(value))
            return '';
        if (isArray(value))
            return value.map(function (x) { return stringify(x); }).join('');
        return String(value);
    }
    function toValue(value) {
        return (value instanceof Drop && isFunction(value.valueOf)) ? value.valueOf() : value;
    }
    function isNumber(value) {
        return typeof value === 'number';
    }
    function toLiquid(value) {
        if (value && isFunction(value.toLiquid))
            return toLiquid(value.toLiquid());
        return value;
    }
    function isNil(value) {
        return value == null;
    }
    function isArray(value) {
        // be compatible with IE 8
        return toString$1.call(value) === '[object Array]';
    }
    function isIterable(value) {
        return isObject(value) && Symbol.iterator in value;
    }
    /*
     * Iterates over own enumerable string keyed properties of an object and invokes iteratee for each property.
     * The iteratee is invoked with three arguments: (value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning false.
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @return {Object} Returns object.
     */
    function forOwn(obj, iteratee) {
        obj = obj || {};
        for (var k in obj) {
            if (hasOwnProperty.call(obj, k)) {
                if (iteratee(obj[k], k, obj) === false)
                    break;
            }
        }
        return obj;
    }
    function last$1(arr) {
        return arr[arr.length - 1];
    }
    /*
     * Checks if value is the language type of Object.
     * (e.g. arrays, functions, objects, regexes, new Number(0), and new String(''))
     * @param {any} value The value to check.
     * @return {Boolean} Returns true if value is an object, else false.
     */
    function isObject(value) {
        var type = typeof value;
        return value !== null && (type === 'object' || type === 'function');
    }
    function range(start, stop, step) {
        if (step === void 0) { step = 1; }
        var arr = [];
        for (var i = start; i < stop; i += step) {
            arr.push(i);
        }
        return arr;
    }
    function padStart(str, length, ch) {
        if (ch === void 0) { ch = ' '; }
        return pad(str, length, ch, function (str, ch) { return ch + str; });
    }
    function padEnd(str, length, ch) {
        if (ch === void 0) { ch = ' '; }
        return pad(str, length, ch, function (str, ch) { return str + ch; });
    }
    function pad(str, length, ch, add) {
        str = String(str);
        var n = length - str.length;
        while (n-- > 0)
            str = add(str, ch);
        return str;
    }
    function identify(val) {
        return val;
    }
    function snakeCase(str) {
        return str.replace(/(\w?)([A-Z])/g, function (_, a, b) { return (a ? a + '_' : '') + b.toLowerCase(); });
    }
    function changeCase(str) {
        var hasLowerCase = __spreadArray([], __read(str), false).some(function (ch) { return ch >= 'a' && ch <= 'z'; });
        return hasLowerCase ? str.toUpperCase() : str.toLowerCase();
    }
    function ellipsis(str, N) {
        return str.length > N ? str.slice(0, N - 3) + '...' : str;
    }
    // compare string in case-insensitive way, undefined values to the tail
    function caseInsensitiveCompare(a, b) {
        if (a == null && b == null)
            return 0;
        if (a == null)
            return 1;
        if (b == null)
            return -1;
        a = toLowerCase.call(a);
        b = toLowerCase.call(b);
        if (a < b)
            return -1;
        if (a > b)
            return 1;
        return 0;
    }
    function argumentsToValue(fn) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return fn.apply(void 0, __spreadArray([], __read(args.map(toValue)), false));
        };
    }
    function escapeRegExp(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }

    var Node = /** @class */ (function () {
        function Node(key, value, next, prev) {
            this.key = key;
            this.value = value;
            this.next = next;
            this.prev = prev;
        }
        return Node;
    }());
    var LRU = /** @class */ (function () {
        function LRU(limit, size) {
            if (size === void 0) { size = 0; }
            this.limit = limit;
            this.size = size;
            this.cache = {};
            this.head = new Node('HEAD', null, null, null);
            this.tail = new Node('TAIL', null, null, null);
            this.head.next = this.tail;
            this.tail.prev = this.head;
        }
        LRU.prototype.write = function (key, value) {
            if (this.cache[key]) {
                this.cache[key].value = value;
            }
            else {
                var node = new Node(key, value, this.head.next, this.head);
                this.head.next.prev = node;
                this.head.next = node;
                this.cache[key] = node;
                this.size++;
                this.ensureLimit();
            }
        };
        LRU.prototype.read = function (key) {
            if (!this.cache[key])
                return;
            var value = this.cache[key].value;
            this.remove(key);
            this.write(key, value);
            return value;
        };
        LRU.prototype.remove = function (key) {
            var node = this.cache[key];
            node.prev.next = node.next;
            node.next.prev = node.prev;
            delete this.cache[key];
            this.size--;
        };
        LRU.prototype.clear = function () {
            this.head.next = this.tail;
            this.tail.prev = this.head;
            this.size = 0;
            this.cache = {};
        };
        LRU.prototype.ensureLimit = function () {
            if (this.size > this.limit)
                this.remove(this.tail.prev.key);
        };
        return LRU;
    }());

    function domResolve(root, path) {
        var base = document.createElement('base');
        base.href = root;
        var head = document.getElementsByTagName('head')[0];
        head.insertBefore(base, head.firstChild);
        var a = document.createElement('a');
        a.href = path;
        var resolved = a.href;
        head.removeChild(base);
        return resolved;
    }
    function resolve(root, filepath, ext) {
        if (root.length && last$1(root) !== '/')
            root += '/';
        var url = domResolve(root, filepath);
        return url.replace(/^(\w+:\/\/[^/]+)(\/[^?]+)/, function (str, origin, path) {
            var last = path.split('/').pop();
            if (/\.\w+$/.test(last))
                return str;
            return origin + path + ext;
        });
    }
    function readFile(url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var xhr = new XMLHttpRequest();
                        xhr.onload = function () {
                            if (xhr.status >= 200 && xhr.status < 300) {
                                resolve(xhr.responseText);
                            }
                            else {
                                reject(new Error(xhr.statusText));
                            }
                        };
                        xhr.onerror = function () {
                            reject(new Error('An error occurred whilst receiving the response.'));
                        };
                        xhr.open('GET', url);
                        xhr.send();
                    })];
            });
        });
    }
    function readFileSync(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.send();
        if (xhr.status < 200 || xhr.status >= 300) {
            throw new Error(xhr.statusText);
        }
        return xhr.responseText;
    }
    function exists(filepath) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, true];
            });
        });
    }
    function existsSync(filepath) {
        return true;
    }
    function dirname(filepath) {
        return domResolve(filepath, '.');
    }
    var sep = '/';

    var fs = /*#__PURE__*/Object.freeze({
        __proto__: null,
        resolve: resolve,
        readFile: readFile,
        readFileSync: readFileSync,
        exists: exists,
        existsSync: existsSync,
        dirname: dirname,
        sep: sep
    });

    function isComparable(arg) {
        return arg && isFunction(arg.equals);
    }

    function isTruthy(val, ctx) {
        return !isFalsy(val, ctx);
    }
    function isFalsy(val, ctx) {
        if (ctx.opts.jsTruthy) {
            return !val;
        }
        else {
            return val === false || undefined === val || val === null;
        }
    }

    var defaultOperators = {
        '==': function (l, r) {
            if (isComparable(l))
                return l.equals(r);
            if (isComparable(r))
                return r.equals(l);
            return toValue(l) === toValue(r);
        },
        '!=': function (l, r) {
            if (isComparable(l))
                return !l.equals(r);
            if (isComparable(r))
                return !r.equals(l);
            return toValue(l) !== toValue(r);
        },
        '>': function (l, r) {
            if (isComparable(l))
                return l.gt(r);
            if (isComparable(r))
                return r.lt(l);
            return toValue(l) > toValue(r);
        },
        '<': function (l, r) {
            if (isComparable(l))
                return l.lt(r);
            if (isComparable(r))
                return r.gt(l);
            return toValue(l) < toValue(r);
        },
        '>=': function (l, r) {
            if (isComparable(l))
                return l.geq(r);
            if (isComparable(r))
                return r.leq(l);
            return toValue(l) >= toValue(r);
        },
        '<=': function (l, r) {
            if (isComparable(l))
                return l.leq(r);
            if (isComparable(r))
                return r.geq(l);
            return toValue(l) <= toValue(r);
        },
        'contains': function (l, r) {
            l = toValue(l);
            r = toValue(r);
            return l && isFunction(l.indexOf) ? l.indexOf(r) > -1 : false;
        },
        'and': function (l, r, ctx) { return isTruthy(toValue(l), ctx) && isTruthy(toValue(r), ctx); },
        'or': function (l, r, ctx) { return isTruthy(toValue(l), ctx) || isTruthy(toValue(r), ctx); }
    };

    // **DO NOT CHANGE THIS FILE**
    //
    // This file is generated by bin/character-gen.js
    // bitmask character types to boost performance
    var TYPES = [0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 4, 4, 4, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 2, 8, 0, 0, 0, 0, 8, 0, 0, 0, 64, 0, 65, 0, 0, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 0, 0, 2, 2, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
    var IDENTIFIER = 1;
    var BLANK = 4;
    var QUOTE = 8;
    var INLINE_BLANK = 16;
    var NUMBER = 32;
    var SIGN = 64;
    TYPES[160] = TYPES[5760] = TYPES[6158] = TYPES[8192] = TYPES[8193] = TYPES[8194] = TYPES[8195] = TYPES[8196] = TYPES[8197] = TYPES[8198] = TYPES[8199] = TYPES[8200] = TYPES[8201] = TYPES[8202] = TYPES[8232] = TYPES[8233] = TYPES[8239] = TYPES[8287] = TYPES[12288] = BLANK;

    function createTrie(operators) {
        var e_1, _a;
        var trie = {};
        try {
            for (var _b = __values(Object.entries(operators)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), name_1 = _d[0], handler = _d[1];
                var node = trie;
                for (var i = 0; i < name_1.length; i++) {
                    var c = name_1[i];
                    node[c] = node[c] || {};
                    if (i === name_1.length - 1 && (TYPES[name_1.charCodeAt(i)] & IDENTIFIER)) {
                        node[c].needBoundary = true;
                    }
                    node = node[c];
                }
                node.handler = handler;
                node.end = true;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return trie;
    }

    var escapeMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&#34;',
        "'": '&#39;'
    };
    var unescapeMap = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&#34;': '"',
        '&#39;': "'"
    };
    function escape(str) {
        return stringify(str).replace(/&|<|>|"|'/g, function (m) { return escapeMap[m]; });
    }
    function unescape(str) {
        return stringify(str).replace(/&(amp|lt|gt|#34|#39);/g, function (m) { return unescapeMap[m]; });
    }
    function escapeOnce(str) {
        return escape(unescape(stringify(str)));
    }
    function newlineToBr(v) {
        return stringify(v).replace(/\n/g, '<br />\n');
    }
    function stripHtml(v) {
        return stringify(v).replace(/<script.*?<\/script>|<!--.*?-->|<style.*?<\/style>|<.*?>/g, '');
    }

    var abs = argumentsToValue(Math.abs);
    var atLeast = argumentsToValue(Math.max);
    var atMost = argumentsToValue(Math.min);
    var ceil = argumentsToValue(Math.ceil);
    var dividedBy = argumentsToValue(function (dividend, divisor, integerArithmetic) {
        if (integerArithmetic === void 0) { integerArithmetic = false; }
        return integerArithmetic ? Math.floor(dividend / divisor) : dividend / divisor;
    });
    var floor = argumentsToValue(Math.floor);
    var minus = argumentsToValue(function (v, arg) { return v - arg; });
    var modulo = argumentsToValue(function (v, arg) { return v % arg; });
    var times = argumentsToValue(function (v, arg) { return v * arg; });
    function round(v, arg) {
        if (arg === void 0) { arg = 0; }
        v = toValue(v);
        arg = toValue(arg);
        var amp = Math.pow(10, arg);
        return Math.round(v * amp) / amp;
    }
    function plus(v, arg) {
        v = toValue(v);
        arg = toValue(arg);
        return Number(v) + Number(arg);
    }

    var urlDecode = function (x) { return stringify(x).split('+').map(decodeURIComponent).join(' '); };
    var urlEncode = function (x) { return stringify(x).split(' ').map(encodeURIComponent).join('+'); };

    function toEnumerable(val) {
        val = toValue(val);
        if (isArray(val))
            return val;
        if (isString(val) && val.length > 0)
            return [val];
        if (isIterable(val))
            return Array.from(val);
        if (isObject(val))
            return Object.keys(val).map(function (key) { return [key, val[key]]; });
        return [];
    }
    function toArray(val) {
        if (isNil(val))
            return [];
        if (isArray(val))
            return val;
        return [val];
    }

    var join = argumentsToValue(function (v, arg) { return toArray(v).join(arg === undefined ? ' ' : arg); });
    var last = argumentsToValue(function (v) { return isArray(v) ? last$1(v) : ''; });
    var first = argumentsToValue(function (v) { return isArray(v) ? v[0] : ''; });
    var reverse = argumentsToValue(function (v) { return __spreadArray([], __read(toArray(v)), false).reverse(); });
    function sort(arr, property) {
        var values, _a, _b, item, _c, _d, _e, _f, e_1_1;
        var e_1, _g;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    values = [];
                    _h.label = 1;
                case 1:
                    _h.trys.push([1, 8, 9, 10]);
                    _a = __values(toArray(toValue(arr))), _b = _a.next();
                    _h.label = 2;
                case 2:
                    if (!!_b.done) return [3 /*break*/, 7];
                    item = _b.value;
                    _d = (_c = values).push;
                    _e = [item];
                    if (!property) return [3 /*break*/, 4];
                    return [4 /*yield*/, this.context._getFromScope(item, stringify(property).split('.'))];
                case 3:
                    _f = _h.sent();
                    return [3 /*break*/, 5];
                case 4:
                    _f = item;
                    _h.label = 5;
                case 5:
                    _d.apply(_c, [_e.concat([
                            _f
                        ])]);
                    _h.label = 6;
                case 6:
                    _b = _a.next();
                    return [3 /*break*/, 2];
                case 7: return [3 /*break*/, 10];
                case 8:
                    e_1_1 = _h.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 10];
                case 9:
                    try {
                        if (_b && !_b.done && (_g = _a.return)) _g.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 10: return [2 /*return*/, values.sort(function (lhs, rhs) {
                        var lvalue = lhs[1];
                        var rvalue = rhs[1];
                        return lvalue < rvalue ? -1 : (lvalue > rvalue ? 1 : 0);
                    }).map(function (tuple) { return tuple[0]; })];
            }
        });
    }
    function sortNatural(input, property) {
        input = toValue(input);
        var propertyString = stringify(property);
        var compare = property === undefined
            ? caseInsensitiveCompare
            : function (lhs, rhs) { return caseInsensitiveCompare(lhs[propertyString], rhs[propertyString]); };
        return __spreadArray([], __read(toArray(input)), false).sort(compare);
    }
    var size = function (v) { return (v && v.length) || 0; };
    function map(arr, property) {
        var results, _a, _b, item, _c, _d, e_2_1;
        var e_2, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    results = [];
                    _f.label = 1;
                case 1:
                    _f.trys.push([1, 6, 7, 8]);
                    _a = __values(toArray(toValue(arr))), _b = _a.next();
                    _f.label = 2;
                case 2:
                    if (!!_b.done) return [3 /*break*/, 5];
                    item = _b.value;
                    _d = (_c = results).push;
                    return [4 /*yield*/, this.context._getFromScope(item, stringify(property).split('.'))];
                case 3:
                    _d.apply(_c, [_f.sent()]);
                    _f.label = 4;
                case 4:
                    _b = _a.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_2_1 = _f.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/, results];
            }
        });
    }
    function compact(arr) {
        arr = toValue(arr);
        return toArray(arr).filter(function (x) { return !isNil(toValue(x)); });
    }
    function concat(v, arg) {
        if (arg === void 0) { arg = []; }
        v = toValue(v);
        arg = toArray(arg).map(function (v) { return toValue(v); });
        return toArray(v).concat(arg);
    }
    function slice(v, begin, length) {
        if (length === void 0) { length = 1; }
        v = toValue(v);
        if (isNil(v))
            return [];
        if (!isArray(v))
            v = stringify(v);
        begin = begin < 0 ? v.length + begin : begin;
        return v.slice(begin, begin + length);
    }
    function where(arr, property, expected) {
        var values, arr_1, arr_1_1, item, _a, _b, e_3_1;
        var e_3, _c;
        var _this = this;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    values = [];
                    arr = toArray(toValue(arr));
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 6, 7, 8]);
                    arr_1 = __values(arr), arr_1_1 = arr_1.next();
                    _d.label = 2;
                case 2:
                    if (!!arr_1_1.done) return [3 /*break*/, 5];
                    item = arr_1_1.value;
                    _b = (_a = values).push;
                    return [4 /*yield*/, this.context._getFromScope(item, stringify(property).split('.'))];
                case 3:
                    _b.apply(_a, [_d.sent()]);
                    _d.label = 4;
                case 4:
                    arr_1_1 = arr_1.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_3_1 = _d.sent();
                    e_3 = { error: e_3_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (arr_1_1 && !arr_1_1.done && (_c = arr_1.return)) _c.call(arr_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/, arr.filter(function (_, i) {
                        if (expected === undefined)
                            return isTruthy(values[i], _this.context);
                        if (isComparable(expected))
                            return expected.equals(values[i]);
                        return values[i] === expected;
                    })];
            }
        });
    }
    function uniq(arr) {
        arr = toValue(arr);
        var u = {};
        return (arr || []).filter(function (val) {
            if (hasOwnProperty.call(u, String(val)))
                return false;
            u[String(val)] = true;
            return true;
        });
    }

    var rFormat = /%([-_0^#:]+)?(\d+)?([EO])?(.)/;
    var monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];
    var dayNames = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    var monthNamesShort = monthNames.map(abbr);
    var dayNamesShort = dayNames.map(abbr);
    var suffixes = {
        1: 'st',
        2: 'nd',
        3: 'rd',
        'default': 'th'
    };
    function abbr(str) {
        return str.slice(0, 3);
    }
    // prototype extensions
    function daysInMonth(d) {
        var feb = isLeapYear(d) ? 29 : 28;
        return [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }
    function getDayOfYear(d) {
        var num = 0;
        for (var i = 0; i < d.getMonth(); ++i) {
            num += daysInMonth(d)[i];
        }
        return num + d.getDate();
    }
    function getWeekOfYear(d, startDay) {
        // Skip to startDay of this week
        var now = getDayOfYear(d) + (startDay - d.getDay());
        // Find the first startDay of the year
        var jan1 = new Date(d.getFullYear(), 0, 1);
        var then = (7 - jan1.getDay() + startDay);
        return String(Math.floor((now - then) / 7) + 1);
    }
    function isLeapYear(d) {
        var year = d.getFullYear();
        return !!((year & 3) === 0 && (year % 100 || (year % 400 === 0 && year)));
    }
    function getSuffix(d) {
        var str = d.getDate().toString();
        var index = parseInt(str.slice(-1));
        return suffixes[index] || suffixes['default'];
    }
    function century(d) {
        return parseInt(d.getFullYear().toString().substring(0, 2), 10);
    }
    // default to 0
    var padWidths = {
        d: 2,
        e: 2,
        H: 2,
        I: 2,
        j: 3,
        k: 2,
        l: 2,
        L: 3,
        m: 2,
        M: 2,
        S: 2,
        U: 2,
        W: 2
    };
    // default to '0'
    var padChars = {
        a: ' ',
        A: ' ',
        b: ' ',
        B: ' ',
        c: ' ',
        e: ' ',
        k: ' ',
        l: ' ',
        p: ' ',
        P: ' '
    };
    var formatCodes = {
        a: function (d) { return dayNamesShort[d.getDay()]; },
        A: function (d) { return dayNames[d.getDay()]; },
        b: function (d) { return monthNamesShort[d.getMonth()]; },
        B: function (d) { return monthNames[d.getMonth()]; },
        c: function (d) { return d.toLocaleString(); },
        C: function (d) { return century(d); },
        d: function (d) { return d.getDate(); },
        e: function (d) { return d.getDate(); },
        H: function (d) { return d.getHours(); },
        I: function (d) { return String(d.getHours() % 12 || 12); },
        j: function (d) { return getDayOfYear(d); },
        k: function (d) { return d.getHours(); },
        l: function (d) { return String(d.getHours() % 12 || 12); },
        L: function (d) { return d.getMilliseconds(); },
        m: function (d) { return d.getMonth() + 1; },
        M: function (d) { return d.getMinutes(); },
        N: function (d, opts) {
            var width = Number(opts.width) || 9;
            var str = String(d.getMilliseconds()).slice(0, width);
            return padEnd(str, width, '0');
        },
        p: function (d) { return (d.getHours() < 12 ? 'AM' : 'PM'); },
        P: function (d) { return (d.getHours() < 12 ? 'am' : 'pm'); },
        q: function (d) { return getSuffix(d); },
        s: function (d) { return Math.round(d.getTime() / 1000); },
        S: function (d) { return d.getSeconds(); },
        u: function (d) { return d.getDay() || 7; },
        U: function (d) { return getWeekOfYear(d, 0); },
        w: function (d) { return d.getDay(); },
        W: function (d) { return getWeekOfYear(d, 1); },
        x: function (d) { return d.toLocaleDateString(); },
        X: function (d) { return d.toLocaleTimeString(); },
        y: function (d) { return d.getFullYear().toString().slice(2, 4); },
        Y: function (d) { return d.getFullYear(); },
        z: function (d, opts) {
            var nOffset = Math.abs(d.getTimezoneOffset());
            var h = Math.floor(nOffset / 60);
            var m = nOffset % 60;
            return (d.getTimezoneOffset() > 0 ? '-' : '+') +
                padStart(h, 2, '0') +
                (opts.flags[':'] ? ':' : '') +
                padStart(m, 2, '0');
        },
        't': function () { return '\t'; },
        'n': function () { return '\n'; },
        '%': function () { return '%'; }
    };
    formatCodes.h = formatCodes.b;
    function strftime (d, formatStr) {
        var output = '';
        var remaining = formatStr;
        var match;
        while ((match = rFormat.exec(remaining))) {
            output += remaining.slice(0, match.index);
            remaining = remaining.slice(match.index + match[0].length);
            output += format(d, match);
        }
        return output + remaining;
    }
    function format(d, match) {
        var e_1, _a;
        var _b = __read(match, 5), input = _b[0], _c = _b[1], flagStr = _c === void 0 ? '' : _c, width = _b[2], modifier = _b[3], conversion = _b[4];
        var convert = formatCodes[conversion];
        if (!convert)
            return input;
        var flags = {};
        try {
            for (var flagStr_1 = __values(flagStr), flagStr_1_1 = flagStr_1.next(); !flagStr_1_1.done; flagStr_1_1 = flagStr_1.next()) {
                var flag = flagStr_1_1.value;
                flags[flag] = true;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (flagStr_1_1 && !flagStr_1_1.done && (_a = flagStr_1.return)) _a.call(flagStr_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var ret = String(convert(d, { flags: flags, width: width, modifier: modifier }));
        var padChar = padChars[conversion] || '0';
        var padWidth = width || padWidths[conversion] || 0;
        if (flags['^'])
            ret = ret.toUpperCase();
        else if (flags['#'])
            ret = changeCase(ret);
        if (flags['_'])
            padChar = ' ';
        else if (flags['0'])
            padChar = '0';
        if (flags['-'])
            padWidth = 0;
        return padStart(ret, padWidth, padChar);
    }

    // one minute in milliseconds
    var OneMinute = 60000;
    var hostTimezoneOffset = new Date().getTimezoneOffset();
    var ISO8601_TIMEZONE_PATTERN = /([zZ]|([+-])(\d{2}):(\d{2}))$/;
    /**
     * A date implementation with timezone info, just like Ruby date
     *
     * Implementation:
     * - create a Date offset by it's timezone difference, avoiding overriding a bunch of methods
     * - rewrite getTimezoneOffset() to trick strftime
     */
    var TimezoneDate = /** @class */ (function () {
        function TimezoneDate(init, timezoneOffset) {
            if (init instanceof TimezoneDate) {
                this.date = init.date;
                timezoneOffset = init.timezoneOffset;
            }
            else {
                var diff = (hostTimezoneOffset - timezoneOffset) * OneMinute;
                var time = new Date(init).getTime() + diff;
                this.date = new Date(time);
            }
            this.timezoneOffset = timezoneOffset;
        }
        TimezoneDate.prototype.getTime = function () {
            return this.date.getTime();
        };
        TimezoneDate.prototype.getMilliseconds = function () {
            return this.date.getMilliseconds();
        };
        TimezoneDate.prototype.getSeconds = function () {
            return this.date.getSeconds();
        };
        TimezoneDate.prototype.getMinutes = function () {
            return this.date.getMinutes();
        };
        TimezoneDate.prototype.getHours = function () {
            return this.date.getHours();
        };
        TimezoneDate.prototype.getDay = function () {
            return this.date.getDay();
        };
        TimezoneDate.prototype.getDate = function () {
            return this.date.getDate();
        };
        TimezoneDate.prototype.getMonth = function () {
            return this.date.getMonth();
        };
        TimezoneDate.prototype.getFullYear = function () {
            return this.date.getFullYear();
        };
        TimezoneDate.prototype.toLocaleTimeString = function (locale) {
            return this.date.toLocaleTimeString(locale);
        };
        TimezoneDate.prototype.toLocaleDateString = function (locale) {
            return this.date.toLocaleDateString(locale);
        };
        TimezoneDate.prototype.getTimezoneOffset = function () {
            return this.timezoneOffset;
        };
        /**
         * Create a Date object fixed to it's declared Timezone. Both
         * - 2021-08-06T02:29:00.000Z and
         * - 2021-08-06T02:29:00.000+08:00
         * will always be displayed as
         * - 2021-08-06 02:29:00
         * regardless timezoneOffset in JavaScript realm
         *
         * The implementation hack:
         * Instead of calling `.getMonth()`/`.getUTCMonth()` respect to `preserveTimezones`,
         * we create a different Date to trick strftime, it's both simpler and more performant.
         * Given that a template is expected to be parsed fewer times than rendered.
         */
        TimezoneDate.createDateFixedToTimezone = function (dateString) {
            var m = dateString.match(ISO8601_TIMEZONE_PATTERN);
            // representing a UTC timestamp
            if (m && m[1] === 'Z') {
                return new TimezoneDate(+new Date(dateString), 0);
            }
            // has a timezone specified
            if (m && m[2] && m[3] && m[4]) {
                var _a = __read(m, 5), sign = _a[2], hours = _a[3], minutes = _a[4];
                var delta = (sign === '+' ? -1 : 1) * (parseInt(hours, 10) * 60 + parseInt(minutes, 10));
                return new TimezoneDate(+new Date(dateString), delta);
            }
            return new Date(dateString);
        };
        return TimezoneDate;
    }());

    function date(v, arg) {
        var opts = this.context.opts;
        var date;
        v = toValue(v);
        arg = stringify(arg);
        if (v === 'now' || v === 'today') {
            date = new Date();
        }
        else if (isNumber(v)) {
            date = new Date(v * 1000);
        }
        else if (isString(v)) {
            if (/^\d+$/.test(v)) {
                date = new Date(+v * 1000);
            }
            else if (opts.preserveTimezones) {
                date = TimezoneDate.createDateFixedToTimezone(v);
            }
            else {
                date = new Date(v);
            }
        }
        else {
            date = v;
        }
        if (!isValidDate(date))
            return v;
        if (opts.hasOwnProperty('timezoneOffset')) {
            date = new TimezoneDate(date, opts.timezoneOffset);
        }
        return strftime(date, arg);
    }
    function isValidDate(date) {
        return (date instanceof Date || date instanceof TimezoneDate) && !isNaN(date.getTime());
    }

    function Default(value, defaultValue) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        value = toValue(value);
        if (isArray(value) || isString(value))
            return value.length ? value : defaultValue;
        if (value === false && (new Map(args)).get('allow_false'))
            return false;
        return isFalsy(value, this.context) ? defaultValue : value;
    }
    function json(value) {
        return JSON.stringify(value);
    }
    var raw$1 = identify;

    var LiquidError = /** @class */ (function (_super) {
        __extends(LiquidError, _super);
        function LiquidError(err, token) {
            var _this = _super.call(this, err.message) || this;
            _this.originalError = err;
            _this.token = token;
            _this.context = '';
            return _this;
        }
        LiquidError.prototype.update = function () {
            var err = this.originalError;
            this.context = mkContext(this.token);
            this.message = mkMessage(err.message, this.token);
            this.stack = this.message + '\n' + this.context +
                '\n' + this.stack + '\nFrom ' + err.stack;
        };
        return LiquidError;
    }(Error));
    var TokenizationError = /** @class */ (function (_super) {
        __extends(TokenizationError, _super);
        function TokenizationError(message, token) {
            var _this = _super.call(this, new Error(message), token) || this;
            _this.name = 'TokenizationError';
            _super.prototype.update.call(_this);
            return _this;
        }
        return TokenizationError;
    }(LiquidError));
    var ParseError = /** @class */ (function (_super) {
        __extends(ParseError, _super);
        function ParseError(err, token) {
            var _this = _super.call(this, err, token) || this;
            _this.name = 'ParseError';
            _this.message = err.message;
            _super.prototype.update.call(_this);
            return _this;
        }
        return ParseError;
    }(LiquidError));
    var RenderError = /** @class */ (function (_super) {
        __extends(RenderError, _super);
        function RenderError(err, tpl) {
            var _this = _super.call(this, err, tpl.token) || this;
            _this.name = 'RenderError';
            _this.message = err.message;
            _super.prototype.update.call(_this);
            return _this;
        }
        RenderError.is = function (obj) {
            return obj.name === 'RenderError';
        };
        return RenderError;
    }(LiquidError));
    var UndefinedVariableError = /** @class */ (function (_super) {
        __extends(UndefinedVariableError, _super);
        function UndefinedVariableError(err, token) {
            var _this = _super.call(this, err, token) || this;
            _this.name = 'UndefinedVariableError';
            _this.message = err.message;
            _super.prototype.update.call(_this);
            return _this;
        }
        return UndefinedVariableError;
    }(LiquidError));
    // only used internally; raised where we don't have token information,
    // so it can't be an UndefinedVariableError.
    var InternalUndefinedVariableError = /** @class */ (function (_super) {
        __extends(InternalUndefinedVariableError, _super);
        function InternalUndefinedVariableError(variableName) {
            var _this = _super.call(this, "undefined variable: ".concat(variableName)) || this;
            _this.name = 'InternalUndefinedVariableError';
            _this.variableName = variableName;
            return _this;
        }
        return InternalUndefinedVariableError;
    }(Error));
    var AssertionError = /** @class */ (function (_super) {
        __extends(AssertionError, _super);
        function AssertionError(message) {
            var _this = _super.call(this, message) || this;
            _this.name = 'AssertionError';
            _this.message = message + '';
            return _this;
        }
        return AssertionError;
    }(Error));
    function mkContext(token) {
        var _a = __read(token.getPosition(), 1), line = _a[0];
        var lines = token.input.split('\n');
        var begin = Math.max(line - 2, 1);
        var end = Math.min(line + 3, lines.length);
        var context = range(begin, end + 1)
            .map(function (lineNumber) {
            var indicator = (lineNumber === line) ? '>> ' : '   ';
            var num = padStart(String(lineNumber), String(end).length);
            var text = lines[lineNumber - 1];
            return "".concat(indicator).concat(num, "| ").concat(text);
        })
            .join('\n');
        return context;
    }
    function mkMessage(msg, token) {
        if (token.file)
            msg += ", file:".concat(token.file);
        var _a = __read(token.getPosition(), 2), line = _a[0], col = _a[1];
        msg += ", line:".concat(line, ", col:").concat(col);
        return msg;
    }

    function assert(predicate, message) {
        if (!predicate) {
            var msg = typeof message === 'function'
                ? message()
                : (message || "expect ".concat(predicate, " to be true"));
            throw new AssertionError(msg);
        }
    }

    /**
     * String related filters
     *
     * * prefer stringify() to String() since `undefined`, `null` should eval ''
     */
    function append(v, arg) {
        assert(arguments.length === 2, 'append expect 2 arguments');
        return stringify(v) + stringify(arg);
    }
    function prepend(v, arg) {
        assert(arguments.length === 2, 'prepend expect 2 arguments');
        return stringify(arg) + stringify(v);
    }
    function lstrip(v, chars) {
        if (chars) {
            chars = escapeRegExp(stringify(chars));
            return stringify(v).replace(new RegExp("^[".concat(chars, "]+"), 'g'), '');
        }
        return stringify(v).replace(/^\s+/, '');
    }
    function downcase(v) {
        return stringify(v).toLowerCase();
    }
    function upcase(str) {
        return stringify(str).toUpperCase();
    }
    function remove(v, arg) {
        return stringify(v).split(String(arg)).join('');
    }
    function removeFirst(v, l) {
        return stringify(v).replace(String(l), '');
    }
    function rstrip(str, chars) {
        if (chars) {
            chars = escapeRegExp(stringify(chars));
            return stringify(str).replace(new RegExp("[".concat(chars, "]+$"), 'g'), '');
        }
        return stringify(str).replace(/\s+$/, '');
    }
    function split(v, arg) {
        var arr = stringify(v).split(String(arg));
        // align to ruby split, which is the behavior of shopify/liquid
        // see: https://ruby-doc.org/core-2.4.0/String.html#method-i-split
        while (arr.length && arr[arr.length - 1] === '')
            arr.pop();
        return arr;
    }
    function strip(v, chars) {
        if (chars) {
            chars = escapeRegExp(stringify(chars));
            return stringify(v)
                .replace(new RegExp("^[".concat(chars, "]+"), 'g'), '')
                .replace(new RegExp("[".concat(chars, "]+$"), 'g'), '');
        }
        return stringify(v).trim();
    }
    function stripNewlines(v) {
        return stringify(v).replace(/\n/g, '');
    }
    function capitalize(str) {
        str = stringify(str);
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    function replace(v, pattern, replacement) {
        return stringify(v).split(String(pattern)).join(replacement);
    }
    function replaceFirst(v, arg1, arg2) {
        return stringify(v).replace(String(arg1), arg2);
    }
    function truncate(v, l, o) {
        if (l === void 0) { l = 50; }
        if (o === void 0) { o = '...'; }
        v = stringify(v);
        if (v.length <= l)
            return v;
        return v.substring(0, l - o.length) + o;
    }
    function truncatewords(v, words, o) {
        if (words === void 0) { words = 15; }
        if (o === void 0) { o = '...'; }
        var arr = stringify(v).split(/\s+/);
        if (words <= 0)
            words = 1;
        var ret = arr.slice(0, words).join(' ');
        if (arr.length >= words)
            ret += o;
        return ret;
    }

    var builtinFilters = /*#__PURE__*/Object.freeze({
        __proto__: null,
        escape: escape,
        escapeOnce: escapeOnce,
        newlineToBr: newlineToBr,
        stripHtml: stripHtml,
        abs: abs,
        atLeast: atLeast,
        atMost: atMost,
        ceil: ceil,
        dividedBy: dividedBy,
        floor: floor,
        minus: minus,
        modulo: modulo,
        times: times,
        round: round,
        plus: plus,
        urlDecode: urlDecode,
        urlEncode: urlEncode,
        join: join,
        last: last,
        first: first,
        reverse: reverse,
        sort: sort,
        sortNatural: sortNatural,
        size: size,
        map: map,
        compact: compact,
        concat: concat,
        slice: slice,
        where: where,
        uniq: uniq,
        date: date,
        Default: Default,
        json: json,
        raw: raw$1,
        append: append,
        prepend: prepend,
        lstrip: lstrip,
        downcase: downcase,
        upcase: upcase,
        remove: remove,
        removeFirst: removeFirst,
        rstrip: rstrip,
        split: split,
        strip: strip,
        stripNewlines: stripNewlines,
        capitalize: capitalize,
        replace: replace,
        replaceFirst: replaceFirst,
        truncate: truncate,
        truncatewords: truncatewords
    });

    exports.TokenKind = void 0;
    (function (TokenKind) {
        TokenKind[TokenKind["Number"] = 1] = "Number";
        TokenKind[TokenKind["Literal"] = 2] = "Literal";
        TokenKind[TokenKind["Tag"] = 4] = "Tag";
        TokenKind[TokenKind["Output"] = 8] = "Output";
        TokenKind[TokenKind["HTML"] = 16] = "HTML";
        TokenKind[TokenKind["Filter"] = 32] = "Filter";
        TokenKind[TokenKind["Hash"] = 64] = "Hash";
        TokenKind[TokenKind["PropertyAccess"] = 128] = "PropertyAccess";
        TokenKind[TokenKind["Word"] = 256] = "Word";
        TokenKind[TokenKind["Range"] = 512] = "Range";
        TokenKind[TokenKind["Quoted"] = 1024] = "Quoted";
        TokenKind[TokenKind["Operator"] = 2048] = "Operator";
        TokenKind[TokenKind["Delimited"] = 12] = "Delimited";
    })(exports.TokenKind || (exports.TokenKind = {}));

    function isDelimitedToken(val) {
        return !!(getKind(val) & exports.TokenKind.Delimited);
    }
    function isOperatorToken(val) {
        return getKind(val) === exports.TokenKind.Operator;
    }
    function isHTMLToken(val) {
        return getKind(val) === exports.TokenKind.HTML;
    }
    function isOutputToken(val) {
        return getKind(val) === exports.TokenKind.Output;
    }
    function isTagToken(val) {
        return getKind(val) === exports.TokenKind.Tag;
    }
    function isQuotedToken(val) {
        return getKind(val) === exports.TokenKind.Quoted;
    }
    function isLiteralToken(val) {
        return getKind(val) === exports.TokenKind.Literal;
    }
    function isNumberToken(val) {
        return getKind(val) === exports.TokenKind.Number;
    }
    function isPropertyAccessToken(val) {
        return getKind(val) === exports.TokenKind.PropertyAccess;
    }
    function isWordToken(val) {
        return getKind(val) === exports.TokenKind.Word;
    }
    function isRangeToken(val) {
        return getKind(val) === exports.TokenKind.Range;
    }
    function getKind(val) {
        return val ? val.kind : -1;
    }

    var typeGuards = /*#__PURE__*/Object.freeze({
        __proto__: null,
        isDelimitedToken: isDelimitedToken,
        isOperatorToken: isOperatorToken,
        isHTMLToken: isHTMLToken,
        isOutputToken: isOutputToken,
        isTagToken: isTagToken,
        isQuotedToken: isQuotedToken,
        isLiteralToken: isLiteralToken,
        isNumberToken: isNumberToken,
        isPropertyAccessToken: isPropertyAccessToken,
        isWordToken: isWordToken,
        isRangeToken: isRangeToken
    });

    var NullDrop = /** @class */ (function (_super) {
        __extends(NullDrop, _super);
        function NullDrop() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NullDrop.prototype.equals = function (value) {
            return isNil(toValue(value));
        };
        NullDrop.prototype.gt = function () {
            return false;
        };
        NullDrop.prototype.geq = function () {
            return false;
        };
        NullDrop.prototype.lt = function () {
            return false;
        };
        NullDrop.prototype.leq = function () {
            return false;
        };
        NullDrop.prototype.valueOf = function () {
            return null;
        };
        return NullDrop;
    }(Drop));

    var EmptyDrop = /** @class */ (function (_super) {
        __extends(EmptyDrop, _super);
        function EmptyDrop() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EmptyDrop.prototype.equals = function (value) {
            if (value instanceof EmptyDrop)
                return false;
            value = toValue(value);
            if (isString(value) || isArray(value))
                return value.length === 0;
            if (isObject(value))
                return Object.keys(value).length === 0;
            return false;
        };
        EmptyDrop.prototype.gt = function () {
            return false;
        };
        EmptyDrop.prototype.geq = function () {
            return false;
        };
        EmptyDrop.prototype.lt = function () {
            return false;
        };
        EmptyDrop.prototype.leq = function () {
            return false;
        };
        EmptyDrop.prototype.valueOf = function () {
            return '';
        };
        return EmptyDrop;
    }(Drop));

    var BlankDrop = /** @class */ (function (_super) {
        __extends(BlankDrop, _super);
        function BlankDrop() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BlankDrop.prototype.equals = function (value) {
            if (value === false)
                return true;
            if (isNil(toValue(value)))
                return true;
            if (isString(value))
                return /^\s*$/.test(value);
            return _super.prototype.equals.call(this, value);
        };
        return BlankDrop;
    }(EmptyDrop));

    var nil = new NullDrop();
    var literalValues = {
        'true': true,
        'false': false,
        'nil': nil,
        'null': nil,
        'empty': new EmptyDrop(),
        'blank': new BlankDrop()
    };

    var rHex = /[\da-fA-F]/;
    var rOct = /[0-7]/;
    var escapeChar = {
        b: '\b',
        f: '\f',
        n: '\n',
        r: '\r',
        t: '\t',
        v: '\x0B'
    };
    function hexVal(c) {
        var code = c.charCodeAt(0);
        if (code >= 97)
            return code - 87;
        if (code >= 65)
            return code - 55;
        return code - 48;
    }
    function parseStringLiteral(str) {
        var ret = '';
        for (var i = 1; i < str.length - 1; i++) {
            if (str[i] !== '\\') {
                ret += str[i];
                continue;
            }
            if (escapeChar[str[i + 1]] !== undefined) {
                ret += escapeChar[str[++i]];
            }
            else if (str[i + 1] === 'u') {
                var val = 0;
                var j = i + 2;
                while (j <= i + 5 && rHex.test(str[j])) {
                    val = val * 16 + hexVal(str[j++]);
                }
                i = j - 1;
                ret += String.fromCharCode(val);
            }
            else if (!rOct.test(str[i + 1])) {
                ret += str[++i];
            }
            else {
                var j = i + 1;
                var val = 0;
                while (j <= i + 3 && rOct.test(str[j])) {
                    val = val * 8 + hexVal(str[j++]);
                }
                i = j - 1;
                ret += String.fromCharCode(val);
            }
        }
        return ret;
    }

    // convert an async iterator to a Promise
    function toPromise(val) {
        return __awaiter(this, void 0, void 0, function () {
            var value, done, next, state, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!isIterator(val))
                            return [2 /*return*/, val];
                        done = false;
                        next = 'next';
                        _a.label = 1;
                    case 1:
                        state = val[next](value);
                        done = state.done;
                        value = state.value;
                        next = 'next';
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 6]);
                        if (isIterator(value))
                            value = toPromise(value);
                        if (!isPromise(value)) return [3 /*break*/, 4];
                        return [4 /*yield*/, value];
                    case 3:
                        value = _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        err_1 = _a.sent();
                        next = 'throw';
                        value = err_1;
                        return [3 /*break*/, 6];
                    case 6:
                        if (!done) return [3 /*break*/, 1];
                        _a.label = 7;
                    case 7: return [2 /*return*/, value];
                }
            });
        });
    }
    // convert an async iterator to a value in a synchronous manner
    function toValueSync(val) {
        if (!isIterator(val))
            return val;
        var value;
        var done = false;
        var next = 'next';
        do {
            var state = val[next](value);
            done = state.done;
            value = state.value;
            next = 'next';
            if (isIterator(value)) {
                try {
                    value = toValueSync(value);
                }
                catch (err) {
                    next = 'throw';
                    value = err;
                }
            }
        } while (!done);
        return value;
    }
    var toThenable = toPromise;

    var Expression = /** @class */ (function () {
        function Expression(tokens) {
            this.postfix = __spreadArray([], __read(toPostfix(tokens)), false);
        }
        Expression.prototype.evaluate = function (ctx, lenient) {
            var operands, _a, _b, token, r, l, result, _c, _d, e_1_1;
            var e_1, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        assert(ctx, 'unable to evaluate: context not defined');
                        operands = [];
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, 8, 9, 10]);
                        _a = __values(this.postfix), _b = _a.next();
                        _f.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 7];
                        token = _b.value;
                        if (!isOperatorToken(token)) return [3 /*break*/, 4];
                        r = operands.pop();
                        l = operands.pop();
                        return [4 /*yield*/, evalOperatorToken(ctx.opts.operators, token, l, r, ctx)];
                    case 3:
                        result = _f.sent();
                        operands.push(result);
                        return [3 /*break*/, 6];
                    case 4:
                        _d = (_c = operands).push;
                        return [4 /*yield*/, _evalToken(token, ctx, lenient && this.postfix.length === 1)];
                    case 5:
                        _d.apply(_c, [_f.sent()]);
                        _f.label = 6;
                    case 6:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _f.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/, operands[0]];
                }
            });
        };
        return Expression;
    }());
    /**
     * @deprecated use `_evalToken` instead
     */
    function evalToken(token, ctx, lenient) {
        if (lenient === void 0) { lenient = false; }
        return __generator(this, function (_a) {
            return [2 /*return*/, toValueSync(_evalToken(token, ctx, lenient))];
        });
    }
    function _evalToken(token, ctx, lenient) {
        if (lenient === void 0) { lenient = false; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!isPropertyAccessToken(token)) return [3 /*break*/, 2];
                    return [4 /*yield*/, evalPropertyAccessToken(token, ctx, lenient)];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    if (!isRangeToken(token)) return [3 /*break*/, 4];
                    return [4 /*yield*/, evalRangeToken(token, ctx)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4:
                    if (isLiteralToken(token))
                        return [2 /*return*/, evalLiteralToken(token)];
                    if (isNumberToken(token))
                        return [2 /*return*/, evalNumberToken(token)];
                    if (isWordToken(token))
                        return [2 /*return*/, token.getText()];
                    if (isQuotedToken(token))
                        return [2 /*return*/, evalQuotedToken(token)];
                    return [2 /*return*/];
            }
        });
    }
    function evalPropertyAccessToken(token, ctx, lenient) {
        var props, _a, _b, prop, _c, _d, e_2_1, e_3;
        var e_2, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    props = [];
                    _f.label = 1;
                case 1:
                    _f.trys.push([1, 6, 7, 8]);
                    _a = __values(token.props), _b = _a.next();
                    _f.label = 2;
                case 2:
                    if (!!_b.done) return [3 /*break*/, 5];
                    prop = _b.value;
                    _d = (_c = props).push;
                    return [4 /*yield*/, _evalToken(prop, ctx, false)];
                case 3:
                    _d.apply(_c, [(_f.sent())]);
                    _f.label = 4;
                case 4:
                    _b = _a.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_2_1 = _f.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 8:
                    _f.trys.push([8, 10, , 11]);
                    return [4 /*yield*/, ctx._get(__spreadArray([token.propertyName], __read(props), false))];
                case 9: return [2 /*return*/, _f.sent()];
                case 10:
                    e_3 = _f.sent();
                    if (lenient && e_3.name === 'InternalUndefinedVariableError')
                        return [2 /*return*/, null];
                    throw (new UndefinedVariableError(e_3, token));
                case 11: return [2 /*return*/];
            }
        });
    }
    function evalNumberToken(token) {
        var str = token.whole.content + '.' + (token.decimal ? token.decimal.content : '');
        return Number(str);
    }
    function evalQuotedToken(token) {
        return parseStringLiteral(token.getText());
    }
    function evalOperatorToken(operators, token, lhs, rhs, ctx) {
        var impl = operators[token.operator];
        return impl(lhs, rhs, ctx);
    }
    function evalLiteralToken(token) {
        return literalValues[token.literal];
    }
    function evalRangeToken(token, ctx) {
        var low, high;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _evalToken(token.lhs, ctx)];
                case 1:
                    low = _a.sent();
                    return [4 /*yield*/, _evalToken(token.rhs, ctx)];
                case 2:
                    high = _a.sent();
                    return [2 /*return*/, range(+low, +high + 1)];
            }
        });
    }
    function toPostfix(tokens) {
        var ops, tokens_1, tokens_1_1, token, e_4_1;
        var e_4, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    ops = [];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 10, 11, 12]);
                    tokens_1 = __values(tokens), tokens_1_1 = tokens_1.next();
                    _b.label = 2;
                case 2:
                    if (!!tokens_1_1.done) return [3 /*break*/, 9];
                    token = tokens_1_1.value;
                    if (!isOperatorToken(token)) return [3 /*break*/, 6];
                    _b.label = 3;
                case 3:
                    if (!(ops.length && ops[ops.length - 1].getPrecedence() > token.getPrecedence())) return [3 /*break*/, 5];
                    return [4 /*yield*/, ops.pop()];
                case 4:
                    _b.sent();
                    return [3 /*break*/, 3];
                case 5:
                    ops.push(token);
                    return [3 /*break*/, 8];
                case 6: return [4 /*yield*/, token];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8:
                    tokens_1_1 = tokens_1.next();
                    return [3 /*break*/, 2];
                case 9: return [3 /*break*/, 12];
                case 10:
                    e_4_1 = _b.sent();
                    e_4 = { error: e_4_1 };
                    return [3 /*break*/, 12];
                case 11:
                    try {
                        if (tokens_1_1 && !tokens_1_1.done && (_a = tokens_1.return)) _a.call(tokens_1);
                    }
                    finally { if (e_4) throw e_4.error; }
                    return [7 /*endfinally*/];
                case 12:
                    if (!ops.length) return [3 /*break*/, 14];
                    return [4 /*yield*/, ops.pop()];
                case 13:
                    _b.sent();
                    return [3 /*break*/, 12];
                case 14: return [2 /*return*/];
            }
        });
    }

    var Token = /** @class */ (function () {
        function Token(kind, input, begin, end, file) {
            this.kind = kind;
            this.input = input;
            this.begin = begin;
            this.end = end;
            this.file = file;
        }
        Token.prototype.getText = function () {
            return this.input.slice(this.begin, this.end);
        };
        Token.prototype.getPosition = function () {
            var _a = __read([1, 1], 2), row = _a[0], col = _a[1];
            for (var i = 0; i < this.begin; i++) {
                if (this.input[i] === '\n') {
                    row++;
                    col = 1;
                }
                else
                    col++;
            }
            return [row, col];
        };
        Token.prototype.size = function () {
            return this.end - this.begin;
        };
        return Token;
    }());

    var DelimitedToken = /** @class */ (function (_super) {
        __extends(DelimitedToken, _super);
        function DelimitedToken(kind, content, input, begin, end, trimLeft, trimRight, file) {
            var _this = _super.call(this, kind, input, begin, end, file) || this;
            _this.trimLeft = false;
            _this.trimRight = false;
            _this.content = _this.getText();
            var tl = content[0] === '-';
            var tr = last$1(content) === '-';
            _this.content = content
                .slice(tl ? 1 : 0, tr ? -1 : content.length)
                .trim();
            _this.trimLeft = tl || trimLeft;
            _this.trimRight = tr || trimRight;
            return _this;
        }
        return DelimitedToken;
    }(Token));

    function whiteSpaceCtrl(tokens, options) {
        var inRaw = false;
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (!isDelimitedToken(token))
                continue;
            if (!inRaw && token.trimLeft) {
                trimLeft(tokens[i - 1], options.greedy);
            }
            if (isTagToken(token)) {
                if (token.name === 'raw')
                    inRaw = true;
                else if (token.name === 'endraw')
                    inRaw = false;
            }
            if (!inRaw && token.trimRight) {
                trimRight(tokens[i + 1], options.greedy);
            }
        }
    }
    function trimLeft(token, greedy) {
        if (!token || !isHTMLToken(token))
            return;
        var mask = greedy ? BLANK : INLINE_BLANK;
        while (TYPES[token.input.charCodeAt(token.end - 1 - token.trimRight)] & mask)
            token.trimRight++;
    }
    function trimRight(token, greedy) {
        if (!token || !isHTMLToken(token))
            return;
        var mask = greedy ? BLANK : INLINE_BLANK;
        while (TYPES[token.input.charCodeAt(token.begin + token.trimLeft)] & mask)
            token.trimLeft++;
        if (token.input.charAt(token.begin + token.trimLeft) === '\n')
            token.trimLeft++;
    }

    var NumberToken = /** @class */ (function (_super) {
        __extends(NumberToken, _super);
        function NumberToken(whole, decimal) {
            var _this = _super.call(this, exports.TokenKind.Number, whole.input, whole.begin, decimal ? decimal.end : whole.end, whole.file) || this;
            _this.whole = whole;
            _this.decimal = decimal;
            return _this;
        }
        return NumberToken;
    }(Token));

    var IdentifierToken = /** @class */ (function (_super) {
        __extends(IdentifierToken, _super);
        function IdentifierToken(input, begin, end, file) {
            var _this = _super.call(this, exports.TokenKind.Word, input, begin, end, file) || this;
            _this.input = input;
            _this.begin = begin;
            _this.end = end;
            _this.file = file;
            _this.content = _this.getText();
            return _this;
        }
        IdentifierToken.prototype.isNumber = function (allowSign) {
            if (allowSign === void 0) { allowSign = false; }
            var begin = allowSign && TYPES[this.input.charCodeAt(this.begin)] & SIGN
                ? this.begin + 1
                : this.begin;
            for (var i = begin; i < this.end; i++) {
                if (!(TYPES[this.input.charCodeAt(i)] & NUMBER))
                    return false;
            }
            return true;
        };
        return IdentifierToken;
    }(Token));

    var LiteralToken = /** @class */ (function (_super) {
        __extends(LiteralToken, _super);
        function LiteralToken(input, begin, end, file) {
            var _this = _super.call(this, exports.TokenKind.Literal, input, begin, end, file) || this;
            _this.input = input;
            _this.begin = begin;
            _this.end = end;
            _this.file = file;
            _this.literal = _this.getText();
            return _this;
        }
        return LiteralToken;
    }(Token));

    var precedence = {
        '==': 1,
        '!=': 1,
        '>': 1,
        '<': 1,
        '>=': 1,
        '<=': 1,
        'contains': 1,
        'and': 0,
        'or': 0
    };
    var OperatorToken = /** @class */ (function (_super) {
        __extends(OperatorToken, _super);
        function OperatorToken(input, begin, end, file) {
            var _this = _super.call(this, exports.TokenKind.Operator, input, begin, end, file) || this;
            _this.input = input;
            _this.begin = begin;
            _this.end = end;
            _this.file = file;
            _this.operator = _this.getText();
            return _this;
        }
        OperatorToken.prototype.getPrecedence = function () {
            var key = this.getText();
            return key in precedence ? precedence[key] : 1;
        };
        return OperatorToken;
    }(Token));

    var PropertyAccessToken = /** @class */ (function (_super) {
        __extends(PropertyAccessToken, _super);
        function PropertyAccessToken(variable, props, end) {
            var _this = _super.call(this, exports.TokenKind.PropertyAccess, variable.input, variable.begin, end, variable.file) || this;
            _this.variable = variable;
            _this.props = props;
            _this.propertyName = _this.variable instanceof IdentifierToken
                ? _this.variable.getText()
                : parseStringLiteral(_this.variable.getText());
            return _this;
        }
        return PropertyAccessToken;
    }(Token));

    var FilterToken = /** @class */ (function (_super) {
        __extends(FilterToken, _super);
        function FilterToken(name, args, input, begin, end, file) {
            var _this = _super.call(this, exports.TokenKind.Filter, input, begin, end, file) || this;
            _this.name = name;
            _this.args = args;
            return _this;
        }
        return FilterToken;
    }(Token));

    var HashToken = /** @class */ (function (_super) {
        __extends(HashToken, _super);
        function HashToken(input, begin, end, name, value, file) {
            var _this = _super.call(this, exports.TokenKind.Hash, input, begin, end, file) || this;
            _this.input = input;
            _this.begin = begin;
            _this.end = end;
            _this.name = name;
            _this.value = value;
            _this.file = file;
            return _this;
        }
        return HashToken;
    }(Token));

    var QuotedToken = /** @class */ (function (_super) {
        __extends(QuotedToken, _super);
        function QuotedToken(input, begin, end, file) {
            var _this = _super.call(this, exports.TokenKind.Quoted, input, begin, end, file) || this;
            _this.input = input;
            _this.begin = begin;
            _this.end = end;
            _this.file = file;
            return _this;
        }
        return QuotedToken;
    }(Token));

    var HTMLToken = /** @class */ (function (_super) {
        __extends(HTMLToken, _super);
        function HTMLToken(input, begin, end, file) {
            var _this = _super.call(this, exports.TokenKind.HTML, input, begin, end, file) || this;
            _this.input = input;
            _this.begin = begin;
            _this.end = end;
            _this.file = file;
            _this.trimLeft = 0;
            _this.trimRight = 0;
            return _this;
        }
        HTMLToken.prototype.getContent = function () {
            return this.input.slice(this.begin + this.trimLeft, this.end - this.trimRight);
        };
        return HTMLToken;
    }(Token));

    var RangeToken = /** @class */ (function (_super) {
        __extends(RangeToken, _super);
        function RangeToken(input, begin, end, lhs, rhs, file) {
            var _this = _super.call(this, exports.TokenKind.Range, input, begin, end, file) || this;
            _this.input = input;
            _this.begin = begin;
            _this.end = end;
            _this.lhs = lhs;
            _this.rhs = rhs;
            _this.file = file;
            return _this;
        }
        return RangeToken;
    }(Token));

    var OutputToken = /** @class */ (function (_super) {
        __extends(OutputToken, _super);
        function OutputToken(input, begin, end, options, file) {
            var _this = this;
            var trimOutputLeft = options.trimOutputLeft, trimOutputRight = options.trimOutputRight, outputDelimiterLeft = options.outputDelimiterLeft, outputDelimiterRight = options.outputDelimiterRight;
            var value = input.slice(begin + outputDelimiterLeft.length, end - outputDelimiterRight.length);
            _this = _super.call(this, exports.TokenKind.Output, value, input, begin, end, trimOutputLeft, trimOutputRight, file) || this;
            return _this;
        }
        return OutputToken;
    }(DelimitedToken));

    function matchOperator(str, begin, trie, end) {
        if (end === void 0) { end = str.length; }
        var node = trie;
        var i = begin;
        var info;
        while (node[str[i]] && i < end) {
            node = node[str[i++]];
            if (node['end'])
                info = node;
        }
        if (!info)
            return -1;
        if (info['needBoundary'] && (TYPES[str.charCodeAt(i)] & IDENTIFIER))
            return -1;
        return i;
    }

    var LiquidTagToken = /** @class */ (function (_super) {
        __extends(LiquidTagToken, _super);
        function LiquidTagToken(input, begin, end, options, file) {
            var _this = this;
            var value = input.slice(begin, end);
            _this = _super.call(this, exports.TokenKind.Tag, value, input, begin, end, false, false, file) || this;
            if (!/\S/.test(value)) {
                // A line that contains only whitespace.
                _this.name = '';
                _this.args = '';
            }
            else {
                var tokenizer = new Tokenizer(_this.content, options.operatorsTrie);
                _this.name = tokenizer.readTagName();
                if (!_this.name)
                    throw new TokenizationError("illegal liquid tag syntax", _this);
                tokenizer.skipBlank();
                _this.args = tokenizer.remaining();
            }
            return _this;
        }
        return LiquidTagToken;
    }(DelimitedToken));

    var Tokenizer = /** @class */ (function () {
        function Tokenizer(input, trie, file) {
            if (trie === void 0) { trie = defaultOptions.operatorsTrie; }
            if (file === void 0) { file = ''; }
            this.input = input;
            this.trie = trie;
            this.file = file;
            this.p = 0;
            this.rawBeginAt = -1;
            this.N = input.length;
        }
        Tokenizer.prototype.readExpression = function () {
            return new Expression(this.readExpressionTokens());
        };
        Tokenizer.prototype.readExpressionTokens = function () {
            var operand, operator, operand_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        operand = this.readValue();
                        if (!operand)
                            return [2 /*return*/];
                        return [4 /*yield*/, operand];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!(this.p < this.N)) return [3 /*break*/, 5];
                        operator = this.readOperator();
                        if (!operator)
                            return [2 /*return*/];
                        operand_1 = this.readValue();
                        if (!operand_1)
                            return [2 /*return*/];
                        return [4 /*yield*/, operator];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, operand_1];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        };
        Tokenizer.prototype.readOperator = function () {
            this.skipBlank();
            var end = matchOperator(this.input, this.p, this.trie);
            if (end === -1)
                return;
            return new OperatorToken(this.input, this.p, (this.p = end), this.file);
        };
        Tokenizer.prototype.readFilters = function () {
            var filters = [];
            while (true) {
                var filter = this.readFilter();
                if (!filter)
                    return filters;
                filters.push(filter);
            }
        };
        Tokenizer.prototype.readFilter = function () {
            var _this = this;
            this.skipBlank();
            if (this.end())
                return null;
            assert(this.peek() === '|', function () { return "unexpected token at ".concat(_this.snapshot()); });
            this.p++;
            var begin = this.p;
            var name = this.readIdentifier();
            if (!name.size())
                return null;
            var args = [];
            this.skipBlank();
            if (this.peek() === ':') {
                do {
                    ++this.p;
                    var arg = this.readFilterArg();
                    arg && args.push(arg);
                    this.skipBlank();
                    assert(this.end() || this.peek() === ',' || this.peek() === '|', function () { return "unexpected character ".concat(_this.snapshot()); });
                } while (this.peek() === ',');
            }
            return new FilterToken(name.getText(), args, this.input, begin, this.p, this.file);
        };
        Tokenizer.prototype.readFilterArg = function () {
            var key = this.readValue();
            if (!key)
                return;
            this.skipBlank();
            if (this.peek() !== ':')
                return key;
            ++this.p;
            var value = this.readValue();
            return [key.getText(), value];
        };
        Tokenizer.prototype.readTopLevelTokens = function (options) {
            if (options === void 0) { options = defaultOptions; }
            var tokens = [];
            while (this.p < this.N) {
                var token = this.readTopLevelToken(options);
                tokens.push(token);
            }
            whiteSpaceCtrl(tokens, options);
            return tokens;
        };
        Tokenizer.prototype.readTopLevelToken = function (options) {
            var tagDelimiterLeft = options.tagDelimiterLeft, outputDelimiterLeft = options.outputDelimiterLeft;
            if (this.rawBeginAt > -1)
                return this.readEndrawOrRawContent(options);
            if (this.match(tagDelimiterLeft))
                return this.readTagToken(options);
            if (this.match(outputDelimiterLeft))
                return this.readOutputToken(options);
            return this.readHTMLToken([tagDelimiterLeft, outputDelimiterLeft]);
        };
        Tokenizer.prototype.readHTMLToken = function (stopStrings) {
            var _this = this;
            var begin = this.p;
            while (this.p < this.N) {
                if (stopStrings.some(function (str) { return _this.match(str); }))
                    break;
                ++this.p;
            }
            return new HTMLToken(this.input, begin, this.p, this.file);
        };
        Tokenizer.prototype.readTagToken = function (options) {
            if (options === void 0) { options = defaultOptions; }
            var _a = this, file = _a.file, input = _a.input;
            var begin = this.p;
            if (this.readToDelimiter(options.tagDelimiterRight) === -1) {
                throw this.mkError("tag ".concat(this.snapshot(begin), " not closed"), begin);
            }
            var token = new TagToken(input, begin, this.p, options, file);
            if (token.name === 'raw')
                this.rawBeginAt = begin;
            return token;
        };
        Tokenizer.prototype.readToDelimiter = function (delimiter) {
            while (this.p < this.N) {
                if ((this.peekType() & QUOTE)) {
                    this.readQuoted();
                    continue;
                }
                ++this.p;
                if (this.rmatch(delimiter))
                    return this.p;
            }
            return -1;
        };
        Tokenizer.prototype.readOutputToken = function (options) {
            if (options === void 0) { options = defaultOptions; }
            var _a = this, file = _a.file, input = _a.input;
            var outputDelimiterRight = options.outputDelimiterRight;
            var begin = this.p;
            if (this.readToDelimiter(outputDelimiterRight) === -1) {
                throw this.mkError("output ".concat(this.snapshot(begin), " not closed"), begin);
            }
            return new OutputToken(input, begin, this.p, options, file);
        };
        Tokenizer.prototype.readEndrawOrRawContent = function (options) {
            var tagDelimiterLeft = options.tagDelimiterLeft, tagDelimiterRight = options.tagDelimiterRight;
            var begin = this.p;
            var leftPos = this.readTo(tagDelimiterLeft) - tagDelimiterLeft.length;
            while (this.p < this.N) {
                if (this.readIdentifier().getText() !== 'endraw') {
                    leftPos = this.readTo(tagDelimiterLeft) - tagDelimiterLeft.length;
                    continue;
                }
                while (this.p <= this.N) {
                    if (this.rmatch(tagDelimiterRight)) {
                        var end = this.p;
                        if (begin === leftPos) {
                            this.rawBeginAt = -1;
                            return new TagToken(this.input, begin, end, options, this.file);
                        }
                        else {
                            this.p = leftPos;
                            return new HTMLToken(this.input, begin, leftPos, this.file);
                        }
                    }
                    if (this.rmatch(tagDelimiterLeft))
                        break;
                    this.p++;
                }
            }
            throw this.mkError("raw ".concat(this.snapshot(this.rawBeginAt), " not closed"), begin);
        };
        Tokenizer.prototype.readLiquidTagTokens = function (options) {
            if (options === void 0) { options = defaultOptions; }
            var tokens = [];
            while (this.p < this.N) {
                var token = this.readLiquidTagToken(options);
                if (token.name)
                    tokens.push(token);
            }
            return tokens;
        };
        Tokenizer.prototype.readLiquidTagToken = function (options) {
            var _a = this, file = _a.file, input = _a.input;
            var begin = this.p;
            var end = this.N;
            if (this.readToDelimiter('\n') !== -1)
                end = this.p;
            return new LiquidTagToken(input, begin, end, options, file);
        };
        Tokenizer.prototype.mkError = function (msg, begin) {
            return new TokenizationError(msg, new IdentifierToken(this.input, begin, this.N, this.file));
        };
        Tokenizer.prototype.snapshot = function (begin) {
            if (begin === void 0) { begin = this.p; }
            return JSON.stringify(ellipsis(this.input.slice(begin), 16));
        };
        /**
         * @deprecated
         */
        Tokenizer.prototype.readWord = function () {
            console.warn('Tokenizer#readWord() will be removed, use #readIdentifier instead');
            return this.readIdentifier();
        };
        Tokenizer.prototype.readIdentifier = function () {
            this.skipBlank();
            var begin = this.p;
            while (this.peekType() & IDENTIFIER)
                ++this.p;
            return new IdentifierToken(this.input, begin, this.p, this.file);
        };
        Tokenizer.prototype.readTagName = function () {
            this.skipBlank();
            // Handle inline comment tags
            if (this.input[this.p] === '#')
                return this.input.slice(this.p, ++this.p);
            return this.readIdentifier().getText();
        };
        Tokenizer.prototype.readHashes = function (jekyllStyle) {
            var hashes = [];
            while (true) {
                var hash = this.readHash(jekyllStyle);
                if (!hash)
                    return hashes;
                hashes.push(hash);
            }
        };
        Tokenizer.prototype.readHash = function (jekyllStyle) {
            this.skipBlank();
            if (this.peek() === ',')
                ++this.p;
            var begin = this.p;
            var name = this.readIdentifier();
            if (!name.size())
                return;
            var value;
            this.skipBlank();
            var sep = jekyllStyle ? '=' : ':';
            if (this.peek() === sep) {
                ++this.p;
                value = this.readValue();
            }
            return new HashToken(this.input, begin, this.p, name, value, this.file);
        };
        Tokenizer.prototype.remaining = function () {
            return this.input.slice(this.p);
        };
        Tokenizer.prototype.advance = function (i) {
            if (i === void 0) { i = 1; }
            this.p += i;
        };
        Tokenizer.prototype.end = function () {
            return this.p >= this.N;
        };
        Tokenizer.prototype.readTo = function (end) {
            while (this.p < this.N) {
                ++this.p;
                if (this.rmatch(end))
                    return this.p;
            }
            return -1;
        };
        Tokenizer.prototype.readValue = function () {
            var value = this.readQuoted() || this.readRange();
            if (value)
                return value;
            if (this.peek() === '[') {
                this.p++;
                var prop = this.readQuoted();
                if (!prop)
                    return;
                if (this.peek() !== ']')
                    return;
                this.p++;
                return new PropertyAccessToken(prop, [], this.p);
            }
            var variable = this.readIdentifier();
            if (!variable.size())
                return;
            var isNumber = variable.isNumber(true);
            var props = [];
            while (true) {
                if (this.peek() === '[') {
                    isNumber = false;
                    this.p++;
                    var prop = this.readValue() || new IdentifierToken(this.input, this.p, this.p, this.file);
                    this.readTo(']');
                    props.push(prop);
                }
                else if (this.peek() === '.' && this.peek(1) !== '.') { // skip range syntax
                    this.p++;
                    var prop = this.readIdentifier();
                    if (!prop.size())
                        break;
                    if (!prop.isNumber())
                        isNumber = false;
                    props.push(prop);
                }
                else
                    break;
            }
            if (!props.length && literalValues.hasOwnProperty(variable.content)) {
                return new LiteralToken(this.input, variable.begin, variable.end, this.file);
            }
            if (isNumber)
                return new NumberToken(variable, props[0]);
            return new PropertyAccessToken(variable, props, this.p);
        };
        Tokenizer.prototype.readRange = function () {
            this.skipBlank();
            var begin = this.p;
            if (this.peek() !== '(')
                return;
            ++this.p;
            var lhs = this.readValueOrThrow();
            this.p += 2;
            var rhs = this.readValueOrThrow();
            ++this.p;
            return new RangeToken(this.input, begin, this.p, lhs, rhs, this.file);
        };
        Tokenizer.prototype.readValueOrThrow = function () {
            var _this = this;
            var value = this.readValue();
            assert(value, function () { return "unexpected token ".concat(_this.snapshot(), ", value expected"); });
            return value;
        };
        Tokenizer.prototype.readQuoted = function () {
            this.skipBlank();
            var begin = this.p;
            if (!(this.peekType() & QUOTE))
                return;
            ++this.p;
            var escaped = false;
            while (this.p < this.N) {
                ++this.p;
                if (this.input[this.p - 1] === this.input[begin] && !escaped)
                    break;
                if (escaped)
                    escaped = false;
                else if (this.input[this.p - 1] === '\\')
                    escaped = true;
            }
            return new QuotedToken(this.input, begin, this.p, this.file);
        };
        Tokenizer.prototype.readFileNameTemplate = function (options) {
            var outputDelimiterLeft, htmlStopStrings, htmlStopStringSet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        outputDelimiterLeft = options.outputDelimiterLeft;
                        htmlStopStrings = [',', ' ', outputDelimiterLeft];
                        htmlStopStringSet = new Set(htmlStopStrings);
                        _a.label = 1;
                    case 1:
                        if (!(this.p < this.N && !htmlStopStringSet.has(this.peek()))) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.match(outputDelimiterLeft)
                                ? this.readOutputToken(options)
                                : this.readHTMLToken(htmlStopStrings)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        };
        Tokenizer.prototype.match = function (word) {
            for (var i = 0; i < word.length; i++) {
                if (word[i] !== this.input[this.p + i])
                    return false;
            }
            return true;
        };
        Tokenizer.prototype.rmatch = function (pattern) {
            for (var i = 0; i < pattern.length; i++) {
                if (pattern[pattern.length - 1 - i] !== this.input[this.p - 1 - i])
                    return false;
            }
            return true;
        };
        Tokenizer.prototype.peekType = function (n) {
            if (n === void 0) { n = 0; }
            return TYPES[this.input.charCodeAt(this.p + n)];
        };
        Tokenizer.prototype.peek = function (n) {
            if (n === void 0) { n = 0; }
            return this.input[this.p + n];
        };
        Tokenizer.prototype.skipBlank = function () {
            while (this.peekType() & BLANK)
                ++this.p;
        };
        return Tokenizer;
    }());

    var TagToken = /** @class */ (function (_super) {
        __extends(TagToken, _super);
        function TagToken(input, begin, end, options, file) {
            var _this = this;
            var trimTagLeft = options.trimTagLeft, trimTagRight = options.trimTagRight, tagDelimiterLeft = options.tagDelimiterLeft, tagDelimiterRight = options.tagDelimiterRight;
            var value = input.slice(begin + tagDelimiterLeft.length, end - tagDelimiterRight.length);
            _this = _super.call(this, exports.TokenKind.Tag, value, input, begin, end, trimTagLeft, trimTagRight, file) || this;
            var tokenizer = new Tokenizer(_this.content, options.operatorsTrie);
            _this.name = tokenizer.readTagName();
            if (!_this.name)
                throw new TokenizationError("illegal tag syntax", _this);
            tokenizer.skipBlank();
            _this.args = tokenizer.remaining();
            return _this;
        }
        return TagToken;
    }(DelimitedToken));

    var ParseStream = /** @class */ (function () {
        function ParseStream(tokens, parseToken) {
            this.handlers = {};
            this.stopRequested = false;
            this.tokens = tokens;
            this.parseToken = parseToken;
        }
        ParseStream.prototype.on = function (name, cb) {
            this.handlers[name] = cb;
            return this;
        };
        ParseStream.prototype.trigger = function (event, arg) {
            var h = this.handlers[event];
            return h ? (h.call(this, arg), true) : false;
        };
        ParseStream.prototype.start = function () {
            this.trigger('start');
            var token;
            while (!this.stopRequested && (token = this.tokens.shift())) {
                if (this.trigger('token', token))
                    continue;
                if (isTagToken(token) && this.trigger("tag:".concat(token.name), token)) {
                    continue;
                }
                var template = this.parseToken(token, this.tokens);
                this.trigger('template', template);
            }
            if (!this.stopRequested)
                this.trigger('end');
            return this;
        };
        ParseStream.prototype.stop = function () {
            this.stopRequested = true;
            return this;
        };
        return ParseStream;
    }());

    /**
     * Key-Value Pairs Representing Tag Arguments
     * Example:
     *    For the markup `, foo:'bar', coo:2 reversed %}`,
     *    hash['foo'] === 'bar'
     *    hash['coo'] === 2
     *    hash['reversed'] === undefined
     */
    var Hash = /** @class */ (function () {
        function Hash(markup, jekyllStyle) {
            var e_1, _a;
            this.hash = {};
            var tokenizer = new Tokenizer(markup, {});
            try {
                for (var _b = __values(tokenizer.readHashes(jekyllStyle)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var hash = _c.value;
                    this.hash[hash.name.content] = hash.value;
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        Hash.prototype.render = function (ctx) {
            var hash, _a, _b, key, _c, _d, _e, e_2_1;
            var e_2, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        hash = {};
                        _g.label = 1;
                    case 1:
                        _g.trys.push([1, 8, 9, 10]);
                        _a = __values(Object.keys(this.hash)), _b = _a.next();
                        _g.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 7];
                        key = _b.value;
                        _c = hash;
                        _d = key;
                        if (!(this.hash[key] === undefined)) return [3 /*break*/, 3];
                        _e = true;
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, _evalToken(this.hash[key], ctx)];
                    case 4:
                        _e = _g.sent();
                        _g.label = 5;
                    case 5:
                        _c[_d] = _e;
                        _g.label = 6;
                    case 6:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_2_1 = _g.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (_b && !_b.done && (_f = _a.return)) _f.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/, hash];
                }
            });
        };
        return Hash;
    }());

    function isKeyValuePair(arr) {
        return isArray(arr);
    }

    var Filter = /** @class */ (function () {
        function Filter(name, impl, args, liquid) {
            this.name = name;
            this.impl = impl || identify;
            this.args = args;
            this.liquid = liquid;
        }
        Filter.prototype.render = function (value, context) {
            var argv, _a, _b, arg, _c, _d, _e, _f, _g, e_1_1;
            var e_1, _h;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        argv = [];
                        _j.label = 1;
                    case 1:
                        _j.trys.push([1, 8, 9, 10]);
                        _a = __values(this.args), _b = _a.next();
                        _j.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 7];
                        arg = _b.value;
                        if (!isKeyValuePair(arg)) return [3 /*break*/, 4];
                        _d = (_c = argv).push;
                        _e = [arg[0]];
                        return [4 /*yield*/, _evalToken(arg[1], context)];
                    case 3:
                        _d.apply(_c, [_e.concat([_j.sent()])]);
                        return [3 /*break*/, 6];
                    case 4:
                        _g = (_f = argv).push;
                        return [4 /*yield*/, _evalToken(arg, context)];
                    case 5:
                        _g.apply(_f, [_j.sent()]);
                        _j.label = 6;
                    case 6:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _j.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (_b && !_b.done && (_h = _a.return)) _h.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/, this.impl.apply({ context: context, liquid: this.liquid }, __spreadArray([value], __read(argv), false))];
                }
            });
        };
        return Filter;
    }());

    var Value = /** @class */ (function () {
        /**
         * @param str the value to be valuated, eg.: "foobar" | truncate: 3
         */
        function Value(str, liquid) {
            this.filters = [];
            var tokenizer = new Tokenizer(str, liquid.options.operatorsTrie);
            this.initial = tokenizer.readExpression();
            this.filters = tokenizer.readFilters().map(function (_a) {
                var name = _a.name, args = _a.args;
                return new Filter(name, liquid.filters.get(name), args, liquid);
            });
        }
        Value.prototype.value = function (ctx, lenient) {
            var val, _a, _b, filter, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        lenient = lenient || (ctx.opts.lenientIf && this.filters.length > 0 && this.filters[0].name === 'default');
                        return [4 /*yield*/, this.initial.evaluate(ctx, lenient)];
                    case 1:
                        val = _d.sent();
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 7, 8, 9]);
                        _a = __values(this.filters), _b = _a.next();
                        _d.label = 3;
                    case 3:
                        if (!!_b.done) return [3 /*break*/, 6];
                        filter = _b.value;
                        return [4 /*yield*/, filter.render(val, ctx)];
                    case 4:
                        val = _d.sent();
                        _d.label = 5;
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/, val];
                }
            });
        };
        return Value;
    }());

    var assign = {
        parse: function (token) {
            var tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
            this.key = tokenizer.readIdentifier().content;
            tokenizer.skipBlank();
            assert(tokenizer.peek() === '=', function () { return "illegal token ".concat(token.getText()); });
            tokenizer.advance();
            this.value = new Value(tokenizer.remaining(), this.liquid);
        },
        render: function (ctx) {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = ctx.bottom();
                        _b = this.key;
                        return [4 /*yield*/, this.value.value(ctx, this.liquid.options.lenientIf)];
                    case 1:
                        _a[_b] = _c.sent();
                        return [2 /*return*/];
                }
            });
        }
    };

    var ForloopDrop = /** @class */ (function (_super) {
        __extends(ForloopDrop, _super);
        function ForloopDrop(length, collection, variable) {
            var _this = _super.call(this) || this;
            _this.i = 0;
            _this.length = length;
            _this.name = "".concat(variable, "-").concat(collection);
            return _this;
        }
        ForloopDrop.prototype.next = function () {
            this.i++;
        };
        ForloopDrop.prototype.index0 = function () {
            return this.i;
        };
        ForloopDrop.prototype.index = function () {
            return this.i + 1;
        };
        ForloopDrop.prototype.first = function () {
            return this.i === 0;
        };
        ForloopDrop.prototype.last = function () {
            return this.i === this.length - 1;
        };
        ForloopDrop.prototype.rindex = function () {
            return this.length - this.i;
        };
        ForloopDrop.prototype.rindex0 = function () {
            return this.length - this.i - 1;
        };
        ForloopDrop.prototype.valueOf = function () {
            return JSON.stringify(this);
        };
        return ForloopDrop;
    }(Drop));

    var MODIFIERS = ['offset', 'limit', 'reversed'];
    var For = {
        type: 'block',
        parse: function (token, remainTokens) {
            var _this = this;
            var tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
            var variable = tokenizer.readIdentifier();
            var inStr = tokenizer.readIdentifier();
            var collection = tokenizer.readValue();
            assert(variable.size() && inStr.content === 'in' && collection, function () { return "illegal tag: ".concat(token.getText()); });
            this.variable = variable.content;
            this.collection = collection;
            this.hash = new Hash(tokenizer.remaining());
            this.templates = [];
            this.elseTemplates = [];
            var p;
            var stream = this.liquid.parser.parseStream(remainTokens)
                .on('start', function () { return (p = _this.templates); })
                .on('tag:else', function () { return (p = _this.elseTemplates); })
                .on('tag:endfor', function () { return stream.stop(); })
                .on('template', function (tpl) { return p.push(tpl); })
                .on('end', function () {
                throw new Error("tag ".concat(token.getText(), " not closed"));
            });
            stream.start();
        },
        render: function (ctx, emitter) {
            var r, collection, _a, continueKey, hash, modifiers, scope, collection_1, collection_1_1, item, e_1_1;
            var e_1, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        r = this.liquid.renderer;
                        _a = toEnumerable;
                        return [4 /*yield*/, _evalToken(this.collection, ctx)];
                    case 1:
                        collection = _a.apply(void 0, [_c.sent()]);
                        if (!!collection.length) return [3 /*break*/, 3];
                        return [4 /*yield*/, r.renderTemplates(this.elseTemplates, ctx, emitter)];
                    case 2:
                        _c.sent();
                        return [2 /*return*/];
                    case 3:
                        continueKey = 'continue-' + this.variable + '-' + this.collection.getText();
                        ctx.push({ continue: ctx.getRegister(continueKey) });
                        return [4 /*yield*/, this.hash.render(ctx)];
                    case 4:
                        hash = _c.sent();
                        ctx.pop();
                        modifiers = this.liquid.options.orderedFilterParameters
                            ? Object.keys(hash).filter(function (x) { return MODIFIERS.includes(x); })
                            : MODIFIERS.filter(function (x) { return hash[x] !== undefined; });
                        collection = modifiers.reduce(function (collection, modifier) {
                            if (modifier === 'offset')
                                return offset(collection, hash['offset']);
                            if (modifier === 'limit')
                                return limit(collection, hash['limit']);
                            return reversed(collection);
                        }, collection);
                        ctx.setRegister(continueKey, (hash['offset'] || 0) + collection.length);
                        scope = { forloop: new ForloopDrop(collection.length, this.collection.getText(), this.variable) };
                        ctx.push(scope);
                        _c.label = 5;
                    case 5:
                        _c.trys.push([5, 10, 11, 12]);
                        collection_1 = __values(collection), collection_1_1 = collection_1.next();
                        _c.label = 6;
                    case 6:
                        if (!!collection_1_1.done) return [3 /*break*/, 9];
                        item = collection_1_1.value;
                        scope[this.variable] = item;
                        return [4 /*yield*/, r.renderTemplates(this.templates, ctx, emitter)];
                    case 7:
                        _c.sent();
                        if (emitter['break']) {
                            emitter['break'] = false;
                            return [3 /*break*/, 9];
                        }
                        emitter['continue'] = false;
                        scope.forloop.next();
                        _c.label = 8;
                    case 8:
                        collection_1_1 = collection_1.next();
                        return [3 /*break*/, 6];
                    case 9: return [3 /*break*/, 12];
                    case 10:
                        e_1_1 = _c.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 12];
                    case 11:
                        try {
                            if (collection_1_1 && !collection_1_1.done && (_b = collection_1.return)) _b.call(collection_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 12:
                        ctx.pop();
                        return [2 /*return*/];
                }
            });
        }
    };
    function reversed(arr) {
        return __spreadArray([], __read(arr), false).reverse();
    }
    function offset(arr, count) {
        return arr.slice(count);
    }
    function limit(arr, count) {
        return arr.slice(0, count);
    }

    var capture = {
        parse: function (tagToken, remainTokens) {
            var _this = this;
            var tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
            this.variable = readVariableName(tokenizer);
            assert(this.variable, function () { return "".concat(tagToken.args, " not valid identifier"); });
            this.templates = [];
            var stream = this.liquid.parser.parseStream(remainTokens);
            stream.on('tag:endcapture', function () { return stream.stop(); })
                .on('template', function (tpl) { return _this.templates.push(tpl); })
                .on('end', function () {
                throw new Error("tag ".concat(tagToken.getText(), " not closed"));
            });
            stream.start();
        },
        render: function (ctx) {
            var r, html;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        r = this.liquid.renderer;
                        return [4 /*yield*/, r.renderTemplates(this.templates, ctx)];
                    case 1:
                        html = _a.sent();
                        ctx.bottom()[this.variable] = html;
                        return [2 /*return*/];
                }
            });
        }
    };
    function readVariableName(tokenizer) {
        var word = tokenizer.readIdentifier().content;
        if (word)
            return word;
        var quoted = tokenizer.readQuoted();
        if (quoted)
            return evalQuotedToken(quoted);
    }

    var Case = {
        parse: function (tagToken, remainTokens) {
            var _this = this;
            this.cond = new Value(tagToken.args, this.liquid);
            this.cases = [];
            this.elseTemplates = [];
            var p = [];
            var stream = this.liquid.parser.parseStream(remainTokens)
                .on('tag:when', function (token) {
                p = [];
                var tokenizer = new Tokenizer(token.args, _this.liquid.options.operatorsTrie);
                while (!tokenizer.end()) {
                    var value = tokenizer.readValue();
                    _this.cases.push({
                        val: value,
                        templates: p
                    });
                    tokenizer.readTo(',');
                }
            })
                .on('tag:else', function () { return (p = _this.elseTemplates); })
                .on('tag:endcase', function () { return stream.stop(); })
                .on('template', function (tpl) { return p.push(tpl); })
                .on('end', function () {
                throw new Error("tag ".concat(tagToken.getText(), " not closed"));
            });
            stream.start();
        },
        render: function (ctx, emitter) {
            var r, cond, _a, _b, _c, branch, val, e_1_1;
            var e_1, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        r = this.liquid.renderer;
                        _a = toValue;
                        return [4 /*yield*/, this.cond.value(ctx, ctx.opts.lenientIf)];
                    case 1:
                        cond = _a.apply(void 0, [_e.sent()]);
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 8, 9, 10]);
                        _b = __values(this.cases), _c = _b.next();
                        _e.label = 3;
                    case 3:
                        if (!!_c.done) return [3 /*break*/, 7];
                        branch = _c.value;
                        return [4 /*yield*/, _evalToken(branch.val, ctx, ctx.opts.lenientIf)];
                    case 4:
                        val = _e.sent();
                        if (!(val === cond)) return [3 /*break*/, 6];
                        return [4 /*yield*/, r.renderTemplates(branch.templates, ctx, emitter)];
                    case 5:
                        _e.sent();
                        return [2 /*return*/];
                    case 6:
                        _c = _b.next();
                        return [3 /*break*/, 3];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 10: return [4 /*yield*/, r.renderTemplates(this.elseTemplates, ctx, emitter)];
                    case 11:
                        _e.sent();
                        return [2 /*return*/];
                }
            });
        }
    };

    var comment = {
        parse: function (tagToken, remainTokens) {
            var stream = this.liquid.parser.parseStream(remainTokens);
            stream
                .on('token', function (token) {
                if (token.name === 'endcomment')
                    stream.stop();
            })
                .on('end', function () {
                throw new Error("tag ".concat(tagToken.getText(), " not closed"));
            });
            stream.start();
        }
    };

    var BlockMode;
    (function (BlockMode) {
        /* store rendered html into blocks */
        BlockMode[BlockMode["OUTPUT"] = 0] = "OUTPUT";
        /* output rendered html directly */
        BlockMode[BlockMode["STORE"] = 1] = "STORE";
    })(BlockMode || (BlockMode = {}));
    var BlockMode$1 = BlockMode;

    var render = {
        parseFilePath: parseFilePath,
        renderFilePath: renderFilePath,
        parse: function (token) {
            var args = token.args;
            var tokenizer = new Tokenizer(args, this.liquid.options.operatorsTrie);
            this['file'] = this.parseFilePath(tokenizer, this.liquid);
            this['currentFile'] = token.file;
            while (!tokenizer.end()) {
                tokenizer.skipBlank();
                var begin = tokenizer.p;
                var keyword = tokenizer.readIdentifier();
                if (keyword.content === 'with' || keyword.content === 'for') {
                    tokenizer.skipBlank();
                    // can be normal key/value pair, like "with: true"
                    if (tokenizer.peek() !== ':') {
                        var value = tokenizer.readValue();
                        // can be normal key, like "with,"
                        if (value) {
                            var beforeAs = tokenizer.p;
                            var asStr = tokenizer.readIdentifier();
                            var alias = void 0;
                            if (asStr.content === 'as')
                                alias = tokenizer.readIdentifier();
                            else
                                tokenizer.p = beforeAs;
                            this[keyword.content] = { value: value, alias: alias && alias.content };
                            tokenizer.skipBlank();
                            if (tokenizer.peek() === ',')
                                tokenizer.advance();
                            // matched!
                            continue;
                        }
                    }
                }
                /**
                 * restore cursor if with/for not matched
                 */
                tokenizer.p = begin;
                break;
            }
            this.hash = new Hash(tokenizer.remaining());
        },
        render: function (ctx, emitter) {
            var _a, liquid, hash, filepath, childCtx, scope, _b, _c, _d, value, alias, _e, _f, _g, value, alias, collection, collection_1, collection_1_1, item, templates, e_1_1, templates;
            var e_1, _h;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        _a = this, liquid = _a.liquid, hash = _a.hash;
                        return [4 /*yield*/, this.renderFilePath(this['file'], ctx, liquid)];
                    case 1:
                        filepath = _j.sent();
                        assert(filepath, function () { return "illegal filename \"".concat(filepath, "\""); });
                        childCtx = new Context({}, ctx.opts, { sync: ctx.sync, globals: ctx.globals, strictVariables: ctx.strictVariables });
                        scope = childCtx.bottom();
                        _b = __assign;
                        _c = [scope];
                        return [4 /*yield*/, hash.render(ctx)];
                    case 2:
                        _b.apply(void 0, _c.concat([_j.sent()]));
                        if (!this['with']) return [3 /*break*/, 4];
                        _d = this['with'], value = _d.value, alias = _d.alias;
                        _e = scope;
                        _f = alias || filepath;
                        return [4 /*yield*/, _evalToken(value, ctx)];
                    case 3:
                        _e[_f] = _j.sent();
                        _j.label = 4;
                    case 4:
                        if (!this['for']) return [3 /*break*/, 15];
                        _g = this['for'], value = _g.value, alias = _g.alias;
                        return [4 /*yield*/, _evalToken(value, ctx)];
                    case 5:
                        collection = _j.sent();
                        collection = toEnumerable(collection);
                        scope['forloop'] = new ForloopDrop(collection.length, value.getText(), alias);
                        _j.label = 6;
                    case 6:
                        _j.trys.push([6, 12, 13, 14]);
                        collection_1 = __values(collection), collection_1_1 = collection_1.next();
                        _j.label = 7;
                    case 7:
                        if (!!collection_1_1.done) return [3 /*break*/, 11];
                        item = collection_1_1.value;
                        scope[alias] = item;
                        return [4 /*yield*/, liquid._parsePartialFile(filepath, childCtx.sync, this['currentFile'])];
                    case 8:
                        templates = _j.sent();
                        return [4 /*yield*/, liquid.renderer.renderTemplates(templates, childCtx, emitter)];
                    case 9:
                        _j.sent();
                        scope['forloop'].next();
                        _j.label = 10;
                    case 10:
                        collection_1_1 = collection_1.next();
                        return [3 /*break*/, 7];
                    case 11: return [3 /*break*/, 14];
                    case 12:
                        e_1_1 = _j.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 14];
                    case 13:
                        try {
                            if (collection_1_1 && !collection_1_1.done && (_h = collection_1.return)) _h.call(collection_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 14: return [3 /*break*/, 18];
                    case 15: return [4 /*yield*/, liquid._parsePartialFile(filepath, childCtx.sync, this['currentFile'])];
                    case 16:
                        templates = _j.sent();
                        return [4 /*yield*/, liquid.renderer.renderTemplates(templates, childCtx, emitter)];
                    case 17:
                        _j.sent();
                        _j.label = 18;
                    case 18: return [2 /*return*/];
                }
            });
        }
    };
    /**
     * @return null for "none",
     * @return Template[] for quoted with tags and/or filters
     * @return Token for expression (not quoted)
     * @throws TypeError if cannot read next token
     */
    function parseFilePath(tokenizer, liquid) {
        if (liquid.options.dynamicPartials) {
            var file = tokenizer.readValue();
            if (file === undefined)
                throw new TypeError("illegal argument \"".concat(tokenizer.input, "\""));
            if (file.getText() === 'none')
                return null;
            if (isQuotedToken(file)) {
                // for filenames like "files/{{file}}", eval as liquid template
                var templates_1 = liquid.parse(evalQuotedToken(file));
                return optimize(templates_1);
            }
            return file;
        }
        var tokens = __spreadArray([], __read(tokenizer.readFileNameTemplate(liquid.options)), false);
        var templates = optimize(liquid.parser.parseTokens(tokens));
        return templates === 'none' ? null : templates;
    }
    function optimize(templates) {
        // for filenames like "files/file.liquid", extract the string directly
        if (templates.length === 1 && isHTMLToken(templates[0].token))
            return templates[0].token.getContent();
        return templates;
    }
    function renderFilePath(file, ctx, liquid) {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (typeof file === 'string')
                        return [2 /*return*/, file];
                    if (Array.isArray(file))
                        return [2 /*return*/, liquid.renderer.renderTemplates(file, ctx)];
                    return [4 /*yield*/, _evalToken(file, ctx)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    }

    var include = {
        parseFilePath: parseFilePath,
        renderFilePath: renderFilePath,
        parse: function (token) {
            var args = token.args;
            var tokenizer = new Tokenizer(args, this.liquid.options.operatorsTrie);
            this['file'] = this.parseFilePath(tokenizer, this.liquid);
            this['currentFile'] = token.file;
            var begin = tokenizer.p;
            var withStr = tokenizer.readIdentifier();
            if (withStr.content === 'with') {
                tokenizer.skipBlank();
                if (tokenizer.peek() !== ':') {
                    this.withVar = tokenizer.readValue();
                }
                else
                    tokenizer.p = begin;
            }
            else
                tokenizer.p = begin;
            this.hash = new Hash(tokenizer.remaining(), this.liquid.options.jekyllInclude);
        },
        render: function (ctx, emitter) {
            var _a, liquid, hash, withVar, renderer, filepath, saved, scope, _b, _c, templates;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this, liquid = _a.liquid, hash = _a.hash, withVar = _a.withVar;
                        renderer = liquid.renderer;
                        return [4 /*yield*/, this.renderFilePath(this['file'], ctx, liquid)];
                    case 1:
                        filepath = _d.sent();
                        assert(filepath, function () { return "illegal filename \"".concat(filepath, "\""); });
                        saved = ctx.saveRegister('blocks', 'blockMode');
                        ctx.setRegister('blocks', {});
                        ctx.setRegister('blockMode', BlockMode$1.OUTPUT);
                        return [4 /*yield*/, hash.render(ctx)];
                    case 2:
                        scope = _d.sent();
                        if (!withVar) return [3 /*break*/, 4];
                        _b = scope;
                        _c = filepath;
                        return [4 /*yield*/, _evalToken(withVar, ctx)];
                    case 3:
                        _b[_c] = _d.sent();
                        _d.label = 4;
                    case 4: return [4 /*yield*/, liquid._parsePartialFile(filepath, ctx.sync, this['currentFile'])];
                    case 5:
                        templates = _d.sent();
                        ctx.push(ctx.opts.jekyllInclude ? { include: scope } : scope);
                        return [4 /*yield*/, renderer.renderTemplates(templates, ctx, emitter)];
                    case 6:
                        _d.sent();
                        ctx.pop();
                        ctx.restoreRegister(saved);
                        return [2 /*return*/];
                }
            });
        }
    };

    var decrement = {
        parse: function (token) {
            var tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
            this.variable = tokenizer.readIdentifier().content;
        },
        render: function (context, emitter) {
            var scope = context.environments;
            if (!isNumber(scope[this.variable])) {
                scope[this.variable] = 0;
            }
            emitter.write(stringify(--scope[this.variable]));
        }
    };

    var cycle = {
        parse: function (tagToken) {
            var tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
            var group = tokenizer.readValue();
            tokenizer.skipBlank();
            this.candidates = [];
            if (group) {
                if (tokenizer.peek() === ':') {
                    this.group = group;
                    tokenizer.advance();
                }
                else
                    this.candidates.push(group);
            }
            while (!tokenizer.end()) {
                var value = tokenizer.readValue();
                if (value)
                    this.candidates.push(value);
                tokenizer.readTo(',');
            }
            assert(this.candidates.length, function () { return "empty candidates: ".concat(tagToken.getText()); });
        },
        render: function (ctx, emitter) {
            var group, fingerprint, groups, idx, candidate, html;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _evalToken(this.group, ctx)];
                    case 1:
                        group = _a.sent();
                        fingerprint = "cycle:".concat(group, ":") + this.candidates.join(',');
                        groups = ctx.getRegister('cycle');
                        idx = groups[fingerprint];
                        if (idx === undefined) {
                            idx = groups[fingerprint] = 0;
                        }
                        candidate = this.candidates[idx];
                        idx = (idx + 1) % this.candidates.length;
                        groups[fingerprint] = idx;
                        return [4 /*yield*/, _evalToken(candidate, ctx)];
                    case 2:
                        html = _a.sent();
                        emitter.write(html);
                        return [2 /*return*/];
                }
            });
        }
    };

    var If = {
        parse: function (tagToken, remainTokens) {
            var _this = this;
            this.branches = [];
            this.elseTemplates = [];
            var p;
            this.liquid.parser.parseStream(remainTokens)
                .on('start', function () { return _this.branches.push({
                predicate: new Value(tagToken.args, _this.liquid),
                templates: (p = [])
            }); })
                .on('tag:elsif', function (token) { return _this.branches.push({
                predicate: new Value(token.args, _this.liquid),
                templates: (p = [])
            }); })
                .on('tag:else', function () { return (p = _this.elseTemplates); })
                .on('tag:endif', function () { this.stop(); })
                .on('template', function (tpl) { return p.push(tpl); })
                .on('end', function () { throw new Error("tag ".concat(tagToken.getText(), " not closed")); })
                .start();
        },
        render: function (ctx, emitter) {
            var r, _a, _b, _c, predicate, templates, value, e_1_1;
            var e_1, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        r = this.liquid.renderer;
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 7, 8, 9]);
                        _a = __values(this.branches), _b = _a.next();
                        _e.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 6];
                        _c = _b.value, predicate = _c.predicate, templates = _c.templates;
                        return [4 /*yield*/, predicate.value(ctx, ctx.opts.lenientIf)];
                    case 3:
                        value = _e.sent();
                        if (!isTruthy(value, ctx)) return [3 /*break*/, 5];
                        return [4 /*yield*/, r.renderTemplates(templates, ctx, emitter)];
                    case 4:
                        _e.sent();
                        return [2 /*return*/];
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9: return [4 /*yield*/, r.renderTemplates(this.elseTemplates, ctx, emitter)];
                    case 10:
                        _e.sent();
                        return [2 /*return*/];
                }
            });
        }
    };

    var increment = {
        parse: function (token) {
            var tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
            this.variable = tokenizer.readIdentifier().content;
        },
        render: function (context, emitter) {
            var scope = context.environments;
            if (!isNumber(scope[this.variable])) {
                scope[this.variable] = 0;
            }
            var val = scope[this.variable];
            scope[this.variable]++;
            emitter.write(stringify(val));
        }
    };

    var layout = {
        parseFilePath: parseFilePath,
        renderFilePath: renderFilePath,
        parse: function (token, remainTokens) {
            var tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
            this['file'] = this.parseFilePath(tokenizer, this.liquid);
            this['currentFile'] = token.file;
            this.hash = new Hash(tokenizer.remaining());
            this.tpls = this.liquid.parser.parseTokens(remainTokens);
        },
        render: function (ctx, emitter) {
            var _a, liquid, hash, file, renderer, filepath, templates, html, blocks, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this, liquid = _a.liquid, hash = _a.hash, file = _a.file;
                        renderer = liquid.renderer;
                        if (!(file === null)) return [3 /*break*/, 2];
                        ctx.setRegister('blockMode', BlockMode$1.OUTPUT);
                        return [4 /*yield*/, renderer.renderTemplates(this.tpls, ctx, emitter)];
                    case 1:
                        _d.sent();
                        return [2 /*return*/];
                    case 2: return [4 /*yield*/, this.renderFilePath(this['file'], ctx, liquid)];
                    case 3:
                        filepath = _d.sent();
                        assert(filepath, function () { return "illegal filename \"".concat(filepath, "\""); });
                        return [4 /*yield*/, liquid._parseLayoutFile(filepath, ctx.sync, this['currentFile'])
                            // render remaining contents and store rendered results
                        ];
                    case 4:
                        templates = _d.sent();
                        // render remaining contents and store rendered results
                        ctx.setRegister('blockMode', BlockMode$1.STORE);
                        return [4 /*yield*/, renderer.renderTemplates(this.tpls, ctx)];
                    case 5:
                        html = _d.sent();
                        blocks = ctx.getRegister('blocks');
                        // set whole content to anonymous block if anonymous doesn't specified
                        if (blocks[''] === undefined)
                            blocks[''] = function (parent, emitter) { return emitter.write(html); };
                        ctx.setRegister('blockMode', BlockMode$1.OUTPUT);
                        // render the layout file use stored blocks
                        _c = (_b = ctx).push;
                        return [4 /*yield*/, hash.render(ctx)];
                    case 6:
                        // render the layout file use stored blocks
                        _c.apply(_b, [_d.sent()]);
                        return [4 /*yield*/, renderer.renderTemplates(templates, ctx, emitter)];
                    case 7:
                        _d.sent();
                        ctx.pop();
                        return [2 /*return*/];
                }
            });
        }
    };

    var BlockDrop = /** @class */ (function (_super) {
        __extends(BlockDrop, _super);
        function BlockDrop(
        // the block render from layout template
        superBlockRender) {
            if (superBlockRender === void 0) { superBlockRender = function () { return ''; }; }
            var _this = _super.call(this) || this;
            _this.superBlockRender = superBlockRender;
            return _this;
        }
        /**
         * Provide parent access in child block by
         * {{ block.super }}
         */
        BlockDrop.prototype.super = function () {
            return this.superBlockRender();
        };
        return BlockDrop;
    }(Drop));

    var block = {
        parse: function (token, remainTokens) {
            var _this = this;
            var match = /\w+/.exec(token.args);
            this.block = match ? match[0] : '';
            this.tpls = [];
            this.liquid.parser.parseStream(remainTokens)
                .on('tag:endblock', function () { this.stop(); })
                .on('template', function (tpl) { return _this.tpls.push(tpl); })
                .on('end', function () { throw new Error("tag ".concat(token.getText(), " not closed")); })
                .start();
        },
        render: function (ctx, emitter) {
            var blockRender;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        blockRender = this.getBlockRender(ctx);
                        if (!(ctx.getRegister('blockMode') === BlockMode$1.STORE)) return [3 /*break*/, 1];
                        ctx.getRegister('blocks')[this.block] = blockRender;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, blockRender(new BlockDrop(), emitter)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        },
        getBlockRender: function (ctx) {
            var _a = this, liquid = _a.liquid, tpls = _a.tpls;
            var renderChild = ctx.getRegister('blocks')[this.block];
            var renderCurrent = function (superBlock, emitter) {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // add {{ block.super }} support when rendering
                            ctx.push({ block: superBlock });
                            return [4 /*yield*/, liquid.renderer.renderTemplates(tpls, ctx, emitter)];
                        case 1:
                            _a.sent();
                            ctx.pop();
                            return [2 /*return*/];
                    }
                });
            };
            return renderChild
                ? function (superBlock, emitter) { return renderChild(new BlockDrop(function () { return renderCurrent(superBlock, emitter); }), emitter); }
                : renderCurrent;
        }
    };

    var raw = {
        parse: function (tagToken, remainTokens) {
            var _this = this;
            this.tokens = [];
            var stream = this.liquid.parser.parseStream(remainTokens);
            stream
                .on('token', function (token) {
                if (token.name === 'endraw')
                    stream.stop();
                else
                    _this.tokens.push(token);
            })
                .on('end', function () {
                throw new Error("tag ".concat(tagToken.getText(), " not closed"));
            });
            stream.start();
        },
        render: function () {
            return this.tokens.map(function (token) { return token.getText(); }).join('');
        }
    };

    var TablerowloopDrop = /** @class */ (function (_super) {
        __extends(TablerowloopDrop, _super);
        function TablerowloopDrop(length, cols, collection, variable) {
            var _this = _super.call(this, length, collection, variable) || this;
            _this.length = length;
            _this.cols = cols;
            return _this;
        }
        TablerowloopDrop.prototype.row = function () {
            return Math.floor(this.i / this.cols) + 1;
        };
        TablerowloopDrop.prototype.col0 = function () {
            return (this.i % this.cols);
        };
        TablerowloopDrop.prototype.col = function () {
            return this.col0() + 1;
        };
        TablerowloopDrop.prototype.col_first = function () {
            return this.col0() === 0;
        };
        TablerowloopDrop.prototype.col_last = function () {
            return this.col() === this.cols;
        };
        return TablerowloopDrop;
    }(ForloopDrop));

    var tablerow = {
        parse: function (tagToken, remainTokens) {
            var _this = this;
            var tokenizer = new Tokenizer(tagToken.args, this.liquid.options.operatorsTrie);
            var variable = tokenizer.readIdentifier();
            tokenizer.skipBlank();
            var tmp = tokenizer.readIdentifier();
            assert(tmp && tmp.content === 'in', function () { return "illegal tag: ".concat(tagToken.getText()); });
            this.variable = variable.content;
            this.collection = tokenizer.readValue();
            this.hash = new Hash(tokenizer.remaining());
            this.templates = [];
            var p;
            var stream = this.liquid.parser.parseStream(remainTokens)
                .on('start', function () { return (p = _this.templates); })
                .on('tag:endtablerow', function () { return stream.stop(); })
                .on('template', function (tpl) { return p.push(tpl); })
                .on('end', function () {
                throw new Error("tag ".concat(tagToken.getText(), " not closed"));
            });
            stream.start();
        },
        render: function (ctx, emitter) {
            var collection, _a, hash, offset, limit, cols, r, tablerowloop, scope, idx;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = toEnumerable;
                        return [4 /*yield*/, _evalToken(this.collection, ctx)];
                    case 1:
                        collection = _a.apply(void 0, [_b.sent()]);
                        return [4 /*yield*/, this.hash.render(ctx)];
                    case 2:
                        hash = _b.sent();
                        offset = hash.offset || 0;
                        limit = (hash.limit === undefined) ? collection.length : hash.limit;
                        collection = collection.slice(offset, offset + limit);
                        cols = hash.cols || collection.length;
                        r = this.liquid.renderer;
                        tablerowloop = new TablerowloopDrop(collection.length, cols, this.collection.getText(), this.variable);
                        scope = { tablerowloop: tablerowloop };
                        ctx.push(scope);
                        idx = 0;
                        _b.label = 3;
                    case 3:
                        if (!(idx < collection.length)) return [3 /*break*/, 6];
                        scope[this.variable] = collection[idx];
                        if (tablerowloop.col0() === 0) {
                            if (tablerowloop.row() !== 1)
                                emitter.write('</tr>');
                            emitter.write("<tr class=\"row".concat(tablerowloop.row(), "\">"));
                        }
                        emitter.write("<td class=\"col".concat(tablerowloop.col(), "\">"));
                        return [4 /*yield*/, r.renderTemplates(this.templates, ctx, emitter)];
                    case 4:
                        _b.sent();
                        emitter.write('</td>');
                        _b.label = 5;
                    case 5:
                        idx++, tablerowloop.next();
                        return [3 /*break*/, 3];
                    case 6:
                        if (collection.length)
                            emitter.write('</tr>');
                        ctx.pop();
                        return [2 /*return*/];
                }
            });
        }
    };

    var unless = {
        parse: function (tagToken, remainTokens) {
            var _this = this;
            this.branches = [];
            this.elseTemplates = [];
            var p;
            this.liquid.parser.parseStream(remainTokens)
                .on('start', function () { return _this.branches.push({
                predicate: new Value(tagToken.args, _this.liquid),
                test: isFalsy,
                templates: (p = [])
            }); })
                .on('tag:elsif', function (token) { return _this.branches.push({
                predicate: new Value(token.args, _this.liquid),
                test: isTruthy,
                templates: (p = [])
            }); })
                .on('tag:else', function () { return (p = _this.elseTemplates); })
                .on('tag:endunless', function () { this.stop(); })
                .on('template', function (tpl) { return p.push(tpl); })
                .on('end', function () { throw new Error("tag ".concat(tagToken.getText(), " not closed")); })
                .start();
        },
        render: function (ctx, emitter) {
            var r, _a, _b, _c, predicate, test_1, templates, value, e_1_1;
            var e_1, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        r = this.liquid.renderer;
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 7, 8, 9]);
                        _a = __values(this.branches), _b = _a.next();
                        _e.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 6];
                        _c = _b.value, predicate = _c.predicate, test_1 = _c.test, templates = _c.templates;
                        return [4 /*yield*/, predicate.value(ctx, ctx.opts.lenientIf)];
                    case 3:
                        value = _e.sent();
                        if (!test_1(value, ctx)) return [3 /*break*/, 5];
                        return [4 /*yield*/, r.renderTemplates(templates, ctx, emitter)];
                    case 4:
                        _e.sent();
                        return [2 /*return*/];
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9: return [4 /*yield*/, r.renderTemplates(this.elseTemplates, ctx, emitter)];
                    case 10:
                        _e.sent();
                        return [2 /*return*/];
                }
            });
        }
    };

    var Break = {
        render: function (ctx, emitter) {
            emitter['break'] = true;
        }
    };

    var Continue = {
        render: function (ctx, emitter) {
            emitter['continue'] = true;
        }
    };

    var echo = {
        parse: function (token) {
            this.value = new Value(token.args, this.liquid);
        },
        render: function (ctx, emitter) {
            var val;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.value.value(ctx, false)];
                    case 1:
                        val = _a.sent();
                        emitter.write(val);
                        return [2 /*return*/];
                }
            });
        }
    };

    var liquid = {
        parse: function (token) {
            var tokenizer = new Tokenizer(token.args, this.liquid.options.operatorsTrie);
            var tokens = tokenizer.readLiquidTagTokens(this.liquid.options);
            this.tpls = this.liquid.parser.parseTokens(tokens);
        },
        render: function (ctx, emitter) {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.liquid.renderer.renderTemplates(this.tpls, ctx, emitter)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }
    };

    var inlineComment = {
        parse: function (tagToken, remainTokens) {
            if (tagToken.args.search(/\n\s*[^#\s]/g) !== -1) {
                throw new Error('every line of an inline comment must start with a \'#\' character');
            }
        }
    };

    var tags = {
        assign: assign,
        'for': For,
        capture: capture,
        'case': Case,
        comment: comment,
        include: include,
        render: render,
        decrement: decrement,
        increment: increment,
        cycle: cycle,
        'if': If,
        layout: layout,
        block: block,
        raw: raw,
        tablerow: tablerow,
        unless: unless,
        'break': Break, 'continue': Continue,
        echo: echo,
        liquid: liquid,
        '#': inlineComment
    };

    var index = /*#__PURE__*/Object.freeze({
        __proto__: null,
        'default': tags
    });

    var filters = new Map();
    forOwn(builtinFilters, function (conf, name) {
        filters.set(snakeCase(name), conf);
    });
    var defaultOptions = {
        root: ['.'],
        layouts: ['.'],
        partials: ['.'],
        relativeReference: true,
        jekyllInclude: false,
        cache: undefined,
        extname: '',
        fs: fs,
        dynamicPartials: true,
        jsTruthy: false,
        trimTagRight: false,
        trimTagLeft: false,
        trimOutputRight: false,
        trimOutputLeft: false,
        greedy: true,
        tagDelimiterLeft: '{%',
        tagDelimiterRight: '%}',
        outputDelimiterLeft: '{{',
        outputDelimiterRight: '}}',
        preserveTimezones: false,
        strictFilters: false,
        strictVariables: false,
        ownPropertyOnly: false,
        lenientIf: false,
        globals: {},
        keepOutputType: false,
        operators: defaultOperators,
        operatorsTrie: createTrie(defaultOperators)
    };
    function normalize(options) {
        if (options.hasOwnProperty('operators')) {
            options.operatorsTrie = createTrie(options.operators);
        }
        if (options.hasOwnProperty('root')) {
            if (!options.hasOwnProperty('partials'))
                options.partials = options.root;
            if (!options.hasOwnProperty('layouts'))
                options.layouts = options.root;
        }
        if (options.hasOwnProperty('cache')) {
            var cache = void 0;
            if (typeof options.cache === 'number')
                cache = options.cache > 0 ? new LRU(options.cache) : undefined;
            else if (typeof options.cache === 'object')
                cache = options.cache;
            else
                cache = options.cache ? new LRU(1024) : undefined;
            options.cache = cache;
        }
        options = __assign(__assign(__assign({}, defaultOptions), (options.jekyllInclude ? { dynamicPartials: false } : {})), options);
        if (!options.fs.dirname && options.relativeReference) {
            console.warn('[LiquidJS] `fs.dirname` is required for relativeReference, set relativeReference to `false` to suppress this warning, or provide implementation for `fs.dirname`');
            options.relativeReference = false;
        }
        options.root = normalizeDirectoryList(options.root);
        options.partials = normalizeDirectoryList(options.partials);
        options.layouts = normalizeDirectoryList(options.layouts);
        options.outputEscape = options.outputEscape && getOutputEscapeFunction(options.outputEscape);
        return options;
    }
    function getOutputEscapeFunction(nameOrFunction) {
        if (isString(nameOrFunction)) {
            var filterImpl = filters.get(nameOrFunction);
            assert(isFunction(filterImpl), "filter \"".concat(nameOrFunction, "\" not found"));
            return filterImpl;
        }
        else {
            assert(isFunction(nameOrFunction), '`outputEscape` need to be of type string or function');
            return nameOrFunction;
        }
    }
    function normalizeDirectoryList(value) {
        var list = [];
        if (isArray(value))
            list = value;
        if (isString(value))
            list = [value];
        return list;
    }

    var Context = /** @class */ (function () {
        function Context(env, opts, renderOptions) {
            if (env === void 0) { env = {}; }
            if (opts === void 0) { opts = defaultOptions; }
            if (renderOptions === void 0) { renderOptions = {}; }
            var _a, _b;
            /**
             * insert a Context-level empty scope,
             * for tags like `{% capture %}` `{% assign %}` to operate
             */
            this.scopes = [{}];
            this.registers = {};
            this.sync = !!renderOptions.sync;
            this.opts = opts;
            this.globals = (_a = renderOptions.globals) !== null && _a !== void 0 ? _a : opts.globals;
            this.environments = env;
            this.strictVariables = (_b = renderOptions.strictVariables) !== null && _b !== void 0 ? _b : this.opts.strictVariables;
        }
        Context.prototype.getRegister = function (key) {
            return (this.registers[key] = this.registers[key] || {});
        };
        Context.prototype.setRegister = function (key, value) {
            return (this.registers[key] = value);
        };
        Context.prototype.saveRegister = function () {
            var _this = this;
            var keys = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                keys[_i] = arguments[_i];
            }
            return keys.map(function (key) { return [key, _this.getRegister(key)]; });
        };
        Context.prototype.restoreRegister = function (keyValues) {
            var _this = this;
            return keyValues.forEach(function (_a) {
                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                return _this.setRegister(key, value);
            });
        };
        Context.prototype.getAll = function () {
            return __spreadArray([this.globals, this.environments], __read(this.scopes), false).reduce(function (ctx, val) { return __assign(ctx, val); }, {});
        };
        /**
         * @deprecated use `_get()` instead
         */
        Context.prototype.get = function (paths) {
            return toValueSync(this._get(paths));
        };
        Context.prototype._get = function (paths) {
            var scope;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        scope = this.findScope(paths[0]);
                        return [4 /*yield*/, this._getFromScope(scope, paths)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        };
        /**
         * @deprecated use `_get()` instead
         */
        Context.prototype.getFromScope = function (scope, paths) {
            return toValueSync(this._getFromScope(scope, paths));
        };
        Context.prototype._getFromScope = function (scope, paths) {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (isString(paths))
                            paths = paths.split('.');
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < paths.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, readProperty(scope, paths[i], this.opts.ownPropertyOnly)];
                    case 2:
                        scope = _a.sent();
                        if (isNil(scope) && this.strictVariables) {
                            throw new InternalUndefinedVariableError(paths.slice(0, i + 1).join('.'));
                        }
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, scope];
                }
            });
        };
        Context.prototype.push = function (ctx) {
            return this.scopes.push(ctx);
        };
        Context.prototype.pop = function () {
            return this.scopes.pop();
        };
        Context.prototype.bottom = function () {
            return this.scopes[0];
        };
        Context.prototype.findScope = function (key) {
            for (var i = this.scopes.length - 1; i >= 0; i--) {
                var candidate = this.scopes[i];
                if (key in candidate)
                    return candidate;
            }
            if (key in this.environments)
                return this.environments;
            return this.globals;
        };
        return Context;
    }());
    function readProperty(obj, key, ownPropertyOnly) {
        if (isNil(obj))
            return obj;
        obj = toLiquid(obj);
        if (isArray(obj) && key < 0)
            return obj[obj.length + +key];
        var jsProperty = readJSProperty(obj, key, ownPropertyOnly);
        if (jsProperty === undefined && obj instanceof Drop)
            return obj.liquidMethodMissing(key);
        if (isFunction(jsProperty))
            return jsProperty.call(obj);
        if (key === 'size')
            return readSize(obj);
        else if (key === 'first')
            return readFirst(obj);
        else if (key === 'last')
            return readLast(obj);
        return jsProperty;
    }
    function readJSProperty(obj, key, ownPropertyOnly) {
        if (ownPropertyOnly && !Object.hasOwnProperty.call(obj, key))
            return undefined;
        return obj[key];
    }
    function readFirst(obj) {
        if (isArray(obj))
            return obj[0];
        return obj['first'];
    }
    function readLast(obj) {
        if (isArray(obj))
            return obj[obj.length - 1];
        return obj['last'];
    }
    function readSize(obj) {
        if (obj.hasOwnProperty('size') || obj['size'] !== undefined)
            return obj['size'];
        if (isArray(obj) || isString(obj))
            return obj.length;
        if (typeof obj === 'object')
            return Object.keys(obj).length;
    }

    var LookupType;
    (function (LookupType) {
        LookupType["Partials"] = "partials";
        LookupType["Layouts"] = "layouts";
        LookupType["Root"] = "root";
    })(LookupType || (LookupType = {}));
    var Loader = /** @class */ (function () {
        function Loader(options) {
            this.options = options;
            if (options.relativeReference) {
                var sep = options.fs.sep;
                assert(sep, '`fs.sep` is required for relative reference');
                var rRelativePath_1 = new RegExp(['.' + sep, '..' + sep, './', '../'].map(function (prefix) { return escapeRegex(prefix); }).join('|'));
                this.shouldLoadRelative = function (referencedFile) { return rRelativePath_1.test(referencedFile); };
            }
            else {
                this.shouldLoadRelative = function (referencedFile) { return false; };
            }
            this.contains = this.options.fs.contains || (function () { return true; });
        }
        Loader.prototype.lookup = function (file, type, sync, currentFile) {
            var fs, dirs, _a, _b, filepath, _c, e_1_1;
            var e_1, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        fs = this.options.fs;
                        dirs = this.options[type];
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 8, 9, 10]);
                        _a = __values(this.candidates(file, dirs, currentFile, type !== LookupType.Root)), _b = _a.next();
                        _e.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 7];
                        filepath = _b.value;
                        if (!sync) return [3 /*break*/, 3];
                        _c = fs.existsSync(filepath);
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, fs.exists(filepath)];
                    case 4:
                        _c = _e.sent();
                        _e.label = 5;
                    case 5:
                        if (_c)
                            return [2 /*return*/, filepath];
                        _e.label = 6;
                    case 6:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 10: throw this.lookupError(file, dirs);
                }
            });
        };
        Loader.prototype.candidates = function (file, dirs, currentFile, enforceRoot) {
            var _a, fs, extname, referenced, dirs_1, dirs_1_1, dir, e_2_1, dirs_2, dirs_2_1, dir, referenced, e_3_1, filepath;
            var e_2, _b, e_3, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this.options, fs = _a.fs, extname = _a.extname;
                        if (!(this.shouldLoadRelative(file) && currentFile)) return [3 /*break*/, 8];
                        referenced = fs.resolve(this.dirname(currentFile), file, extname);
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 8]);
                        dirs_1 = __values(dirs), dirs_1_1 = dirs_1.next();
                        _d.label = 2;
                    case 2:
                        if (!!dirs_1_1.done) return [3 /*break*/, 5];
                        dir = dirs_1_1.value;
                        if (!(!enforceRoot || this.contains(dir, referenced))) return [3 /*break*/, 4];
                        // the relatively referenced file is within one of root dirs
                        return [4 /*yield*/, referenced];
                    case 3:
                        // the relatively referenced file is within one of root dirs
                        _d.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        dirs_1_1 = dirs_1.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_2_1 = _d.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (dirs_1_1 && !dirs_1_1.done && (_b = dirs_1.return)) _b.call(dirs_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 8:
                        _d.trys.push([8, 13, 14, 15]);
                        dirs_2 = __values(dirs), dirs_2_1 = dirs_2.next();
                        _d.label = 9;
                    case 9:
                        if (!!dirs_2_1.done) return [3 /*break*/, 12];
                        dir = dirs_2_1.value;
                        referenced = fs.resolve(dir, file, extname);
                        if (!(!enforceRoot || this.contains(dir, referenced))) return [3 /*break*/, 11];
                        return [4 /*yield*/, referenced];
                    case 10:
                        _d.sent();
                        _d.label = 11;
                    case 11:
                        dirs_2_1 = dirs_2.next();
                        return [3 /*break*/, 9];
                    case 12: return [3 /*break*/, 15];
                    case 13:
                        e_3_1 = _d.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 15];
                    case 14:
                        try {
                            if (dirs_2_1 && !dirs_2_1.done && (_c = dirs_2.return)) _c.call(dirs_2);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 15:
                        if (!(fs.fallback !== undefined)) return [3 /*break*/, 17];
                        filepath = fs.fallback(file);
                        if (!(filepath !== undefined)) return [3 /*break*/, 17];
                        return [4 /*yield*/, filepath];
                    case 16:
                        _d.sent();
                        _d.label = 17;
                    case 17: return [2 /*return*/];
                }
            });
        };
        Loader.prototype.dirname = function (path) {
            var fs = this.options.fs;
            assert(fs.dirname, '`fs.dirname` is required for relative reference');
            return fs.dirname(path);
        };
        Loader.prototype.lookupError = function (file, roots) {
            var err = new Error('ENOENT');
            err.message = "ENOENT: Failed to lookup \"".concat(file, "\" in \"").concat(roots, "\"");
            err.code = 'ENOENT';
            return err;
        };
        return Loader;
    }());

    var SimpleEmitter = /** @class */ (function () {
        function SimpleEmitter() {
            this.buffer = '';
        }
        SimpleEmitter.prototype.write = function (html) {
            this.buffer += stringify(html);
        };
        return SimpleEmitter;
    }());

    var StreamedEmitter = /** @class */ (function () {
        function StreamedEmitter() {
            this.buffer = '';
            this.stream = null;
            throw new Error('streaming not supported in browser');
        }
        return StreamedEmitter;
    }());

    var KeepingTypeEmitter = /** @class */ (function () {
        function KeepingTypeEmitter() {
            this.buffer = '';
        }
        KeepingTypeEmitter.prototype.write = function (html) {
            html = toValue(html);
            // This will only preserve the type if the value is isolated.
            // I.E:
            // {{ my-port }} -> 42
            // {{ my-host }}:{{ my-port }} -> 'host:42'
            if (typeof html !== 'string' && this.buffer === '') {
                this.buffer = html;
            }
            else {
                this.buffer = stringify(this.buffer) + stringify(html);
            }
        };
        return KeepingTypeEmitter;
    }());

    var Render = /** @class */ (function () {
        function Render() {
        }
        Render.prototype.renderTemplatesToNodeStream = function (templates, ctx) {
            var _this = this;
            var emitter = new StreamedEmitter();
            Promise.resolve().then(function () { return toPromise(_this.renderTemplates(templates, ctx, emitter)); })
                .then(function () { return emitter.end(); }, function (err) { return emitter.error(err); });
            return emitter.stream;
        };
        Render.prototype.renderTemplates = function (templates, ctx, emitter) {
            var templates_1, templates_1_1, tpl, html, e_1, err, e_2_1;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!emitter) {
                            emitter = ctx.opts.keepOutputType ? new KeepingTypeEmitter() : new SimpleEmitter();
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 8, 9, 10]);
                        templates_1 = __values(templates), templates_1_1 = templates_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!templates_1_1.done) return [3 /*break*/, 7];
                        tpl = templates_1_1.value;
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, tpl.render(ctx, emitter)
                            // if not, it'll return an `html`, write to the emitter for it
                        ];
                    case 4:
                        html = _b.sent();
                        // if not, it'll return an `html`, write to the emitter for it
                        html && emitter.write(html);
                        if (emitter['break'] || emitter['continue'])
                            return [3 /*break*/, 7];
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _b.sent();
                        err = RenderError.is(e_1) ? e_1 : new RenderError(e_1, tpl);
                        throw err;
                    case 6:
                        templates_1_1 = templates_1.next();
                        return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (templates_1_1 && !templates_1_1.done && (_a = templates_1.return)) _a.call(templates_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/, emitter.buffer];
                }
            });
        };
        return Render;
    }());

    var TemplateImpl = /** @class */ (function () {
        function TemplateImpl(token) {
            this.token = token;
        }
        return TemplateImpl;
    }());

    var Tag = /** @class */ (function (_super) {
        __extends(Tag, _super);
        function Tag(token, tokens, liquid) {
            var _this = _super.call(this, token) || this;
            _this.name = token.name;
            var impl = liquid.tags.get(token.name);
            _this.impl = Object.create(impl);
            _this.impl.liquid = liquid;
            if (_this.impl.parse) {
                _this.impl.parse(token, tokens);
            }
            return _this;
        }
        Tag.prototype.render = function (ctx, emitter) {
            var hash, impl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Hash(this.token.args).render(ctx)];
                    case 1:
                        hash = (_a.sent());
                        impl = this.impl;
                        if (!isFunction(impl.render)) return [3 /*break*/, 3];
                        return [4 /*yield*/, impl.render(ctx, emitter, hash)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [2 /*return*/];
                }
            });
        };
        return Tag;
    }(TemplateImpl));

    var Output = /** @class */ (function (_super) {
        __extends(Output, _super);
        function Output(token, liquid) {
            var _this = _super.call(this, token) || this;
            _this.value = new Value(token.content, liquid);
            var filters = _this.value.filters;
            var outputEscape = liquid.options.outputEscape;
            if (filters.length && filters[filters.length - 1].name === 'raw') {
                filters.pop();
            }
            else if (outputEscape) {
                filters.push(new Filter(toString.call(outputEscape), outputEscape, [], liquid));
            }
            return _this;
        }
        Output.prototype.render = function (ctx, emitter) {
            var val;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.value.value(ctx, false)];
                    case 1:
                        val = _a.sent();
                        emitter.write(val);
                        return [2 /*return*/];
                }
            });
        };
        return Output;
    }(TemplateImpl));

    var HTML = /** @class */ (function (_super) {
        __extends(HTML, _super);
        function HTML(token) {
            var _this = _super.call(this, token) || this;
            _this.str = token.getContent();
            return _this;
        }
        HTML.prototype.render = function (ctx, emitter) {
            return __generator(this, function (_a) {
                emitter.write(this.str);
                return [2 /*return*/];
            });
        };
        return HTML;
    }(TemplateImpl));

    var Parser = /** @class */ (function () {
        function Parser(liquid) {
            this.liquid = liquid;
            this.cache = this.liquid.options.cache;
            this.fs = this.liquid.options.fs;
            this.parseFile = this.cache ? this._parseFileCached : this._parseFile;
            this.loader = new Loader(this.liquid.options);
        }
        Parser.prototype.parse = function (html, filepath) {
            var tokenizer = new Tokenizer(html, this.liquid.options.operatorsTrie, filepath);
            var tokens = tokenizer.readTopLevelTokens(this.liquid.options);
            return this.parseTokens(tokens);
        };
        Parser.prototype.parseTokens = function (tokens) {
            var token;
            var templates = [];
            while ((token = tokens.shift())) {
                templates.push(this.parseToken(token, tokens));
            }
            return templates;
        };
        Parser.prototype.parseToken = function (token, remainTokens) {
            try {
                if (isTagToken(token)) {
                    return new Tag(token, remainTokens, this.liquid);
                }
                if (isOutputToken(token)) {
                    return new Output(token, this.liquid);
                }
                return new HTML(token);
            }
            catch (e) {
                throw new ParseError(e, token);
            }
        };
        Parser.prototype.parseStream = function (tokens) {
            var _this = this;
            return new ParseStream(tokens, function (token, tokens) { return _this.parseToken(token, tokens); });
        };
        Parser.prototype._parseFileCached = function (file, sync, type, currentFile) {
            var cache, key, tpls, task, taskOrTpl, _a, err_1;
            if (type === void 0) { type = LookupType.Root; }
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        cache = this.cache;
                        key = this.loader.shouldLoadRelative(file) ? currentFile + ',' + file : type + ':' + file;
                        return [4 /*yield*/, cache.read(key)];
                    case 1:
                        tpls = _b.sent();
                        if (tpls)
                            return [2 /*return*/, tpls];
                        task = this._parseFile(file, sync, type, currentFile);
                        if (!sync) return [3 /*break*/, 3];
                        return [4 /*yield*/, task];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = toPromise(task);
                        _b.label = 4;
                    case 4:
                        taskOrTpl = _a;
                        cache.write(key, taskOrTpl);
                        _b.label = 5;
                    case 5:
                        _b.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, taskOrTpl];
                    case 6: return [2 /*return*/, _b.sent()];
                    case 7:
                        err_1 = _b.sent();
                        cache.remove(key);
                        throw err_1;
                    case 8: return [2 /*return*/];
                }
            });
        };
        Parser.prototype._parseFile = function (file, sync, type, currentFile) {
            var filepath, _a, _b, _c;
            if (type === void 0) { type = LookupType.Root; }
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.loader.lookup(file, type, sync, currentFile)];
                    case 1:
                        filepath = _d.sent();
                        _b = (_a = this.liquid).parse;
                        if (!sync) return [3 /*break*/, 2];
                        _c = this.fs.readFileSync(filepath);
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.fs.readFile(filepath)];
                    case 3:
                        _c = _d.sent();
                        _d.label = 4;
                    case 4: return [2 /*return*/, _b.apply(_a, [_c, filepath])];
                }
            });
        };
        return Parser;
    }());

    var TagMap = /** @class */ (function () {
        function TagMap() {
            this.impls = {};
        }
        TagMap.prototype.get = function (name) {
            var impl = this.impls[name];
            assert(impl, function () { return "tag \"".concat(name, "\" not found"); });
            return impl;
        };
        TagMap.prototype.set = function (name, impl) {
            this.impls[name] = impl;
        };
        return TagMap;
    }());

    var FilterMap = /** @class */ (function () {
        function FilterMap(strictFilters, liquid) {
            this.strictFilters = strictFilters;
            this.liquid = liquid;
            this.impls = {};
        }
        FilterMap.prototype.get = function (name) {
            var impl = this.impls[name];
            assert(impl || !this.strictFilters, function () { return "undefined filter: ".concat(name); });
            return impl;
        };
        FilterMap.prototype.set = function (name, impl) {
            this.impls[name] = impl;
        };
        FilterMap.prototype.create = function (name, args) {
            return new Filter(name, this.get(name), args, this.liquid);
        };
        return FilterMap;
    }());

    var version = '9.42.1';
    var Liquid = /** @class */ (function () {
        function Liquid(opts) {
            var _this = this;
            if (opts === void 0) { opts = {}; }
            this.options = normalize(opts);
            this.parser = new Parser(this);
            this.renderer = new Render();
            this.filters = new FilterMap(this.options.strictFilters, this);
            this.tags = new TagMap();
            forOwn(tags, function (conf, name) { return _this.registerTag(snakeCase(name), conf); });
            forOwn(builtinFilters, function (handler, name) { return _this.registerFilter(snakeCase(name), handler); });
        }
        Liquid.prototype.parse = function (html, filepath) {
            return this.parser.parse(html, filepath);
        };
        Liquid.prototype._render = function (tpl, scope, renderOptions) {
            var ctx = new Context(scope, this.options, renderOptions);
            return this.renderer.renderTemplates(tpl, ctx);
        };
        Liquid.prototype.render = function (tpl, scope, renderOptions) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, toPromise(this._render(tpl, scope, __assign(__assign({}, renderOptions), { sync: false })))];
                });
            });
        };
        Liquid.prototype.renderSync = function (tpl, scope, renderOptions) {
            return toValueSync(this._render(tpl, scope, __assign(__assign({}, renderOptions), { sync: true })));
        };
        Liquid.prototype.renderToNodeStream = function (tpl, scope, renderOptions) {
            if (renderOptions === void 0) { renderOptions = {}; }
            var ctx = new Context(scope, this.options, renderOptions);
            return this.renderer.renderTemplatesToNodeStream(tpl, ctx);
        };
        Liquid.prototype._parseAndRender = function (html, scope, renderOptions) {
            var tpl = this.parse(html);
            return this._render(tpl, scope, renderOptions);
        };
        Liquid.prototype.parseAndRender = function (html, scope, renderOptions) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, toPromise(this._parseAndRender(html, scope, __assign(__assign({}, renderOptions), { sync: false })))];
                });
            });
        };
        Liquid.prototype.parseAndRenderSync = function (html, scope, renderOptions) {
            return toValueSync(this._parseAndRender(html, scope, __assign(__assign({}, renderOptions), { sync: true })));
        };
        Liquid.prototype._parsePartialFile = function (file, sync, currentFile) {
            return this.parser.parseFile(file, sync, LookupType.Partials, currentFile);
        };
        Liquid.prototype._parseLayoutFile = function (file, sync, currentFile) {
            return this.parser.parseFile(file, sync, LookupType.Layouts, currentFile);
        };
        Liquid.prototype.parseFile = function (file) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, toPromise(this.parser.parseFile(file, false))];
                });
            });
        };
        Liquid.prototype.parseFileSync = function (file) {
            return toValueSync(this.parser.parseFile(file, true));
        };
        Liquid.prototype.renderFile = function (file, ctx, renderOptions) {
            return __awaiter(this, void 0, void 0, function () {
                var templates;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.parseFile(file)];
                        case 1:
                            templates = _a.sent();
                            return [2 /*return*/, this.render(templates, ctx, renderOptions)];
                    }
                });
            });
        };
        Liquid.prototype.renderFileSync = function (file, ctx, renderOptions) {
            var templates = this.parseFileSync(file);
            return this.renderSync(templates, ctx, renderOptions);
        };
        Liquid.prototype.renderFileToNodeStream = function (file, scope, renderOptions) {
            return __awaiter(this, void 0, void 0, function () {
                var templates;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.parseFile(file)];
                        case 1:
                            templates = _a.sent();
                            return [2 /*return*/, this.renderToNodeStream(templates, scope, renderOptions)];
                    }
                });
            });
        };
        Liquid.prototype._evalValue = function (str, scopeOrContext) {
            var value = new Value(str, this);
            var ctx = scopeOrContext instanceof Context ? scopeOrContext : new Context(scopeOrContext, this.options);
            return value.value(ctx, false);
        };
        Liquid.prototype.evalValue = function (str, scopeOrContext) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, toPromise(this._evalValue(str, scopeOrContext))];
                });
            });
        };
        Liquid.prototype.evalValueSync = function (str, scopeOrContext) {
            return toValueSync(this._evalValue(str, scopeOrContext));
        };
        Liquid.prototype.registerFilter = function (name, filter) {
            this.filters.set(name, filter);
        };
        Liquid.prototype.registerTag = function (name, tag) {
            this.tags.set(name, tag);
        };
        Liquid.prototype.plugin = function (plugin) {
            return plugin.call(this, Liquid);
        };
        Liquid.prototype.express = function () {
            var self = this; // eslint-disable-line
            var firstCall = true;
            return function (filePath, ctx, callback) {
                var _a, _b, _c;
                if (firstCall) {
                    firstCall = false;
                    var dirs = normalizeDirectoryList(this.root);
                    (_a = self.options.root).unshift.apply(_a, __spreadArray([], __read(dirs), false));
                    (_b = self.options.layouts).unshift.apply(_b, __spreadArray([], __read(dirs), false));
                    (_c = self.options.partials).unshift.apply(_c, __spreadArray([], __read(dirs), false));
                }
                self.renderFile(filePath, ctx).then(function (html) { return callback(null, html); }, callback);
            };
        };
        return Liquid;
    }());

    exports.AssertionError = AssertionError;
    exports.Context = Context;
    exports.Drop = Drop;
    exports.Expression = Expression;
    exports.Hash = Hash;
    exports.InternalUndefinedVariableError = InternalUndefinedVariableError;
    exports.Liquid = Liquid;
    exports.LiquidError = LiquidError;
    exports.ParseError = ParseError;
    exports.ParseStream = ParseStream;
    exports.RenderError = RenderError;
    exports.TagToken = TagToken;
    exports.TimezoneDate = TimezoneDate;
    exports.Token = Token;
    exports.TokenizationError = TokenizationError;
    exports.Tokenizer = Tokenizer;
    exports.TypeGuards = typeGuards;
    exports.UndefinedVariableError = UndefinedVariableError;
    exports.Value = Value;
    exports._evalToken = _evalToken;
    exports.assert = assert;
    exports.createTrie = createTrie;
    exports.defaultOperators = defaultOperators;
    exports.defaultOptions = defaultOptions;
    exports.evalQuotedToken = evalQuotedToken;
    exports.evalToken = evalToken;
    exports.filters = builtinFilters;
    exports.isFalsy = isFalsy;
    exports.isTruthy = isTruthy;
    exports.tags = index;
    exports.toPromise = toPromise;
    exports.toThenable = toThenable;
    exports.toValue = toValue;
    exports.toValueSync = toValueSync;
    exports.version = version;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=liquid.browser.umd.js.map
