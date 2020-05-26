"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.B = exports.A = void 0;
var A;
(function (A) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + '吃粮食');
        };
        return Dog;
    }());
    A.Dog = Dog;
    var Cat = /** @class */ (function () {
        function Cat(name) {
            this.name = name;
        }
        Cat.prototype.eat = function (str) {
            console.log(this.name + str);
        };
        return Cat;
    }());
    A.Cat = Cat;
})(A || (A = {}));
exports.A = A;
var B;
(function (B) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.eat = function () {
            console.log(this.name + '吃粮食');
        };
        return Dog;
    }());
    B.Dog = Dog;
    var Cat = /** @class */ (function () {
        function Cat(name) {
            this.name = name;
        }
        Cat.prototype.eat = function (str) {
            console.log(this.name + str);
        };
        return Cat;
    }());
    B.Cat = Cat;
})(B || (B = {}));
exports.B = B;
