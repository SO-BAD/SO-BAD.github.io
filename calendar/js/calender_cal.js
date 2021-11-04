var today = new Date();
var year = today.getFullYear();
var month = today.getMonth();
var firstday = new Date(year, month, 1);

document.getElementsByClassName("cal_header")[0].innerText = year + "-" + (month + 1);

var daysOfmonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function leap() {
    if (year % 4 == 0 && year % 100 != 0) {
        daysOfmonth[1] = 29;
    } else {
        daysOfmonth[1] = (year % 400 == 0) ? 29 : 28;
    }
}
leap();

function moveMonth(move) {
    month = month + move;
    switch (month) {
        case 12:
            year = year + 1;
            month = 0;
            break;
        case -1:
            year = year - 1;
            month = 11;
            break;
    }
    leap();
    let moveMonth_firstday = new Date(year, month, 1);

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            let startDate = parseInt((7 * i + j) - moveMonth_firstday.getDay());
            if (startDate >= 0 && startDate < daysOfmonth[month]) {
                document.getElementsByClassName("cal_div")[(7 * i + j)].innerText = startDate + 1;
            } else {
                document.getElementsByClassName("cal_div")[(7 * i + j)].innerText = "";
            }
        }
    }


    document.getElementsByClassName("cal_header")[0].innerText = year + "-" + (month + 1);
}

var main = document.getElementById("main");
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 7; j++) {
        let createDiv = document.createElement("div");
        createDiv.setAttribute("class", "cal_div");
        main.appendChild(createDiv);
        let startDate = parseInt((7 * i + j) - firstday.getDay());
        if (startDate >= 0 && startDate < daysOfmonth[month]) {
            document.getElementsByClassName("cal_div")[(7 * i + j)].innerText = startDate + 1;
        }
    }
}


