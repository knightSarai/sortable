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
exports.LinkedList = void 0;
var Sorter_1 = require("./Sorter");
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head)
                return 0;
            var length = 0;
            var currentNode = this.head;
            while (currentNode.next) {
                length++;
                currentNode = currentNode.next;
            }
            return length;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        var currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
    };
    LinkedList.prototype.at = function (index) {
        if (!this.head) {
            throw new Error("Index Out of bounds");
        }
        var currentNode = this.head;
        var counter = 0;
        while (currentNode.next) {
            if (counter === index)
                return currentNode;
            counter++;
            currentNode = currentNode.next;
        }
        throw new Error("Index out of bounds");
    };
    LinkedList.prototype.compare = function (lefIndex) {
        if (!this.head)
            throw new Error("List is empty");
        return this.at(lefIndex).data > this.at(lefIndex + 1).data;
    };
    LinkedList.prototype.swap = function (lefIndex) {
        // TODO: Swap the refrences instead of the data
        var leftHand = this.at(lefIndex).data;
        this.at(lefIndex).data = this.at(lefIndex + 1).data;
        this.at(lefIndex + 1).data = leftHand;
    };
    LinkedList.prototype.print = function () {
        if (!this.head)
            return;
        var currentNode = this.head;
        var listRepersintaion = "";
        while (currentNode) {
            listRepersintaion += "" + currentNode.data;
            currentNode = currentNode.next;
            listRepersintaion += currentNode ? " -> " : '';
        }
        console.log(listRepersintaion);
    };
    return LinkedList;
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;
