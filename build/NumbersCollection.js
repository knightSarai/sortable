"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (lefIndex) {
        return this.data[lefIndex] > this.data[lefIndex + 1];
    };
    NumbersCollection.prototype.swap = function (lefIndex) {
        var leftHand = this.data[lefIndex];
        this.data[lefIndex] = this.data[lefIndex + 1];
        this.data[lefIndex + 1] = leftHand;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
