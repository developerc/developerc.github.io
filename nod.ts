function getNOD(){
let x: number = Number((document.getElementById("input1") as HTMLInputElement).value);
let y: number =  Number((document.getElementById("input2") as HTMLInputElement).value);
let remainder: number;

if(x < y){
    remainder = x;
    x = y;
    y = remainder;
}

function nod(x: number, y: number): number{
while(y > 1){
    console.log("x = " + x + ", y = " + y);
    remainder = x % y;
    console.log("remainder = " + remainder);
    if(remainder == 0){  // если остаток равен 0 завершаем цикл
        return y;
    }
    x = y;
    y = remainder;
}
// остается единица - универсальный общий делитель
    return 1;
}
(document.getElementById("input3") as HTMLInputElement).value = String(nod(x, y));
console.log("вычисленный НОД = " + nod(x, y));
}