"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharachterCollection = void 0;
var CharachterCollection = /** @class */ (function () {
    function CharachterCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharachterCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharachterCollection.prototype.compare = function (lefIndex) {
        return this.data[lefIndex].toLowerCase() > this.data[lefIndex + 1].toLowerCase();
    };
    CharachterCollection.prototype.swap = function (lefIndex) {
        var characters = this.data.split('');
        var leftHand = characters[lefIndex];
        characters[lefIndex] = characters[lefIndex + 1];
        characters[lefIndex + 1] = leftHand;
        this.data = characters.join('');
    };
    return CharachterCollection;
}());
exports.CharachterCollection = CharachterCollection;
