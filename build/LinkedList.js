"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
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
}());
exports.LinkedList = LinkedList;
