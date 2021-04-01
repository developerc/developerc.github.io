function fib() {
    var cntFib = Number(document.getElementById("input1").value); //количество чисел ряда заданное пользователем
    var cntr = 0; //счетчик итераций
    var arrFib = []; //массив с числами ряда фибоначчи
    var tempFib; //очередное число ряда фибоначчи
    if (cntFib > 100) {
        cntFib = 100;
    }
    while (cntFib > cntr) {
        if (cntr < 2) {
            if (cntr == 0) {
                arrFib.push(0);
            }
            else {
                arrFib.push(1);
            }
        }
        else {
            tempFib = arrFib[cntr - 2] + arrFib[cntr - 1];
            arrFib.push(tempFib);
        }
        cntr++;
    }
    document.getElementById("text1").value = String(arrFib);
    console.log(arrFib);
}
