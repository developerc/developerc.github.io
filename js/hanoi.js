function haoitower() {
    var Stack = /** @class */ (function () {
        function Stack(capacity) {
            if (capacity === void 0) { capacity = Infinity; }
            this.capacity = capacity;
            this.storage = [];
        }
        Stack.prototype.size = function () {
            return this.storage.length;
        };
        Stack.prototype.push = function (item) {
            if (this.size() === this.capacity) {
                throw Error("Stack has reached max capacity");
            }
            this.storage.push(item);
        };
        Stack.prototype.pop = function () {
            return this.storage.pop();
        };
        Stack.prototype.peek = function () {
            return this.storage[this.size() - 1];
        };
        Stack.prototype.isEmpty = function () {
            return this.size() === 0 ? true : false;
        };
        return Stack;
    }());
    function fillStackA(sizeStack) {
        while (sizeStack > 0) {
            stackA.push(sizeStack--);
        }
    }
    function fAB() {
        var temp = stackA.pop();
        stackB.push(temp);
    }
    function fBA() {
        var temp = stackB.pop();
        stackA.push(temp);
    }
    function fAC() {
        var temp = stackA.pop();
        stackC.push(temp);
    }
    function fCA() {
        var temp = stackC.pop();
        stackA.push(temp);
    }
    function fBC() {
        var temp = stackB.pop();
        stackC.push(temp);
    }
    function fCB() {
        var temp = stackC.pop();
        stackB.push(temp);
    }
    function changePlaces(sizeStack) {
        //А-В, А-С, В-С для четного количества колец
        //А-С, А-В, В-С для нечетного
        //направление перестановки зависит от величины колец
        if (sizeStack % 2 == 0) {
            //если количество колец четное
            //A-B
            if ((stackA.isEmpty() && stackB.isEmpty()) || (stackA.isEmpty() && stackC.isEmpty())) {
                return;
            }
            else {
                cntr++;
                if (!stackA.isEmpty() && ((stackB.isEmpty()) || (stackA.peek() < stackB.peek()))) {
                    fAB();
                }
                else {
                    fBA();
                }
            }
            //A-C
            if ((stackA.isEmpty() && stackB.isEmpty()) || (stackA.isEmpty() && stackC.isEmpty())) {
                return;
            }
            else {
                cntr++;
                if (!stackA.isEmpty() && ((stackC.isEmpty()) || (stackA.peek() < stackC.peek()))) {
                    fAC();
                }
                else {
                    fCA();
                }
            }
            //B-C
            if ((stackA.isEmpty() && stackB.isEmpty()) || (stackA.isEmpty() && stackC.isEmpty())) {
                return;
            }
            else {
                cntr++;
                if (!stackB.isEmpty() && ((stackC.isEmpty()) || (stackB.peek() < stackC.peek()))) {
                    fBC();
                }
                else {
                    fCB();
                }
            }
        }
        else {
            //если количество колец нечетное
            //A-C
            if ((stackA.isEmpty() && stackB.isEmpty()) || (stackA.isEmpty() && stackC.isEmpty())) {
                return;
            }
            else {
                cntr++;
                if (!stackA.isEmpty() && ((stackC.isEmpty()) || (stackA.peek() < stackC.peek()))) {
                    fAC();
                }
                else {
                    fCA();
                }
            }
            //A-B
            if ((stackA.isEmpty() && stackB.isEmpty()) || (stackA.isEmpty() && stackC.isEmpty())) {
                return;
            }
            else {
                cntr++;
                if (!stackA.isEmpty() && ((stackB.isEmpty()) || (stackA.peek() < stackB.peek()))) {
                    fAB();
                }
                else {
                    fBA();
                }
            }
            //B-C
            if ((stackA.isEmpty() && stackB.isEmpty()) || (stackA.isEmpty() && stackC.isEmpty())) {
                return;
            }
            else {
                cntr++;
                if (!stackB.isEmpty() && ((stackC.isEmpty()) || (stackB.peek() < stackC.peek()))) {
                    fBC();
                }
                else {
                    fCB();
                }
            }
        }
        changePlaces(sizeStack);
    }
    var stackA = new Stack();
    var stackB = new Stack();
    var stackC = new Stack();
    var sizeStack;
    var cntr = 0;
    sizeStack = Number(document.getElementById("input1").value);
    fillStackA(sizeStack);
    console.log(stackA);
    changePlaces(sizeStack);
    console.log("cntr = " + cntr);
    document.getElementById("input3").value = String(cntr);
}
