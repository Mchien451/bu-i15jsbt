function ex1() {
    // khai báo biến
    var stanDard = 25;
    var sub1 = 10;
    var sub2 = 9;
    var sub3 = 8;
    var area = "A";
    var areaPoint;
    var subject = 1;
    var subjectPoint;
    // xát điểm vùng theo dk
    if (area === "A") {
        areaPoint = 2;
    } else if (area === "B") {
        areaPoint = 1;
    } else if (area === "C") {
        areaPoint = 0.5;
    } else if (area === "X") {
        areaPoint = 0;
    }
    // xét diểm đối tượng
    if (subject === 1) {
        subjectPoint = 2.5;
    } else if (subject === 2) {
        subjectPoint = 1.5;
    } else if (subject === 3) {
        subjectPoint = 1;
    } else if (subject === 0) {
        subjectPoint = 0;
    }

    var totalPoint = sub1 + sub2 + sub3 + areaPoint + subjectPoint;
    console.log("ĐIểm thí sinh là:", totalPoint);
    if(totalPoint>=stanDard && sub1>0 && sub2>0 && sub3>0){
        console.log("Đậu");

    }else{
        console.log("Rớt");
    }

}
ex1();




function ex2() {
    // khai báo các biến 
    var fullname = "Minh CHiến";
    var kw = 250;
    var totalPrice;
    //  thiết lập điều kiện bài
    if (kw <= 50) {
        totalPrice = 500 * kw;
    } else if (kw <= 100) {
        totalPrice = 500 * 50 + (kw - 50) * 650;
    } else if (kw <= 200) {
        totalPrice = 500 * 50 + 50 * 650 + (kw - 100) * 850;
    } else if (kw < 350) {
        totalPrice = 500 * 50 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
    } else {
        totalPrice = 500 * 50 + 50 * 650 + 100 * 850 + 200 * 1100 + (kw - 350) * 1300;
    }
    console.log(totalPrice);
}
ex2();