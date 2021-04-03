var Nod = /** @class */ (function () {
    function Nod(n) {
        this.n = n;
        this.next = null;
        this.name = n;
    }
    return Nod;
}());
function flav() {
    var cntr = Number(document.getElementById("input1").value); //количество человек
    var midNode;
    var lastNode;
    var head = new Nod("1");
    lastNode = new Nod(String(cntr));
    head.next = lastNode;
    lastNode.next = head;
    while (cntr > 2) { //заполняем цепочку нод
        midNode = new Nod(String(--cntr));
        midNode.next = lastNode;
        head.next = midNode;
        lastNode = midNode;
    }
    //пока head не начинает показывать на себя накрываем ноды через одну
    while (head.next != head) {
        head.next = head.next.next;
        head = head.next;
    }
    //можем просмотреть кто остался
    console.log("оставшаяся нода: " + head.name);
    document.getElementById("input3").value = head.name;
}
