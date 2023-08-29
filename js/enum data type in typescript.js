"use strict";
var dayofTheWeek;
(function (dayofTheWeek) {
    dayofTheWeek[dayofTheWeek["SUN"] = 1] = "SUN";
    dayofTheWeek[dayofTheWeek["MON"] = 2] = "MON";
    dayofTheWeek[dayofTheWeek["TUE"] = 3] = "TUE";
    dayofTheWeek[dayofTheWeek["WED"] = 4] = "WED";
    dayofTheWeek[dayofTheWeek["THU"] = 5] = "THU";
    dayofTheWeek[dayofTheWeek["FRI"] = 6] = "FRI";
    dayofTheWeek[dayofTheWeek["SAT"] = 7] = "SAT";
})(dayofTheWeek || (dayofTheWeek = {}));
;
const day = dayofTheWeek.FRI;
console.log(day);
if (day === dayofTheWeek.FRI) {
    console.log("its FRIday today");
}
else {
    console.log("its not FRIday");
}
