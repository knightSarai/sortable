"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharachterCollection = void 0;
var Sorter_1 = require("./Sorter");
var CharachterCollection = /** @class */ (function (_super) {
    __extends(CharachterCollection, _super);
    function CharachterCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
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
}(Sorter_1.Sorter));
exports.CharachterCollection = CharachterCollection;
