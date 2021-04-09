function sortAlgorithm() {
    var mainArr = [];
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    btn1.addEventListener("click", function (e) { return handleClickBtn1(); }); //получаем массив для сортировки
    btn2.addEventListener("click", function (e) { return handleClickBtn2(); }); //сортируем массив
    function handleClickBtn1() {
        var nextNum = Number(document.getElementById("input1").value); //следующее число
        mainArr.push(nextNum);
        console.log(mainArr);
        document.getElementById("text1").value = String(mainArr);
    }
    function handleClickBtn2() {
        console.log(mainArr);
        var begin = 0;
        var end = mainArr.length - 1;
        var directionForward = true;
        hoarsort(begin, end);
        console.log(mainArr);
        document.getElementById("text2").value = String(mainArr);
        function partitition(begin, end) {
            while (begin < end) {
                if (mainArr[begin] > mainArr[end]) {
                    var temp = mainArr[begin]; //swap
                    mainArr[begin] = mainArr[end];
                    mainArr[end] = temp;
                    directionForward = !directionForward;
                }
                if (directionForward) {
                    end--;
                }
                else {
                    begin++;
                }
            }
            return begin;
        }
        function hoarsort(begin, end) {
            if (begin >= end) {
                return;
            }
            var base = partitition(begin, end);
            hoarsort(begin, base - 1);
            hoarsort(base + 1, end);
        }
    }
}
