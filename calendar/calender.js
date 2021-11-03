var today = new Date();
var year = today.getFullYear();
var month = today.getMonth();
console.log(year + "-" + month);
var daysOfmonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var firstday =new Date(year, month,1);

console.log(firstday);
console.log(firstday.getDay());
if (year % 4 == 0 && year % 100 != 0) {
    daysOfmonth[1] = 29;
} else {
    if (year % 400 == 0)
        daysOfmonth[1] = 29;
}
document.getElementsByClassName("cal_header")[0].innerText =year+"-"+(month+1);

// var main = document.getElementById("main");


// var createDiv = document.createElement("div");
// createDiv.setAttribute("class","cal_head");
// main.appendChild(createDiv);
