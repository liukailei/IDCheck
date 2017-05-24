function IDCheck(ID) {
    //系数
    var coefficient = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    //校验码
    var checkDigit = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
    var sum = 0;
    coefficient.forEach(function (ele,index) {
        sum += ele*ID[index];
    });
    //余数
    var remainder = sum%11;
    if(checkDigit[remainder]==ID[ID.length-1]){
        return true;
    }else {
        return false;
    }
}