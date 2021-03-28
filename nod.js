function getNOD() {
    //let x: number = 30;
    //let y: number = 184;
    var x = Number(document.getElementById("input1").value);
    var y = Number(document.getElementById("input2").value);
    var remainder;
    if (x < y) {
        remainder = x;
        x = y;
        y = remainder;
    }
    function nod(x, y) {
        while (y > 1) {
            console.log("x = " + x + ", y = " + y);
            remainder = x % y;
            console.log("remainder = " + remainder);
            if (remainder == 0) { // если остаток равен 0 завершаем цикл
                return y;
            }
            x = y;
            y = remainder;
        }
        // остается единица - универсальный общий делитель
        return 1;
    }
    document.getElementById("input3").value = String(nod(x, y));
    console.log("вычисленный НОД = " + nod(x, y));
}
